<script lang="ts">
  import { page } from '$app/state';

  interface Props {
    title: string;
    desc: string;
    img?: string;
  }

  const { origin } = page.url;
  const { desc, img = origin + '/open-graph.png', title }: Props = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />

  <meta property="og:url" content={origin} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={img} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={page.url.host} />
  <meta property="twitter:url" content={origin} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={img} />
</svelte:head>
