<script lang="ts">
	import { page } from '$app/state';
	import { clearHistory, getCurrentHistory } from '$lib/actions';

	let history = $state(getCurrentHistory());
</script>

{#if history.length}
	<div class="mt-4 flex justify-end px-4">
		<button
			class="cursor-pointer rounded bg-pink-700 px-4 py-2 text-lg
      font-medium text-white transition-colors duration-200 hover:bg-pink-500"
			onclick={() => {
				clearHistory();
				history = getCurrentHistory();
			}}>Clear</button
		>
	</div>
{/if}

<ul class="my-4 space-y-4 px-4 sm:grid sm:gap-4 sm:space-y-0" class:not-empty={history.length}>
	{#each history as { firstName, secondName, percentage }}
		{@const link = `${new URL(
			`${page.url.origin}/shared?firstName=${firstName}&secondName=${secondName}`
		)}`}

		<li class="space-y-1 border border-pink-300 bg-pink-50 px-3 py-2 text-lg">
			<h3 class="line-clamp-1">
				<a href={link}>
					{firstName} Loves {secondName}
				</a>
			</h3>
			<p class="font-ds-digi-b text-3xl text-pink-700">
				{percentage}%
			</p>
			<p class="line-clamp-1 space-x-2">
				{#each { length: 10 } as _, i}
					<span class="font-noto {i + 1 <= percentage / 10 && 'text-pink-500'}">💝</span>
				{/each}
			</p>
		</li>
	{:else}
		<h2 class="text-4xl text-center text-red-500">No Saved Love Calculations Found!</h2>
		<p class="mt-8 text-justify sm:text-center">
			It looks like you haven't saved any love
			<a class="underline text-red-500" href="/calc">calculations</a> yet. Please save your calculations
			to access them later!
		</p>
	{/each}
</ul>

<style>
	@media (width >= 40rem) {
		ul.not-empty {
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		}
	}
</style>
