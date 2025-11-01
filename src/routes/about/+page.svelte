<script lang="ts">
  import readme from '/README.md?raw';
  import ShowDown from 'showdown';
  import Youtube from 'svelte-youtube-embed';

  const converter = new ShowDown.Converter();
  const html = converter.makeHtml(readme);
</script>

<div class="about">
  <h1>About Our Love Percentage Calculator</h1>
  <Youtube id="oFsLVG7EAZ4" thumbnail={null} play_button={null}></Youtube>
  {@html html}
</div>

<style>
  :global {
    .about {
      max-width: 45rem;
      margin-inline: auto;

      :is(h1, h2) {
        color: var(--primary-color);
        font-weight: 700;
        margin-bottom: 1.2rem;
      }

      .you__tube {
        margin-bottom: 1rem;
      }

      h1 {
        display: none;
      }

      h2 {
        font-size: 1.95rem;
      }

      p:not(li p) {
        margin-bottom: 1.5rem;
      }

      li {
        margin-bottom: 0.75rem;
        margin-left: 1rem;
      }

      strong {
        font-weight: 600;
        text-decoration: underline;
      }

      ul {
        margin-top: 1rem;
        list-style-type: disc;
      }

      ol {
        margin-bottom: 1rem;
      }
    }

    p,
    li {
      font-size: 1rem;

      @media (width >= 40rem) {
        font-size: 1.2rem;
      }
    }
  }

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-top: 0.75rem;
    display: block;

    @media (width < 40rem) {
      font-size: 2.5rem;
    }
  }
</style>
