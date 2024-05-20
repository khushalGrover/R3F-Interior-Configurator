import Button from "./components/Button";
import { EnviroCanvas } from "./components/canvas/EnviroCanvas";
import { useCustomization } from "./constants/Customization";
import "../src/App.css";
import React, { useState } from "react";
function App() {
	const {
		loc,
		setLoc,
		activeItem,
		setActiveItem,
		objectCode,
		setObjectCode,
		rawValue,
		setRawValue,
		rug,
		setRug,
		rugColors,
		sofaColor,
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
		<div className="relative">
			<div className=" fixed flex flex-col h-full w-full outline">
				<EnviroCanvas />

				{loc === 1 && (
					<div className="configurator">
						<Overlay />
					</div>
				)}

				{/* <div className="absolute bottom-0">
					<div className="flex items-center justify-center w-screen">
						<Button
							onClick={handlePrevBtn}
							size="lg"
							variant="primary"
						>
							Prev.
						</Button>

						<Button
							onClick={handleNextBtn}
							size="lg"
							variant="primary"
						>
							Next
						</Button>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default App;
