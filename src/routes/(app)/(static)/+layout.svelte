<script lang="ts">
  import OG from '$lib/components/OG.svelte';

  const { children } = $props();
</script>

<OG
  title="Love Calculator"
  desc="Curious about how compatible you and your partner are? This fun tool calculates your love percentage based on your names. Remember, it's all in good spirit for entertainment!"
></OG>

{@render children()}
