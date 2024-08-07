import React, { useState, useEffect } from "react";
import { useCustomization } from "../../../constants/Customization";

export function DynamicImport() {
	const { objectProduct, setObjectProduct, places, setPlaces } =
		useCustomization();
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const objectProductResponse = await fetch(
					"https://www.backend.visualizenbuild.com/api/visualizer/object-product?limit=30"
				);
				const objectProductData = await objectProductResponse.json();
				// console.log("List of Objects-----------");
				// objectProductData.docs.forEach((item, index) => {
					// console.log(`${index}: ${item.type}`);
				// });
				setObjectProduct(objectProductData.docs);

				const placesResponse = await fetch(
					"https://www.backend.visualizenbuild.com/api/visualizer/place?limit=30&page=1"
				);
				const placesData = await placesResponse.json();
				// console.log("List of Places-----------");
				// placesData.data.docs.forEach((item, index) => {
					// console.log(`${index}: ${item.name}`);
				// });
				setPlaces(placesData.data.docs);
			} catch (error) {
				console.error(error);
				setError(error);
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			{/* <h1>Places List</h1>
			{places.map((item, index) => (
				<p key={item._id}>{`${index}: ${item.name}`}</p>
			))}

			<h1>Object List</h1>
			{objectProduct.map((item, index) => (
				<p
					key={item._id}
				>{`${index}: ${item.type} at ${item.place.name}`}</p>
			))} */}
		</div>
	);
}
