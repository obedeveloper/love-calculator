import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import type { SatoriOptions } from 'satori';
import { html } from 'satori-html';
import { render } from 'svelte/server';
import { dev } from '$app/environment';
import Template from './Template.svelte';
import { error } from '@sveltejs/kit';

export async function GET({ url, fetch }) {
	const { searchParams } = url;
	const firstName = searchParams.get('firstName');
	const secondName = searchParams.get('secondName');

	if (!firstName || !secondName) {
		error(400, 'Bad Request');
	}

	const rendered = render(Template, { props: { firstName, secondName } });
	const element = html(rendered.body + rendered.head);

	const inter = await fetch('/fonts/InterDisplay-700.woff').then((res) => res.arrayBuffer());
	const dsDigital = await fetch('/fonts/DS-DIGIB.TTF').then((res) => res.arrayBuffer());
	const notoEmoji = await fetch('/fonts/NotoEmoji-Regular.ttf').then((res) => res.arrayBuffer());

	const satoriOptions: SatoriOptions = {
		width: 1200,
		height: 600,
		fonts: [
			{
				name: 'inter',
				data: inter
			},
			{
				name: 'ds-digital',
				data: dsDigital
			},
			{
				name: 'noto-emoji',
				data: notoEmoji
			}
		]
	};

	const svg = await satori(element, satoriOptions);

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: 1200
		},
		font: {
			loadSystemFonts: false
		}
	});

	const png = resvg.render().asPng();

	return new Response(png.buffer as ArrayBuffer, {
		headers: {
			'Content-Type': 'image/png',
			// 31536000 = 365 days
			'Cache-Control': dev
				? 'no-cache, no-store'
				: 'public, immutable, no-transform, max-age=31536000'
		}
	});
}
