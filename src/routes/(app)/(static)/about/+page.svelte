<script lang="ts">
	import readme from '/README.md?raw';
	import ShowDown from 'showdown';
	import Youtube from 'svelte-youtube-embed';

	const converter = new ShowDown.Converter();
	const html = converter.makeHtml(readme);
</script>

<div class="my-4">
	<Youtube id="oFsLVG7EAZ4" thumbnail={null} play_button={null}></Youtube>
	<div class="prose px-4 prose-h1:mt-8 prose-p:text-black">
		{@html html}
	</div>
</div>
