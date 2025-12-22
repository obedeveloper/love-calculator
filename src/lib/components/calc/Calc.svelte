<script lang="ts">
	import Actions from '$lib/components/calc/Actions.svelte';
	import Form from '$lib/components/calc/Form.svelte';
	import JSConfetti from 'js-confetti';
	import romance from '$lib/assets/careles-romance.mp3';
	import laughing from '$lib/assets/laughing-dog-meme.mp3';
	import { onMount } from 'svelte';
	import calc, { getCalculationSteps } from '$lib/calc';
	import Calculations from './Calculations.svelte';

	const { fname, sname }: { fname?: string; sname?: string } = $props();

	let firstName = $state(fname ?? 'Romeo');
	let secondName = $state(sname ?? 'Juliet');
	const isApplicable = $derived(!!firstName.length && !!secondName.length);
	let percentage = $derived(calc(firstName, secondName));
	const steps = $derived(getCalculationSteps(firstName, secondName));

	onMount(() => {
		const jsConfetti = new JSConfetti();
		const audioRomance = new Audio(romance);
		const audioLaughing = new Audio(laughing);

		audioRomance.loop = true;
		audioLaughing.loop = true;

		function pauseRomance() {
			audioRomance.pause();
			audioRomance.currentTime = 0;
		}

		function pauseLaughing() {
			audioLaughing.pause();
			audioLaughing.currentTime = 0;
		}

		$effect(() => {
			(function confettiLaugh() {
				if (percentage >= 20 || percentage == 0) return;

				jsConfetti
					.addConfetti({
						emojis: ['😂', '😆', '😅', '🤣', '😁'],
						confettiNumber: 200
					})
					.then(confettiLaugh);
			})();

			(function confettiRomance() {
				if (percentage !== 100) return;

				jsConfetti
					.addConfetti({
						emojis: ['🥰', '😍', '💝', '💖', '😘'],
						confettiNumber: 200
					})
					.then(confettiRomance);
			})();

			percentage === 100 ? audioRomance.play() : pauseRomance();
			percentage < 20 ? audioLaughing.play() : pauseLaughing();
		});

		return () => {
			pauseRomance();
			pauseLaughing();
			percentage = 0;
		};
	});
</script>

<div class="mx-auto my-4 max-w-125 px-4 sm:grid sm:max-w-5xl sm:grid-cols-2 sm:gap-6">
	<div
		class="hidden h-full min-h-100 rounded-lg bg-[url('/couple-holding-bright-red-rose-hands.jpg')]
		bg-cover bg-center bg-no-repeat sm:block"
	></div>
	<div class="space-y-4">
		<Form bind:firstName bind:secondName></Form>
		{#if isApplicable}
			<Calculations {percentage} {steps}></Calculations>
			<Actions bind:firstName bind:secondName></Actions>
		{:else}
			<p class="mt-4 border-[1.5px] border-red-400 bg-red-100 py-2 text-center text-lg">
				N/A <br />
				Not Applicable!
			</p>
		{/if}
	</div>
</div>
