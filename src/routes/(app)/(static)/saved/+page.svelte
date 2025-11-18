<script lang="ts">
	import { onMount } from 'svelte';
	import type { HistoryItem } from '../calc/utils';
	import Loading from './Loading.svelte';
	import History from './History.svelte';

	let history: HistoryItem[] = $state([]);
	let loading = $state(true);
	const key = 'history';

	function clear() {
		history = [];
		localStorage.removeItem(key);
	}

	onMount(() => {
		history = JSON.parse(localStorage.getItem(key) ?? '[]') as HistoryItem[];
		loading = false;
	});
</script>

{#if loading}
	<Loading></Loading>
{:else}
	{#if history.length}
		<div class="mt-4 flex justify-end px-4">
			<button
				class="cursor-pointer rounded bg-pink-700 px-4 py-2 text-lg
        font-medium text-white transition-colors duration-200 hover:bg-pink-500"
				onclick={clear}>Clear</button
			>
		</div>
	{/if}
	<History {history}></History>
{/if}
