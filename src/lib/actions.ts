import calc from './calc';

export interface HistoryItem {
	firstName: string;
	secondName: string;
	percentage: number;
}

export function saveToHistory(firstName: string, secondName: string) {
	const percentage = calc(firstName, secondName);
	const currentHistory = getCurrentHistory();
	const newItem = { firstName, secondName, percentage };

	if (historyExists(newItem)) return;

	currentHistory.push(newItem);
	localStorage.setItem('history', JSON.stringify(currentHistory));
}

export function getCurrentHistory() {
	return JSON.parse(localStorage.getItem('history') ?? '[]') as HistoryItem[];
}

export function clearHistory() {
	localStorage.removeItem('history');
}

function historyExists(item: HistoryItem) {
	return !!getCurrentHistory().find(
		(el) => el.firstName == item.firstName && el.secondName == item.secondName
	);
}
