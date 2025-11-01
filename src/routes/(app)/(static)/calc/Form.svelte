<script lang="ts">
  import { getStateContext } from './context';

  const state = getStateContext();
</script>

<form>
  <input type="text" bind:value={state.firstName} placeholder="Eg: Romeo" />
  <input type="text" bind:value={state.secondName} placeholder="Eg: Juliet" />
</form>

<style>
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }

  input {
    padding: 0.25rem 0.7rem;
  }
</style>
