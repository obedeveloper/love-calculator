<script lang="ts">
	import { getStateContext } from './context';
	const state$ = getStateContext();

	interface Props {
		isApplicable: boolean;
	}

	const { isApplicable }: Props = $props();

	const actions = [
		{ text: 'Flip', action: () => state$.flip() },
		{ text: 'Clear', action: () => state$.clear() },
		{ text: 'Save', action: () => state$.save() },
		{ text: 'Copy Link', action: () => state$.copyLink() },
		{ text: 'Copy Embed Code', action: () => state$.copyEmbedCode() }
	];

	const feedbacks = ['Saved!', 'Link Copied!', 'Code Copied!'];
</script>

<div class="grid grid-cols-2 gap-2">
	{#each actions as { action, text }, i}
		<button
			class="cursor-pointer transition-colors duration-300 hover:bg-rose-300
			{i == 0 && 'bg-rose-500 text-white hover:bg-rose-600'} rounded
			py-2 text-lg {i == actions.length - 1 && 'col-span-2'} bg-rose-200"
			disabled={!isApplicable}
			onclick={(e) => {
				action();
				const el = e.target as HTMLButtonElement;

				if (i > 1) {
					el.innerText = feedbacks[i - 2];
					setTimeout(() => (el.innerText = text), 1e3);
				}
			}}
		>
			{text}
		</button>
	{/each}
</div>
