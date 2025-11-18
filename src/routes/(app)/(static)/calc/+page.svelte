<script lang="ts">
	import { page } from '$app/state';
	import Actions from './Actions.svelte';
	import { setStateContext } from './context';
	import Form from './Form.svelte';
	import State from './state.svelte';
	import Steps from './Steps.svelte';
	import NumberFlow from '@number-flow/svelte';

	const state = new State(page.url.origin);
	setStateContext(state);

	const lenFirstName = $derived(state.firstName.length);
	const lenSecondName = $derived(state.secondName.length);
	const isApplicable = $derived(!!lenFirstName && !!lenSecondName);
</script>

<div class="my-4 space-y-4 px-4">
	<Form></Form>
	{#if isApplicable}
		{@render Calculations()}
		<Actions {isApplicable}></Actions>
	{:else}
		<p class="mt-4 border-[1.5px] border-red-400 bg-red-100 py-2 text-center text-lg">
			N/A <br />
			Not Applicable!
		</p>
	{/if}
</div>

{#snippet Calculations()}
	<div class="grid gap-4">
		<Steps></Steps>
		<p
			class="border-[1.5px] border-pink-400
      bg-pink-100 text-center font-ds-digi-b text-7xl text-pink-900"
		>
			<NumberFlow value={state.percentage}></NumberFlow>%
		</p>
	</div>
{/snippet}
