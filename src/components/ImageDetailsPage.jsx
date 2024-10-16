import React from 'react';

export function ImageDetailsPage({ artwork }) {
	//Destructure artwork properties
	const { title, artist_display, image_id } = artwork;
	const imageURL = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
	return (
		<div className="image-details">
			<h2>Title: {title}</h2>
			<p>Artist: {artist_display || 'Unknown Artist'}</p>
			<img alt={title} src={imageURL} />
			<button>Back to Results</button>
		</div>
	);
}
