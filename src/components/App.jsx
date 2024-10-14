import { useState } from 'react';
import { searchArtworks } from '../api';
import { Footer } from './Footer';
import { SearchForm } from './SearchForm';
import './App.css';

export function App() {
	// TODO: Add state to keep track of the current search query and results.
	const [results, setResults] = useState([]);
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			console.log(json);
			// Update the results state with the returned JSON.
			setResults(json);
		});
	}
	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<ul className="results-list">
				{/* Implement optional chaining in case results is undefined or null */}
				{results?.map((artwork) => (
					<li key={artwork.id}>
						<h2>Title: {artwork.title}</h2>
						<p>Artist: {artwork.artist_display || 'Unknown Artist'}</p>
					</li>
				))}
			</ul>
			<Footer />
		</div>
	);
}
