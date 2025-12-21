<script lang="ts">
	import { page } from '$app/state';
	import Actions from './Actions.svelte';
	import { setStateContext } from './context';
	import Form from './Form.svelte';
	import State from './state.svelte';
	import Steps from './Steps.svelte';
	import NumberFlow from '@number-flow/svelte';
	import JSConfetti from 'js-confetti';
	import romance from '$lib/assets/careles-romance.mp3';
	import laughing from '$lib/assets/laughing-dog-meme.mp3';
	import { onMount } from 'svelte';

	const state = new State(page.url.origin);
	setStateContext(state);

	const lenFirstName = $derived(state.firstName.length);
	const lenSecondName = $derived(state.secondName.length);
	const isApplicable = $derived(!!lenFirstName && !!lenSecondName);
	let percentage = $derived(state.percentage);

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
		<Form></Form>
		{#if isApplicable}
			{@render Calculations()}
			<Actions {isApplicable}></Actions>
		{:else}
			<p class="mt-4 border-[1.5px] border-red-400 bg-red-100 py-2 text-center text-lg">
				N/A <br />
				Not Applicable!
			</p>
		{/if}
	</div>
</div>

{#snippet Calculations()}
	<div class="grid gap-4">
		<Steps></Steps>
		<p
			class="border-[1.5px] border-pink-400
      bg-pink-100 text-center font-ds-digi-b text-7xl text-pink-900"
		>
			<NumberFlow value={state.percentage}></NumberFlow>%
		</p>
	</div>
{/snippet}
