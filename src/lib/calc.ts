export default function (firstName: string, secondName: string): number {
  const combinedNames = combineNames(firstName, secondName);

  return (function calculateResult(numbers: string): number {
    const value = parseInt(numbers, 10);
    return value <= 100 ? value : calculateResult(addDigitPairs(numbers));
  })(countLetterOccurrences(combinedNames));
}

export function getCalculationSteps(
  firstName: string,
  secondName: string
): number[][] {
  const combinedNames = combineNames(firstName, secondName);
  let current = countLetterOccurrences(combinedNames);
  const steps: number[][] = [Array.from(current, (c) => Number(c))];

  while (parseInt(current, 10) > 100) {
    current = addDigitPairs(current);
    steps.push(Array.from(current, (c) => Number(c)));
  }

  steps.pop();

  return steps;
}

function countLetterOccurrences(text: string): string {
  const letterCounts = new Map<string, number>();

  for (const char of text) {
    letterCounts.set(char, (letterCounts.get(char) ?? 0) + 1);
  }

  return Array.from(letterCounts.values()).join('');
}

function addDigitPairs(numbers: string): string {
  const length = numbers.length;
  let result = '';

  for (let i = 0; i < Math.floor(length / 2); i++) {
    const sum = Number(numbers[i]) + Number(numbers[length - i - 1]);
    result += sum.toString();
  }

  if (length % 2 !== 0) {
    result += numbers[Math.floor(length / 2)];
  }

  return result;
}

function combineNames(firstName: string, secondName: string) {
  return `${firstName}loves${secondName}`.replaceAll(' ', '').toLowerCase();
}
