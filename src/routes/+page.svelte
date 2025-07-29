<script lang="ts">
	import Hero from '$lib/components/landing/sections/Hero.svelte';
	import { onMount } from 'svelte';
	import { locationStore } from '$lib/stores/location';
	import { fetchLocation } from '$lib/api/location';

	onMount(async () => {
		const locationData = await fetchLocation();
		if (locationData?.country_code) {
			locationStore.setCountryCode(locationData.country_code);
		}
	});
</script>

<svelte:head>
	<title>Svelte Hero - SSR на Vercel</title>
	<meta name="description" content="SvelteKit приложение с SSR, развернутое на Vercel" />
</svelte:head>

<Hero />
