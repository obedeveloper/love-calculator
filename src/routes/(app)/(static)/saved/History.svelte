<script lang="ts">
	import { page } from '$app/state';
	import type { HistoryItem } from '../calc/utils';

	const { history }: { history: HistoryItem[] } = $props();
</script>

<ul class="my-4 space-y-3 px-4">
	{#each history as { firstName, secondName, percentage }}
		<li class="space-y-1 border border-pink-300 bg-pink-50 px-3 py-2 text-lg">
			<h3 class="line-clamp-1">
				<a href="{page.url.origin}/shared?firstName={firstName}&secondName={secondName}">
					{firstName} Loves {secondName}
				</a>
			</h3>
			<p class="font-ds-digi-b text-3xl text-pink-700">
				{percentage}%
			</p>
			<p class="flex flex-wrap gap-2">
				{#each { length: 10 } as _, i}
					<span class="font-noto {i + 1 <= percentage / 10 && 'text-pink-500'}">💝</span>
				{/each}
			</p>
		</li>
	{:else}
		<h2 class="text-4xl text-center text-red-500">No Saved Love Calculations Found!</h2>
		<p class="mt-8 text-justify">
			It looks like you haven't saved any love
			<a class="underline text-red-500" href="/calc">calculations</a> yet. Please save your calculations
			to access them later!
		</p>
	{/each}
</ul>
