<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';

  let { children } = $props();
</script>

<Nav></Nav>
<main>
  {@render children()}
</main>
