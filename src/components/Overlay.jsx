






/// not using any where















import React, { useState } from "react";
import Button from "./Button"; // Import your custom Button component
import { useCustomization } from "../constants/Customization";



export function Overlay() {

	const { loc, setLoc } = useCustomization(); // State to store the locument

	const handlePrevBtn = () => {
		/* If the value of loc is 0, then return */
		if (loc === 1) {
			return;
		}
		setLoc(loc - 1); // Decrease the value of loc by 1
		console.log("First button clicked:", loc);
	};
	const handleNextBtn = () => {
		/* If the value of loc is 5, then return */
		if (loc === 3) {
			return;
		}
		setLoc(loc + 1); // Increase the value of loc by 1
		console.log("Second button clicked:", loc);
	};

	return (
		<CustomizationProvider>
			<div className="flex items-end justify-center w-screen ">
				<Button onClick={handlePrevBtn} size="lg" variant="outline">
					Prevtt.
				</Button>
				<Button size="ls" variant="outline">
					{"> "+loc}
				</Button>
				<Button onClick={handleNextBtn} size="lg" variant="outline">
					Next
				</Button>
			</div>
		</CustomizationProvider>
	);
}
