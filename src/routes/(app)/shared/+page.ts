import calc from '$lib/calc';
import { error } from '@sveltejs/kit';

export const load = ({ url }) => {
	const { searchParams } = url;
	const firstName = searchParams.get('firstName');
	const secondName = searchParams.get('secondName');

	if (!firstName || !secondName) {
		error(400, 'Bad Request');
	}

	const percentage = calc(firstName, secondName);
	const title = `${firstName} Loves ${secondName} ${percentage}%`;
	const ogURL = url.toString().replace('shared', 'og');

	return { title, ogURL, firstName, secondName };
};
