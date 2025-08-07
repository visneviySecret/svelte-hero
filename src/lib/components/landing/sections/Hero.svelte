<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { locationStore } from '$lib/stores/location';

	$: isUSUser = $locationStore.countryCode === 'US';
	$: isButtonVisible = !isUSUser;

	function handleGetStarted() {
		alert('Welcome to trading platform!');
	}
</script>

<section>
	<div class="title-wrapper">
		<h1>Instant access to investing, anytime and anywhere</h1>
		<p>
			Start trading top assets, from stocks to metals, in minutes, right from your phone or laptop.
			Enjoy a complete trading ecosystem with built-in analytics and educational tools.
		</p>
	</div>

	<div class="button-wrapper" style="visibility: {isButtonVisible ? 'visible' : 'hidden'};">
		<Button onclick={handleGetStarted}>Get started for free</Button>
	</div>

	<div class="image-wrapper">
		<enhanced:img src="$lib/assets/Main Image.png" alt="Trading platform interface" />
	</div>
</section>

<style>
	section {
		text-align: center;
	}

	.title-wrapper {
		max-width: 951px;
		margin-inline: auto;
	}

	h1 {
		font-size: clamp(2.25rem, 5.7vw + 0.85rem, 4.5rem);
		line-height: clamp(2.75rem, 6.02vw + 1.27rem, 5.125rem);
		color: var(--text-primary);
	}

	section p {
		font-size: 14px;
		line-height: 20px;
		max-width: 673px;
		margin-top: 24px;
		margin-inline: auto;
		color: var(--text-secondary-default);

		@media (min-width: 480px) {
			font-size: clamp(0.875rem, 0.833vw + 0.625rem, 1rem);
			line-height: clamp(1.25rem, 1.667vw + 0.75rem, 1.5rem);
		}
	}

	.button-wrapper {
		margin-top: clamp(2.5rem, 0.6rem + 8vw, 3rem);
	}

	.image-wrapper {
		margin-top: clamp(2.5rem, 2rem + 4vw, 3rem);
	}

	.image-wrapper :global(img) {
		height: auto;
	}
</style>
