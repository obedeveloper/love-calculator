<script lang="ts">
  import '@fontsource-variable/roboto';
  import '@fontsource/libre-caslon-text';
  import '$lib/app.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
