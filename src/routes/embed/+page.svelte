<script lang="ts">
  const { data } = $props();
  const { link } = data;

  let showError = $state(false);
</script>

{#if !showError}
  <img src={link} onerror={() => (showError = true)} alt="" />
{:else}
  <p>
    <span>400</span>
    <span class="msg">Bad Request!</span>
  </p>
{/if}

<style>
  img {
    max-width: 100%;
  }

  p {
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100dvh;
  }

  span:first-child {
    font-size: 20vw;
    font-family: 'ds-digital-bold';
  }

  .msg {
    font-size: 12vw;
    color: black;
  }
</style>
