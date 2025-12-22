<script lang="ts">
	let {
		firstName = $bindable(),
		secondName = $bindable()
	}: { firstName: string; secondName: string } = $props();

	let fname = $derived(firstName);
	let sname = $derived(secondName);
</script>

<form
	onsubmit={(e) => {
		e.preventDefault();

		firstName = fname;
		secondName = sname;
	}}
	class="grid gap-3 *:w-full *:focus:border-pink-500 *:focus:ring-pink-500 sm:grid-cols-2"
>
	<input type="text" bind:value={fname} placeholder="Eg: Romeo" />
	<input type="text" bind:value={sname} placeholder="Eg: Juliet" />
	<button hidden>Calculate</button>
</form>
