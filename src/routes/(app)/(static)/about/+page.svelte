<script lang="ts">
	import readme from '/README.md?raw';
	import ShowDown from 'showdown';
	import Youtube from 'svelte-youtube-embed';

	const converter = new ShowDown.Converter();
	const html = converter.makeHtml(readme);
</script>

<div class="mt-4 mb-8">
	<div class="mx-auto max-w-[65ch]">
		<Youtube id="oFsLVG7EAZ4" thumbnail={null} play_button={null}></Youtube>
	</div>
	<div class="mx-auto prose px-4 sm:px-0 prose-h1:mt-8 prose-p:text-black">
		{@html html}
	</div>
</div>
