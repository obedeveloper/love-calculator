<script lang="ts">
  import { getStateContext } from './context';
  const state$ = getStateContext();
</script>

<div>
  <button onclick={() => state$.flip()}>Flip</button>
  <button onclick={() => state$.save()}>Save</button>
  <button onclick={() => state$.copyLink()}>Copy Link</button>
  <button onclick={() => state$.copyEmbedCode()}>Copy Embed Code</button>
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
