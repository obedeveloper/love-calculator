<script lang="ts">
	import { page } from '$app/state';
	import ExternalLink from '$lib/assets/external-link.svg';

	interface Props {
		text: string;
		href: string;
		external?: boolean;
	}

	let { href, text, external }: Props = $props();
	const target = external ? '_blank' : '';
</script>

<a
	class="px-6 py-3 sm:bg-transparent sm:p-0 sm:text-lg sm:hover:text-pink-600
	{page.url.pathname === href && 'bg-pink-500 font-medium text-white sm:text-pink-600'}"
	{href}
	{target}
>
	{text}
	{#if external}
		<img src={ExternalLink} class="inline size-6" alt="" />
	{/if}
</a>
