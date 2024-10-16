import React from 'react';
import './ImageDetailsPage.css';
import { useNavigate } from 'react-router-dom';

export function ImageDetailsPage({ artwork }) {
	const { title, artist_title, image_id } = artwork;
	const imageURL = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1); // Go back to the previous page.
		return false; // Prevent default link behavior.
	};

	return (
		<div className="image-details">
			<h2>{title}</h2>
			<p>Artist: {artist_title || 'Unknown Artist'}</p>
			<img alt={title} src={imageURL} />
			<button onClick={handleBackClick}>Back to Results</button>
		</div>
	);
}
