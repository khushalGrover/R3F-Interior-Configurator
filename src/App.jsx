import Button from "./components/Button";
import { EnviroCanvas } from "./components/canvas/EnviroCanvas";
import { useCustomization } from "./constants/Customization";
import "../src/App.css";
import React, { useState } from "react";
function App() {
	const {
		loc,
		setLoc,
		setObjectCode,
		rawValue,
		setRawValue,
	} = useCustomization();

	const handlePrevBtn = () => {
		if (loc === 1) {
			return;
		}
		setLoc((prevLoc) => prevLoc - 1);
	};
	const handleNextBtn = () => {
		if (loc === 8) {
			return;
		}
		setLoc((prevLoc) => prevLoc + 1);
	};

	const handleSetCode = () => {
		if (rawValue.length === 5) {
			setObjectCode("" + rawValue);
		}
	};
	const handleChange = (e) => {
		const value = e.target.value;
		// Validate input to allow numbers only and only 5 digits
		if (/^\d*$/.test(value) && value.length <= 5) {
			setRawValue(value);
		}
	};

	const Overlay = () => {
		if (loc === 1) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. Welcome to the configurator
					</div>
				</div>
			);
		} else if (loc === 2 || loc === 3) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. Drawing Room
					</div>
				</div>
			);
		} else if (loc === 4) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. dining room{" "}
					</div>
				</div>
			);
		} else if (loc === 5 || loc === 6) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. Kitchen{" "}
					</div>
				</div>
			);
		} else if (loc === 7) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. Living Room
					</div>
				</div>
			);
		}
		else if (loc === 8) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. Study Area
					</div>
				</div>
			);
		}
	};

	return (
		<div className="relative">
			<div className=" fixed flex flex-col h-full w-full outline">
				<EnviroCanvas />
				<div className="absolute bottom-0">
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
				</div>
				<div className="configurator">
					<div className="configurator__section">
						<div className="configurator__section__title">
							{/* {loc}. Code{" # "} */}
							{/* {objectCode} */}
						</div>
					</div>
					<Overlay />
				</div>
			</div>
		</div>
	);
}

export default App;
