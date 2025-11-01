<script lang="ts">
  import { getStateContext } from './context';

  const state = getStateContext();
</script>

<ul>
  {#each state.steps as step}
    <li>{step.join('')}</li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
  }

  li {
    text-align: center;
    letter-spacing: 0.35rem;
    font-size: 2rem;
    font-family: 'ds-digital';
  }
</style>
