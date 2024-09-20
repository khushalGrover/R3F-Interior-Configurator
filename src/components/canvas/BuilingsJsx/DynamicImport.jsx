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

				console.log("respose: ", productByIdData)
				
				
				setActivePlaceId(productByIdData?.data?.docs[0]?.place?._id);
				setObjectProduct(productByIdData?.data);

				// console.log("type of discount", typeof (productByIdData.data.docs[0].product_id.discount));
				// console.log("type of discount", productByIdData.data.docs[0].product_id.price - productByIdData.data.docs[0].product_id.discount);
				// // Fetching the list of places
				const placesResponse = await fetch(
					"https://www.backend.visualizenbuild.com/api/visualizer/place?limit=30&page=1"
				);
				const placesData = await placesResponse.json();
				// console.log("List of Places-----------");
				// placesData.data.docs.forEach((item, index) => {
				// 	console.log(`${index}: ${item.name} ${item._id}`);
				// });
				setPlaces(placesData.data.docs);

				// console.log("Active Place Id ", placesData.data.docs[0]._id);
			} catch (error) {
				console.error(error);
				setError(error);
			}
		};

		fetchData();
	}, [activeObjectProductId]);


	{/* 	
	useEffect(() => {
		const fetchData = async () => {
			try {


				
				
				console.log("places :: ");

				// loop through the places to get the all objects
				places.forEach(async (place, index) => {
					const placeAddressId = `https://www.backend.visualizenbuild.com/api//visualizer/place/${place._id}/products`
					const activePlaceObjectResponse = await fetch(
						placeAddressId
					);
					const activePlaceObjectData = await activePlaceObjectResponse.json();
					
					activePlaceObjectData?.data?.docs.forEach((item, index) => {
						console.log(`${index}: ${item.object_id.name} + ${item.type} + ${item.objectUrl}`);
					});
				});

				//  Fetching the list of objects with active place id
				
				// to do replace active place 
				// const placeAddressId = `https://www.backend.visualizenbuild.com/api//visualizer/place/${places[2]?._id}/products`
				// const activePlaceObjectResponse = await fetch(
				// 	placeAddressId
				// );
				// const activePlaceObjectData = await activePlaceObjectResponse.json();
				// console.log(">>", activePlaceObjectData.data.docs[1])

				// activePlaceObjectData?.data?.docs.forEach((item, index) => {
				// 	console.log(`${index}: ${item.object_id.name} + ${item.type} + ${item.objectUrl}`);
				// });
				// setObjectProduct(activePlaceObjectData.docs);

	
			} catch (error) {
				console.error(error);
				setError(error);
			}
		};

		fetchData();
	}, [places]);

	*/}	


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
