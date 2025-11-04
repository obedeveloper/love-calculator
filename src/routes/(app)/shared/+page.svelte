<script lang="ts">
  import OG from '$lib/components/OG.svelte';

  const { data } = $props();
  const { ogURL, title } = data;
</script>

<OG
  {title}
  desc="{title}! Remember, it's all in good spirit for entertainment!"
  img={ogURL}
></OG>

<h1>{title}</h1>
<img src={ogURL} alt="" />

<style>
  h1 {
    font-size: 4rem;
    text-align: center;
    margin-block: 1.5rem;
    text-decoration: underline;
  }

  img {
    width: 100%;
    margin-bottom: 2rem;
    max-width: 62.5rem;
    margin-inline: auto;
    display: block;
  }
</style>
