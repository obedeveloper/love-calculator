<script lang="ts">
	import { getStateContext } from './context';

	const state = getStateContext();
</script>

<form class="grid gap-3 *:w-full *:focus:border-pink-500 *:focus:ring-pink-500">
	<input type="text" bind:value={state.firstName} placeholder="Eg: Romeo" />
	<input type="text" bind:value={state.secondName} placeholder="Eg: Juliet" />
</form>
