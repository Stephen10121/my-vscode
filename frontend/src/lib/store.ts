import { writable } from "svelte/store";

export const devMode = writable(false);

export const windowsIsMinimised = writable(true);