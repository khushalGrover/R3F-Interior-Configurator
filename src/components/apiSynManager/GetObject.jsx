import React, { useState, useEffect } from 'react';

export function GetObject() {
	const [objects, setObjects] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const address =
			"https://backend.visualizenbuild.com/api/visualizer/object?limit=10&page=1";
		
		fetch(address)
			.then((response) => response.json())
			.then((data) => {
				// print all the object names
				console.log("list of Objects-----------")
				data.data.docs.map((object) => {
					console.log(object.name);
				});
				setObjects(data.data.docs);
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
			<div className='text-3xl'>Objects List</div>
			<ul>
				{objects.map((object) => (
					<li key={object.id}>{object.name}</li>
				))}
			</ul>
		</div>
	);
}
