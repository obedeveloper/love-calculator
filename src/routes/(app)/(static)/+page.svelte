<script lang="ts">
  import CTA from '$lib/components/CTA.svelte';
</script>

<h1>Are You a Match Made in Heaven? Calculate Your Love Percentage!</h1>

<p>
  Welcome to our Love Percentage Calculator! Curious about how compatible you
  and your partner are? This fun tool calculates your love percentage based on
  your names. Remember, it's all in good spirit for entertainment!
</p>

<CTA></CTA>

<style>
  h1 {
    margin-block: 1rem;
    margin-bottom: 2rem;
    font-weight: 900;
    font-size: 2.95rem;
    color: var(--primary-color);
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  h1,
  p {
    text-align: center;
  }

  @media (width <= 37rem) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
</style>
