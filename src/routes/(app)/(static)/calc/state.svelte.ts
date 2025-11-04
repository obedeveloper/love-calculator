import calc, { getCalculationSteps } from '$lib/calc';
import { copy, getCode, getUniqueItems, type HistoryItem } from './utils';

export default class State {
  firstName = $state('Romeo');
  secondName = $state('Juliet');

  percentage = $derived(calc(this.firstName, this.secondName));
  steps = $derived(getCalculationSteps(this.firstName, this.secondName));

  private params = $derived(
    `?firstName=${this.firstName}&secondName=${this.secondName}`
  );
  private localStorageKey = 'history';

  constructor(public url: string) {
    this.url = url;
  }

  flip() {
    [this.firstName, this.secondName] = [this.secondName, this.firstName];
  }

  copyLink() {
    copy(this.link);
  }

  copyEmbedCode() {
    copy(this.code);
  }

  save() {
    const newHistory = this.addItemToHistory();
    localStorage.setItem(this.localStorageKey, JSON.stringify(newHistory));
  }

  clear() {
    this.firstName = '';
    this.secondName = '';
  }

  private get link() {
    return `${new URL(`${this.url}/shared${this.params}`)}`;
  }

  private get code() {
    return getCode(
      this.url,
      this.params,
      `${this.firstName} Loves ${this.secondName} ${this.percentage}%`
    );
  }

  private addItemToHistory() {
    const current = this.getCurrentHistory();
    const newItem = {
      firstName: this.firstName,
      secondName: this.secondName,
      percentage: this.percentage,
    };
    current.push(newItem);

    return getUniqueItems(current);
  }

  private getCurrentHistory() {
    const str = localStorage.getItem(this.localStorageKey) ?? '[]';
    return JSON.parse(str) as HistoryItem[];
  }
}
