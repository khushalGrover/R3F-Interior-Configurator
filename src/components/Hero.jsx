// Hero.jsx
import React, { useState } from "react";
import Button from "./Button"; // Import your custom Button component
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
export function Hero() {
	const [arg, setArg] = useState(null); // State to store the argument

	const handleFirstButtonClick = () => {
		setArg("1");
		console.log("First button clicked:", arg);
	};
	const handleSecondButtonClick = () => {
		setArg("2");
		console.log("Second button clicked:", arg);
	};
	const handleThirdButtonClick = () => {
		setArg("3");
		console.log("Third button clicked:", arg);
	};

	return (
		<>
			<Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
				{/* <color attach="background" args={["#ececec"]} /> */}
				<Experience arg={arg} />
			</Canvas>
		</>
	);
}
