<script lang="ts">
	import { slide } from 'svelte/transition';
	import navLinks from '$lib/navLinks.json';
	import NavLink from './NavLink.svelte';

	interface Props {
		class: string;
	}

	let { class: c }: Props = $props();
</script>

<nav transition:slide class={c}>
	{#each navLinks as { href, text, external }}
		<NavLink {href} {text} {external}></NavLink>
	{/each}
</nav>
