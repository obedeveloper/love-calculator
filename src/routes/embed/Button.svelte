<script lang="ts">
	interface Props {
		link: string;
		text: string;
		class?: string;
	}
	const { link, text, class: c }: Props = $props();
</script>

<a
	class="rounded px-4 py-2 text-2xl
  font-bold transition-colors {c}"
	href={link.replace('og', 'shared')}
>
	{text}
</a>
