<script lang="ts">
	let {
		firstName = $bindable(),
		secondName = $bindable()
	}: { firstName: string; secondName: string } = $props();
</script>

<form
	class="grid gap-3 *:w-full *:focus:border-pink-500 *:focus:ring-pink-500 sm:grid-cols-2"
>
	<input type="text" bind:value={firstName} placeholder="Eg: Romeo" />
	<input type="text" bind:value={secondName} placeholder="Eg: Juliet" />
</form>
