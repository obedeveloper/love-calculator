<script lang="ts">
	import NavBar from './NavBar.svelte';
	import CloseMenu from '$lib/assets/close.svg';
	import OpenMenu from '$lib/assets/hamburger-menu.svg';

	let menuIsClosed = $state(true);
</script>

<header
	class="sticky top-0 z-10 bg-white *:px-4 sm:flex sm:items-center sm:justify-between *:sm:px-6"
>
	<div class="flex justify-between py-4 *:size-8 *:cursor-pointer sm:justify-start">
		<a href="/" class="inline-block" onclick={() => (menuIsClosed = true)}>
			<img src="/android-chrome-512x512.png" alt="" />
		</a>

		<button class="sm:hidden" onclick={() => (menuIsClosed = !menuIsClosed)}>
			<img src={menuIsClosed ? OpenMenu : CloseMenu} alt="" />
		</button>
	</div>

	{#if !menuIsClosed}
		<NavBar
			class="absolute right-0 grid w-2/3 rounded border-[1.5px] border-pink-300
			bg-pink-50 px-0! sm:hidden"
			bind:menuIsClosed
		></NavBar>
	{/if}

	<NavBar class="hidden sm:flex sm:gap-4" bind:menuIsClosed></NavBar>
</header>
