import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function getRandomColor(colors: string[]): string {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
