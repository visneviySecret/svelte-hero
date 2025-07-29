import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getCurrentBreakpoint } from '$lib/styles/breakpoints';

export const currentBreakpoint = writable(getCurrentBreakpoint());

if (browser) {
	const updateBreakpoint = () => {
		currentBreakpoint.set(getCurrentBreakpoint());
	};

	window.addEventListener('resize', updateBreakpoint);
	updateBreakpoint();
}
