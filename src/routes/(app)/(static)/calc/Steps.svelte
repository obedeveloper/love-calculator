<script lang="ts">
	const { steps }: { steps: number[][] } = $props();
</script>

<div class="space-y-1">
	{#each steps as step}
		<p class="line-clamp-1 text-center font-ds-digi text-3xl">{step.join(' ')}</p>
	{/each}
</div>
