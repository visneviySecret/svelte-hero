<script lang="ts">
	export let onclick: ((event: MouseEvent) => void) | undefined = undefined;
</script>

<button class="btn" on:click={onclick}>
	<slot />
</button>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 178px;
		height: 48px;
		border: none;
		border-radius: 0.75rem;
		font-weight: 600;
		font-size: 1rem;
		line-height: 1.5;
		cursor: pointer;
		transition: opacity 0.2s ease;
		position: relative;
		overflow: hidden;

		background: var(--btn-gradient-primary);
		color: var(--white);
	}

	.btn:hover {
		opacity: 0.7;
	}

	.btn:active {
		opacity: 0.7;
	}

	.btn:focus-visible {
		outline: 2px solid var(--btn-outline-color);
		outline-offset: 2px;
	}

	.btn {
		animation: fadeInUp 0.5s ease-out;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
