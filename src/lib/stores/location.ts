import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface LocationData {
	countryCode?: string;
}

function getCountryCodeFromCookies(): string | null {
	if (!browser) return null;

	const cookies = document.cookie.split(';');
	for (const cookie of cookies) {
		const [name, value] = cookie.trim().split('=');
		if (name === 'country_code') {
			return value;
		}
	}
	return null;
}

function createLocationStore() {
	const initialCountryCode = getCountryCodeFromCookies();
	const initialData: LocationData = initialCountryCode ? { countryCode: initialCountryCode } : {};

	const { subscribe, set, update } = writable<LocationData>(initialData);

	return {
		subscribe,
		set,
		update,
		setCountryCode: (countryCode: string) => {
			update((data) => ({ ...data, countryCode }));
		},
		reset: () => {
			set({});
		}
	};
}

export const locationStore = createLocationStore();
