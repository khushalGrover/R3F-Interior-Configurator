import React, { useState, useEffect } from "react";

export function GetMaterial() {
	const [materials, setMaterials] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const address =
			"https://www.backend.visualizenbuild.com/api/visualizer/object-product";

		fetch(address)
			.then((response) => response.json())
			.then((data) => {
				console.log("list of Materials-----------");    
                console.log(data.docs);
				setMaterials(data.docs);
			})
			.catch((error) => {
				console.error("error found: "+error);
				setError(error);
			});
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="flex flex-col ">
			<div className="text-3xl">Materials List</div>

			<img src={materials} alt={materials.file} />
			{/* <ul>
				{materials.map((material) => (
					<>
						{material.type}
                       
						<img src={material.file} alt={material.file} />
					</>
				))}
			</ul> */}
		</div>
	);
}
