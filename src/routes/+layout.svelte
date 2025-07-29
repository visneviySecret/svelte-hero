<script>
	import '../lib/styles/global.css';
	import '../lib/styles/colors.css';
	import '../lib/styles/breackpoints.css';
</script>

<main>
	<div class="container">
		<slot />
	</div>
</main>

<style>
	main {
		background-color: var(--default);
		width: 100vw;
		height: 100dvh;
	}

	.container {
		max-width: var(--breakpoints-maxWidth);
		margin-inline: auto;
		padding-top: 96px;
		padding-inline: 24px;
	}

	@media (min-width: 720px) {
		.container {
			padding-top: 104px;
			padding-inline: 32px;
		}
	}

	@media (min-width: 1366px) {
		.container {
			padding-inline: 40px;
		}
	}

	@media (min-width: 1440px) {
		.container {
			padding-top: 116px;
			padding-inline: 56px;
		}
	}
</style>
