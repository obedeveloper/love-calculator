<script lang="ts">
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
</script>

<button onclick={() => goto(resolve('/calc'))}>Calculate Love!</button>

<style>
  button {
    padding-inline: 1rem;
    padding-block: 0.5rem;
    font-size: 1.65rem;
    background-color: var(--primary-color);
    border: none;
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-inline: auto;
    display: block;
    font-weight: 600;
  }
</style>
