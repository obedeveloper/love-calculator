<script lang="ts">
  const { children } = $props();
</script>

<svelte:head>
  <title>Love Calculator</title>
  <meta
    name="description"
    content="Welcome to our Love Percentage Calculator! Curious about how compatible you and your partner are? This fun tool calculates your love percentage based on your names. Remember, it's all in good spirit for entertainment!"
  />
</svelte:head>

{@render children()}
