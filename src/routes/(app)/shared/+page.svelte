<script lang="ts">
	import OG from '$lib/components/OG.svelte';

	const { data } = $props();
	const { ogURL, title } = data;
</script>

<OG {title} desc="{title}! Remember, it's all in good spirit for entertainment!" img={ogURL}></OG>

<img class="mx-auto w-full max-w-160" src={ogURL} alt="" />
