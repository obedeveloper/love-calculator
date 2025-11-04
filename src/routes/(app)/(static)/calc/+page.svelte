<script lang="ts">
  import { page } from '$app/state';
  import Actions from './Actions.svelte';
  import { setStateContext } from './context';
  import Form from './Form.svelte';
  import State from './state.svelte';
  import Steps from './Steps.svelte';
  import NumberFlow from '@number-flow/svelte';

  const state = new State(page.url.origin);
  setStateContext(state);

  const lenFirstName = $derived(state.firstName.length);
  const lenSecondName = $derived(state.secondName.length);
  const isApplicable = $derived(!!lenFirstName && !!lenSecondName);
</script>

<div class="container">
  <div>
    <Form></Form>
    {#if isApplicable}
      <Steps></Steps>
      <span><NumberFlow value={state.percentage}></NumberFlow>%</span>
    {:else}
      <span class="not-ds">N/A</span>
      <p>Not Applicable!</p>
    {/if}
  </div>

  <Actions {isApplicable}></Actions>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-size: 1.2rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  div:not(.container) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.65rem;
  }

  span {
    font-size: 3rem;
    font-weight: 700;
    color: var(--primary-color);
    background-color: hsl(from var(--primary-color) h s l / 25%);
    padding-inline: 0.75rem;
    border-radius: 0.25rem;
    border: 1.35px solid var(--primary-color);

    &:not(.not-ds) {
      font-family: 'ds-digital-bold';
    }
  }

  p {
    color: var(--primary-color);
  }
</style>
