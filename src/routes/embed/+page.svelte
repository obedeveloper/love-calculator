<script lang="ts">
	import { page } from '$app/state';
	import Button from './Button.svelte';

	const { data } = $props();
	const { link } = data;

	let showError = $state(false);
</script>

{#if !showError}
	<img src={link} onerror={() => (showError = true)} alt="" />
	<div class="mt-4 flex justify-center gap-3">
		<Button
			link={link.replace('og', 'shared')}
			text="View On Site"
			class="bg-pink-700 text-white hover:bg-pink-500"
		></Button>
		<Button
			link={page.url.origin + '/calc'}
			text="Calculate love"
			class="border-[1.5px] border-pink-700 text-pink-700 hover:border-pink-500 hover:text-pink-500"
		></Button>
	</div>
{:else}
	<div class="min-h-screen place-content-center space-y-5 text-center">
		<p class="text-7xl font-bold text-red-500">400</p>
		<p class="text-3xl">Bad Request!</p>
	</div>
{/if}
