<script lang="ts">
	import Hero from '$lib/components/landing/sections/Hero.svelte';
	import { onMount } from 'svelte';
	import { locationStore } from '$lib/stores/location';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		if (data.ipData?.country_code) {
			locationStore.setCountryCode(data.ipData.country_code);
		}
	});
</script>

<svelte:head>
	<title>Svelte Hero - SSR на Vercel</title>
	<meta name="description" content="SvelteKit приложение с SSR, развернутое на Vercel" />
</svelte:head>

<Hero />
