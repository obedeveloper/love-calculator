<script lang="ts">
	import navLinks from '$lib/navLinks.json';
	import NavLink from './NavLink.svelte';
	import CloseMenu from '$lib/assets/close.svg';
	import OpenMenu from '$lib/assets/hamburger-menu.svg';
	import { slide } from 'svelte/transition';

	let menuIsClosed = $state(true);
</script>

<header class="sticky top-0 bg-white *:px-4 sm:flex sm:items-center sm:justify-between *:sm:px-6">
	<div class="flex justify-between py-4 *:size-8 *:cursor-pointer sm:justify-start">
		<a href="/" class="inline-block" onclick={() => (menuIsClosed = true)}>
			<img src="/android-chrome-512x512.png" alt="" />
		</a>

		<button class="sm:hidden" onclick={() => (menuIsClosed = !menuIsClosed)}>
			<img src={menuIsClosed ? OpenMenu : CloseMenu} alt="" />
		</button>
	</div>

	{#if !menuIsClosed}
		{@render NavBar('grid bg-pink-50 sm:hidden')}
	{/if}

	{@render NavBar('hidden sm:flex sm:gap-4')}
</header>

{#snippet NavBar(c: string)}
	<nav transition:slide class={c}>
		{#each navLinks as { href, text, external }}
			<NavLink bind:menuIsClosed {href} {text} {external}></NavLink>
		{/each}
	</nav>
{/snippet}
