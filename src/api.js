/**
 * Throughout this file are blocks of comments containing keywords
 * prefixed with `@`. These are JSDoc comments, and they help us
 * describe variables, functions, and other aspects of our code.
 * @see: https://jsdoc.app/
 */

/**
 * An individual piece of artwork found at the `/artworks/search/` endpoint.
 * @typedef {Object} Artwork
 * @property {number} _score
 * @property {string | null} artist_title
 * @property {string} date_display
 * @property {string} image_id
 * @property {{alt_text: string, height: number, width: number}} thumbnail
 * @property {string} title
 */

/**
 * The response from the `/artworks/search/` endpoint. Includes an array of
 * artworks, as well as some `config`, `info`, and `pagination` metadata.
 * @typedef {Object} AICSearchResponse
 * @property {Object} config
 * @property {Array<Artwork>} data
 * @property {Object} info
 * @property {Object} pagination
 * @property {null} preference
 */

/**
 * Search the Chicago Institute of Art's `/artworks/search/` endpoint
 * and get a Promise containing the JSON-encoded response.
 * @param {string} query
 * @returns {Promise<AICSearchResponse>}
 */
export function searchArtworks(query) {
	/**
	 * Get data from `ARTWORKS_SEARCH_RESULT.json`, which is served by our
	 * local server.
	 * TODO: replace with path to `/artworks/search/` endpoint,
	 * as described in README.md.
	 */
	/**
	 * Articles referenced: https://api.artic.edu/docs/#introduction and
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/ReferenceGlobal_Objects/encodeURIComponent, https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production, https://stackoverflow.com/questions/4540753/should-i-use-encodeuri-or-encodeuricomponent-for-encoding-urls
	 */
	/**
	 * We know the API serves JSON data, but
	 * it's a good idea to explicitly request JSON anyway.
	 * */
	/**
	 * Development mode
	 */
	const isDevelopment = process.env.NODE_ENV !== 'development';
	if (isDevelopment) {
		const requestUrl = `./ARTWORKS_SEARCH_RESULT.json`;
		const headers = { Accept: 'application/json' };
		return fetch(requestUrl, { headers }).then((res) => {
			if (!res.ok) {
				throw new Error(`HTTP error! Network response was not successful`);
			}
			return res.json().then((json) => json.data);
		});
		/**
		 * Production mode
		 * TODO: replace with actual API request
		 */
	} else {
		// Use encodeURIComponent to encode query String parameter values
		// const requestUrl = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}`;
		const requestUrl = `https://api.artic.edu/api/v1/artworks`;
		const headers = { Accept: 'application/json' };
		return fetch(requestUrl, { headers }).then((res) => {
			if (!res.ok) {
				throw new Error(`HTTP error! Network response was not successful`);
			}
			return res.json().then((json) => json.data);
		});
	}
}
