<script lang="ts">
	import { page } from '$app/state';
	import ExternalLink from '$lib/assets/external-link.svg';

	interface Props {
		text: string;
		href: string;
		external?: boolean;
		menuIsClosed: boolean;
	}

	let { href, text, external, menuIsClosed = $bindable() }: Props = $props();
	const target = external ? '_blank' : '';
</script>

<a
	onclick={() => (menuIsClosed = true)}
	class="px-6 py-3
	{page.url.pathname === href && 'bg-pink-500 font-medium text-white'}"
	{href}
	{target}
>
	{text}
	{#if external}
		<img src={ExternalLink} class="inline size-6" alt="" />
	{/if}
</a>
