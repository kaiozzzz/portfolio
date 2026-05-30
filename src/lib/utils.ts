import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combina classes Tailwind sem conflito — use em todos os componentes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formata ano para exibição
export function formatYear(year: number): string {
  return year.toString();
}

// Trunca texto com ellipsis
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
}

// Delay para animações escalonadas
export function getStaggerDelay(index: number, base = 0.1): number {
  return index * base;
}
