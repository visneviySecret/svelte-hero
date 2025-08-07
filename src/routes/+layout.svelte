<script>
	import '../lib/styles/global.css';
	import '../lib/styles/colors.css';
</script>

<main>
	<div class="container">
		<slot />
	</div>
</main>

<style lang="scss">
	@use '../lib/styles/media.scss' as *;

	main {
		background-color: var(--default);
		width: 100vw;
		min-height: 100dvh;
		padding-bottom: clamp(0rem, -7.775rem + 32.736vw, 21.688rem);
	}

	.container {
		max-width: $maxWidth;
		margin-inline: auto;
		padding-top: 96px;
		padding-inline: 24px;
	}

	@include tabM {
		.container {
			padding-top: 104px;
			padding-inline: 32px;
		}
	}

	@include deskL {
		.container {
			padding-inline: 40px;
		}
	}

	@include deskXL {
		.container {
			padding-top: 116px;
			padding-inline: 56px;
		}
	}
</style>
