<script lang="ts">
  import { page } from '$app/state';
  import type { HistoryItem } from '../calc/utils';

  const { history }: { history: HistoryItem[] } = $props();
</script>

<ul>
  {#each history as { firstName, secondName, percentage }}
    <li>
      <h3>
        <a
          href="{page.url
            .origin}/shared?firstName={firstName}&secondName={secondName}"
        >
          {firstName} Loves {secondName}
        </a>
      </h3>
      <p>{percentage}% 💖</p>
    </li>
  {:else}
    <div>
      <span>No Saved Love Calculations Found</span>
      <p class="p">
        It looks like you haven't saved any love calculations yet. Please save
        your calculations to access them later!
      </p>
    </div>
  {/each}
</ul>

<style>
  .p {
    color: black;
    font-weight: 400;
    font-size: 1rem;

    @media (width > 40rem) {
      font-size: 1.15rem;
    }
  }

  span {
    color: var(--primary-color);
    font-size: 2rem;
    display: block;
    margin-block: 1.75rem;
  }

  ul {
    list-style: none;
    padding-block: 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 1.5rem;
  }

  li {
    padding: 1rem 1.25rem;
    box-shadow: 5px 3px 6px hsl(from var(--primary-color) h s l / 75%);
    border: 1.5px solid var(--primary-color);
    border-left-width: 5px;
  }

  h3 {
    margin-bottom: 0.35rem;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: 'Roboto Variable';

    a {
      color: #222;
      text-decoration: none;
    }
  }

  p {
    font-weight: 600;
    color: var(--primary-color);
    font-size: 1.25rem;
  }

  h3,
  p:not(.p) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
