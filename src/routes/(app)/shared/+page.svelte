<script lang="ts">
	import Calc from '$lib/components/calc/Calc.svelte';
	import OG from '$lib/components/OG.svelte';

	const { data } = $props();
	const { ogURL, title } = data;
</script>

<OG {title} desc="{title}! Remember, it's all in good spirit for entertainment!" img={ogURL}></OG>

<Calc fname={data.firstName} sname={data.secondName}></Calc>
