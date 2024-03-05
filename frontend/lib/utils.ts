import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYearsAgo(year: number) {
  return new Date().getFullYear() - year
}

export function prependRequest(route: string) {
  console.log(process.env.NEXT_PUBLIC_API_URL)
  return process.env.NEXT_PUBLIC_API_URL + route
}