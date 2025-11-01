<script lang="ts">
  import { onMount } from 'svelte';
  import type { HistoryItem } from '../calc/utils';
  import Loading from './Loading.svelte';
  import History from './History.svelte';

  let history: HistoryItem[] = $state([]);
  let loading = $state(true);
  const key = 'history';

  function clear() {
    history = [];
    localStorage.removeItem(key);
  }

  onMount(() => {
    history = JSON.parse(localStorage.getItem(key) ?? '[]') as HistoryItem[];
    setTimeout(() => (loading = false), 2e3);
  });
</script>

{#if loading}
  <Loading></Loading>
{:else}
  {#if history.length}
    <div>
      <button onclick={clear}>Clear</button>
    </div>
  {/if}
  <History {history}></History>
{/if}

<style>
  div {
    display: flex;
    justify-content: end;
  }

  button {
    padding: 0.25rem 1rem;
    background-color: var(--primary-color);
    color: white;
    font-weight: 700;
    border: none;
    font-size: 1.2rem;
    border-radius: 0.2rem;
    cursor: pointer;
  }
</style>
