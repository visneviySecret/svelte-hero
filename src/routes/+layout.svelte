<script>
	import '../lib/styles/global.css';
	import '../lib/styles/colors.css';
	import '../lib/styles/breackpoints.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		max-width: var(--breakpoints-maxWidth);
		margin: 0 auto;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
</style>
