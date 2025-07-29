<script lang="ts">
	import { Button } from '$lib/components/ui';

	function handleGetStarted() {
		alert('Добро пожаловать в SvelteKit! 🚀');
	}
</script>

<section>
	<h1>Instant access to investing, anytime and anywhere</h1>
	<p>
		Start trading top assets, from stocks to metals, in minutes, right from your phone or laptop.
		Enjoy a complete trading ecosystem with built-in analytics and educational tools.
	</p>

	<div class="button-wrapper">
		<Button onclick={handleGetStarted}>Get started for free</Button>
	</div>
</section>

<style>
	section {
		text-align: center;
		margin-bottom: 3rem;
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
</style>
