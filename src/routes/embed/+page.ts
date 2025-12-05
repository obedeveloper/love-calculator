export const load = ({ url }) => {
	return { link: url.toString().replace('embed', 'og') };
};
