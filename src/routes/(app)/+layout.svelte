<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<main class="min-h-dvh">
	<Nav></Nav>
	{@render children()}
</main>
