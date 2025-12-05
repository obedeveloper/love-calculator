<script lang="ts">
	import type { Names } from '$lib/utils';

	let { firstName = $bindable(), secondName = $bindable() }: Names = $props();
	const placeholders = { firstName, secondName };
</script>

<form class="grid gap-3 *:w-full *:focus:border-pink-500 *:focus:ring-pink-500 sm:grid-cols-2">
	<input type="text" bind:value={firstName} placeholder="Eg: {placeholders.firstName}" />
	<input type="text" bind:value={secondName} placeholder="Eg: {placeholders.secondName}" />
</form>
