/**
 * @param {string }url
 * @returns {Response}
 */
export const get = (url) => {
	return fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		}
	});
};