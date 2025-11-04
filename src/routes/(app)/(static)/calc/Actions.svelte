<script lang="ts">
  import { getStateContext } from './context';
  const state$ = getStateContext();

  interface Props {
    isApplicable: boolean;
  }

  const { isApplicable }: Props = $props();

  const actions = [
    { text: 'Flip', action: () => state$.flip() },
    { text: 'Clear', action: () => state$.clear() },
    { text: 'Save', action: () => state$.save() },
    { text: 'Copy Link', action: () => state$.copyLink() },
    { text: 'Copy Embed Link', action: () => state$.copyEmbedCode() },
  ];
</script>

<div>
  {#each actions as { action, text }}
    <button disabled={!isApplicable} onclick={action}>{text}</button>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: hsl(from var(--primary-color) h 60% l / 90%);
    border: none;
    color: white;
    border-radius: 0.35rem;
    cursor: pointer;
    width: 100%;

    &:disabled {
      background-color: hsl(from black h s l / 50%);
      cursor: auto;
    }

    &:focus {
      animation: bounce 0.5s ease-in-out;
    }
  }

  @keyframes bounce {
    50% {
      scale: 0.9;
    }
  }

  @media (width <= 50.5625rem) {
    div {
      flex-direction: row;
      flex-wrap: wrap;
    }

    button {
      flex-grow: 1;
      width: fit-content;
    }
  }
</style>
