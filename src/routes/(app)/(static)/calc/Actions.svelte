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

<div class="grid grid-cols-2 border border-pink-300">
	{#each actions as { action, text }, i}
		<button
			class="cursor-pointer border border-pink-300 bg-pink-50 px-4
			py-2 text-lg hover:bg-pink-200 {i == actions.length - 1 && 'col-span-2'}"
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
