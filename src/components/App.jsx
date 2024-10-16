import { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from 'react-router-dom';
import { searchArtworks } from '../api';
import { Footer } from './Footer';
import { ImageDetailsPage } from './ImageDetailsPage';
import { SearchForm } from './SearchForm';
import './App.css';

export function App() {
	// TODO: Add state to keep track of the current search query and results.
	const [results, setResults] = useState([]);
	const [selectedArtwork, setSelectedArtwork] = useState(null);

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
		<Router>
			<div className="App">
				<Routes>
					<Route
						element={
							<>
								<h1>TCL Career Lab Art Finder</h1>
								<SearchForm onSearchSubmit={onSearchSubmit} />
								<ul className="results-list">
									{results?.map((artwork) => (
										<li key={artwork.id}>
											<NavLink
												to={`/artwork/${artwork.id}`}
												onClick={() => {
													setSelectedArtwork(artwork);
												}}
											>
												<h2>Title: {artwork.title}</h2>
											</NavLink>
										</li>
									))}
								</ul>
							</>
						}
						path="/"
					/>
					<Route
						element={<ImageDetailsPage artwork={selectedArtwork} />}
						path="/artwork/:id"
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}
