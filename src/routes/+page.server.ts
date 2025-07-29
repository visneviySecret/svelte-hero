export const load = async ({ fetch, cookies }) => {
	try {
		const response = await fetch('https://ipapi.co/json/');
		const ipData = await response.json();

		if (ipData.country_code) {
			cookies.set('country_code', ipData.country_code, {
				path: '/',
				maxAge: 60 * 60 * 24 * 2,
				sameSite: 'lax'
			});
		}

		return {
			ipData
		};
	} catch (error) {
		return {
			ipData: null,
			error: error instanceof Error ? error.message : String(error)
		};
	}
};
