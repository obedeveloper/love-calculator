<script lang="ts">
  import navLinks from '$lib/navLinks.json';
  import NavLink from './NavLink.svelte';
</script>

<header>
  <nav>
    {#each navLinks as { href, text, external }}
      <NavLink {href} {text} {external}></NavLink>
    {/each}
  </nav>
</header>

<style>
  nav {
    overflow-x: auto;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
