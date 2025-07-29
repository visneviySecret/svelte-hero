export const BREAKPOINTS = {
	// Mobile
	mobS: 393,
	mobL: 480,

	// Tablet
	tabM: 720,

	// Desktop
	deskS: 1024,
	deskL: 1366,
	deskXL: 1440
} as const;

export function getCurrentBreakpoint() {
	if (typeof window === 'undefined') return null;

	const width = window.innerWidth;
	if (width >= BREAKPOINTS.deskXL) return 'deskXL';
	if (width >= BREAKPOINTS.deskL) return 'deskL';
	if (width >= BREAKPOINTS.deskS) return 'deskS';
	if (width >= BREAKPOINTS.tabM) return 'tabM';
	if (width >= BREAKPOINTS.mobL) return 'mobL';
	return 'mobS';
}
