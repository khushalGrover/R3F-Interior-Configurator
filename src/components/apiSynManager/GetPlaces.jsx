import React, { useState, useEffect } from 'react';

export function GetPlaces() {
	const [places, setPlaces] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const address =
			"https://backend.visualizenbuild.com/api/visualizer/place?limit=10&page=1";
		
		fetch(address)
			.then((response) => response.json())
			.then((data) => {
				// print all the place names
				console.log("list of Places-----------")
				data.data.docs.map((place) => {
					console.log(place.name);
				});
				setPlaces(data.data.docs);
			})
			.catch((error) => {
				// Handle any errors here
				console.error(error);
				setError(error);
			});
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="flex flex-col ">
			<div className='text-3xl'>Places List</div>
			<ul>
				{places.map((place) => (
					<li key={place.id}>{place.name}</li>
				))}
			</ul>
		</div>
	);
}
