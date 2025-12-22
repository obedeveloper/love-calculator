<script lang="ts">
	import Steps from '$lib/components/calc/Steps.svelte';
	import NumberFlow from '@number-flow/svelte';

	const { percentage, steps }: { steps: number[][]; percentage: number } = $props();
</script>

<div class="grid gap-4">
	<Steps {steps}></Steps>
	<p
		class="border-[1.5px] border-pink-400
      bg-pink-100 text-center font-ds-digi-b text-7xl text-pink-900"
	>
		<NumberFlow value={percentage}></NumberFlow>%
	</p>
</div>
