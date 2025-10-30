<script lang="ts">
  import { page } from '$app/state';

  interface Props {
    text: string;
    href: string;
    external?: boolean;
  }

  let { href, text, external }: Props = $props();
  const target = external ? '_blank' : '';
  text += external ? '↗' : '';
</script>

<a {href} {target} class:current={page.url.pathname === href}>
  {text}
</a>

<style>
  a {
    color: inherit;
    text-decoration: none;
    font-size: 1.1rem;

    &:hover,
    &.current {
      text-decoration: underline;
      text-decoration-thickness: 1.5px;
    }

    &.current {
      color: var(--primary-color);
      font-weight: 500;
    }
  }
</style>
