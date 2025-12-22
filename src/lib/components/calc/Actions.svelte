<script lang="ts">
	import { saveToHistory } from '$lib/actions';
	import Button from './Button.svelte';
	import { page } from '$app/state';

	let {
		firstName = $bindable(),
		secondName = $bindable()
	}: { firstName: string; secondName: string } = $props();

	const link = $derived(
		`${new URL(`${page.url.origin}/shared?firstName=${firstName}&secondName=${secondName}`)}`
	);
</script>

<div class="grid grid-cols-2 gap-2">
	<Button onclick={() => ([firstName, secondName] = [secondName, firstName])}>Flip</Button>
	<Button onclick={() => saveToHistory(firstName, secondName)}>Save</Button>
	<Button onclick={() => ([firstName, secondName] = ['', ''])}>Clear</Button>
	<Button onclick={() => navigator.clipboard.writeText(link)}>Copy Link</Button>
</div>
