import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function sleep(time: number) {
  await Promise.resolve().then(() => setTimeout(() => { }, time));
}
