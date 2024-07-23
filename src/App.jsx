import Button from "./components/Button";
import { EnviroCanvas } from "./components/canvas/EnviroCanvas";
import { useCustomization } from "./constants/Customization";
import "../src/App.css";
import React, { useState } from "react";
function App() {
	const {
		loc,
		setLoc,
	} = useCustomization();

	const handlePrevBtn = () => {
		if (loc === 1) {
			return;
		}
		setLoc((prevLoc) => prevLoc - 1);
	};
	const handleNextBtn = () => {
		if (loc === 9) {
			return;
		}
		setLoc((prevLoc) => prevLoc + 1);
	};

	const Overlay = () => {
		if (loc === 1) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						<h1>{loc}. Welcome</h1>
					</div>
					<div className="configurator__section__values">
						<div className="item__label item--intro">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Tempora rerum natus facilis necessitatibus?
							Sed, earum.
						</div>
					</div>
					<div
						className={"item item--active"}
						onClick={() => setLoc(2)}
					>
						<div className="item__label outline px-2">
							Lets Start
						</div>
					</div>
				</div>
			);
		}
	};

	return (
		<>
			<Overlay />
			<EnviroCanvas />
		</>
	);
}

export default App;
