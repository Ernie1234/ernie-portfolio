import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FALLBACK_IMAGE =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F508699%2Flandscape-placeholder&psig=AOvVaw2BL212D55BwOlfM5mNyB8e&ust=1748520368252000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD0sY2Qxo0DFQAAAAAdAAAAABAE";
