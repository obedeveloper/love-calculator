export interface HistoryItem {
  firstName: string;
  secondName: string;
  percentage: number;
}

export function getUniqueItems(current: HistoryItem[]): HistoryItem[] {
  const uniqueItems: HistoryItem[] = [];
  const uniqueKeys = new Set<string>();

  for (const item of current) {
    const key = `${item.firstName.toLowerCase()}-${item.secondName.toLowerCase()}`;

    if (!uniqueKeys.has(key)) {
      uniqueKeys.add(key);
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}

export function copy(text: string) {
  navigator.clipboard.writeText(text);
}

export function getCode(url: string, params: string, title: string) {
  return `
  <iframe
    src="${new URL(`${url}/embed/${params}`)}"
    title="${title}"
  >
  </iframe>`;
}
