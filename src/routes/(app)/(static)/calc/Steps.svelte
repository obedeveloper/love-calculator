<script lang="ts">
	import { getStateContext } from './context';

	const state = getStateContext();
</script>

<div class="space-y-1">
	{#each state.steps as step}
		<p class="line-clamp-1 text-center font-ds-digi text-3xl">{step.join(' ')}</p>
	{/each}
</div>
