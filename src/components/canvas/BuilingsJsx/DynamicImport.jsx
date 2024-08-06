import React, { useState, useEffect } from "react";
import { useCustomization } from "../../../constants/Customization";

export function DynamicImport() {
	const { objectProduct, setObjectProduct, places, setPlaces, activeObjectProductId, setActiveObjectProduct, activePlaceId, setActivePlaceId } =
		useCustomization();
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {


				// Fetching the product by Id
				const addressId = `https://www.backend.visualizenbuild.com/api/visualizer/object/${activeObjectProductId}/product`
				const productByIdResponse = await fetch(
					addressId
				);
				const productByIdData = await productByIdResponse.json();
				// console.log("Product by Id ", productByIdData);
				// console.log("Product active place Id ", productByIdData.data.docs[0].place._id);
				setActivePlaceId(productByIdData.data.docs[0].place._id);
				setObjectProduct(productByIdData.data);

				// // Fetching the list of places
				// const placesResponse = await fetch(
				// 	"https://www.backend.visualizenbuild.com/api/visualizer/place?limit=30&page=1"
				// );
				// const placesData = await placesResponse.json();
				// console.log("List of Places-----------");
				// placesData.data.docs.forEach((item, index) => {
				// 	console.log(`${index}: ${item.name}`);
				// });
				// setPlaces(placesData.data.docs);
			} catch (error) {
				console.error(error);
				setError(error);
			}
		};

		fetchData();
	}, [activeObjectProductId]);

	useEffect(() => {
		const fetchData = async () => {
			try {


				//  Fetching the list of objects with active place id
				
				const placeAddressId = `https://www.backend.visualizenbuild.com/api//visualizer/place/${activePlaceId}/products`
				const activePlaceObjectResponse = await fetch(
					placeAddressId
				);
				const activePlaceObjectData = await activePlaceObjectResponse.json();
				// console.log("Object Product Data ", activePlaceObjectData);
				// activePlaceObjectData.data.docs.forEach((item, index) => {
				// 	console.log(`${index}: ${item.place._id}`);
				// });
				// setObjectProduct(activePlaceObjectData.docs);

	
			} catch (error) {
				console.error(error);
				setError(error);
			}
		};

		fetchData();
	}, [activePlaceId]);




	if (error) {
		return <div>{console.log("Error:", error.message)}</div>;
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
