// Remove duplicados
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

// Agrupa por chave
export function groupBy<T extends Record<string, any>>(
  arr: T[],
  key: keyof T
): Record<string, T[]> {
  return arr.reduce((acc: Record<string, T[]>, obj) => {
    const group = String(obj[key]);
    (acc[group] = acc[group] || []).push(obj);
    return acc;
  }, {});
}

// Soma valores numéricos
export function sumBy<T extends Record<string, any>>(
  arr: T[],
  key: keyof T
): number {
  return arr.reduce((total, obj) => total + Number(obj[key] ?? 0), 0);
}
