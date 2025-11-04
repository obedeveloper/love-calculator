<svelte:options css="injected" />

<script lang="ts">
  import calc from '$lib/calc';
  import { randomLoveEmoji } from './utils';

  interface Props {
    firstName: string;
    secondName: string;
  }

  const { firstName, secondName }: Props = $props();
</script>

<div>
  <h1>{firstName}</h1>
  <p>
    <span class="emoji">{randomLoveEmoji()}</span>
    <span class="percentage">{calc(firstName, secondName)}%</span>
  </p>
  <h1>{secondName}</h1>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 100%;
    padding: 1rem;
  }

  h1 {
    font-family: 'inter';
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    color: #570023;
  }

  h1,
  .emoji {
    font-size: 7.5rem;
  }

  .percentage {
    font-size: 15rem;
    font-family: 'ds-digital';
  }

  .emoji {
    font-family: 'noto-emoji';
  }
</style>
