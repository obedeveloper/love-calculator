<script lang="ts">
  import '@fontsource-variable/roboto';
  import '@fontsource/libre-caslon-text';
  import '$lib/app.css';

  import favicon from '$lib/assets/favicon.svg';
  import Nav from '$lib/components/Nav.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Nav></Nav>
<main>
  {@render children()}
</main>
