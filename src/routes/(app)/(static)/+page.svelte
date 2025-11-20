<script lang="ts">
	import CTA from '$lib/components/CTA.svelte';
</script>

<div
	class="hero grid place-content-center gap-6 px-4 py-4
	sm:bg-cover sm:bg-center sm:px-6 *:sm:mx-auto *:sm:max-w-160"
>
	<h1
		class="font-libre text-center text-4xl font-bold text-pink-600
		sm:text-5xl sm:text-white"
	>
		Are You a Match Made in Heaven? <u>Calculate</u> Your Love Percentage!
	</h1>

	<p class="text-justify sm:text-center sm:text-lg sm:text-white">
		Welcome to our Love Percentage Calculator! <em>Curious</em> about how compatible you and your
		partner are? This fun tool calculates your love percentage based on your names.
		<u class="underline-offset-2">Remember, </u> it's all in good spirit for entertainment! Read
		<a
			class="text-pink-700 underline sm:bg-white sm:px-1
			sm:transition-colors sm:hover:bg-pink-700 sm:hover:text-white"
			href="/about">about</a
		> how we calculate it!
	</p>

	<CTA></CTA>
</div>

<style>
	@media (width >= 40rem) {
		div {
			background-image:
				linear-gradient(hsl(from var(--color-pink-900) h s l / 50%)), url('/couple.jpg');
		}
	}
</style>
