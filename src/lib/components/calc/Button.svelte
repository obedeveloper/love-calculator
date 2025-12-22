<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	const {
		onclick,
		children,
		disabled,
		class: styles
	}: {
		onclick: MouseEventHandler<HTMLButtonElement>;
		disabled?: boolean;
		class?: string;
		children: Snippet;
	} = $props();
</script>

<button
	class="cursor-pointer rounded bg-rose-200 py-2 text-lg
  transition-colors duration-300 hover:bg-rose-300 {styles}"
	{disabled}
	{onclick}
>
	{@render children()}
</button>
