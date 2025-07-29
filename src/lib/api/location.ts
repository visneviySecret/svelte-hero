import { browser } from '$app/environment';

export interface LocationResponse {
	country_code?: string;
	error?: string;
}

export async function fetchLocation(): Promise<LocationResponse> {
	if (!browser) {
		return { error: 'Not available on server side' };
	}

	try {
		const response = await fetch('/api/location', {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		if (data.error) {
			throw new Error(data.error);
		}

		if (data.country_code) {
			document.cookie = `country_code=${data.country_code}; path=/; max-age=${60 * 60 * 24 * 2}; samesite=lax`;
		}

		return {
			country_code: data.country_code
		};
	} catch (error) {
		return {
			error: error instanceof Error ? error.message : 'Unknown error occurred'
		};
	}
}
