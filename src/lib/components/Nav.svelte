<script lang="ts">
	import navLinks from '$lib/navLinks.json';
	import NavLink from './NavLink.svelte';
	import CloseMenu from '$lib/assets/close.svg';
	import OpenMenu from '$lib/assets/hamburger-menu.svg';
	import { slide } from 'svelte/transition';

	let menuIsClosed = $state(true);
</script>

<header class="sticky top-0 bg-white *:px-4">
	<div class="flex justify-between py-4 *:size-8 *:cursor-pointer">
		<a href="/" class="inline-block" onclick={() => (menuIsClosed = true)}>
			<img src="/android-chrome-512x512.png" alt="" />
		</a>

		<button onclick={() => (menuIsClosed = !menuIsClosed)}>
			<img src={menuIsClosed ? OpenMenu : CloseMenu} alt="" />
		</button>
	</div>

	{#if !menuIsClosed}
		<nav transition:slide class="grid bg-pink-50">
			{#each navLinks as { href, text, external }}
				<NavLink bind:menuIsClosed {href} {text} {external}></NavLink>
			{/each}
		</nav>
	{/if}
</header>
