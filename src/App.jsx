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
		chairColors,
		chairColor,
		setChairColor,
		cushionColors,
		cushionColor,
		setCushionColor,
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
				<div className="configurator">
					<div className="configurator__section">
						<div className="configurator__section__title">
							{loc}. Welcome 
							{/* to the configurator */}
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="configurator">
				<div className="configurator__section">
					<div className="configurator__section__title">
						{"# " + loc + " "}
						Active Object is:
					</div>
					<div className="configurator__section__values">
						<div className={"item "}>
							<div className="item__label">Design</div>
						</div>
						<div
							className={"item item--active"}
							onClick={() => setLegs(2)}
						>
							<div className="item__label">Classic</div>
						</div>
					</div>
				</div>
			</div>
			);
			
		}

		/*
		else if (loc === 2 || loc === 3) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. Drawing Room
						<div className="configurator__section__title">
							Chair material
						</div>
						<div className="configurator__section__values">
							<div
								className={"item--active"}
								onClick={() => console.log("lather material")}
							>
								<div className="item__label">Leather</div>
							</div>
							<div
								// className={`item ${
								// 	material === "fabric" ? "item--active" : ""
								// }`}
								className={"item--active"}
								onClick={() => console.log("lather material")}
							>
								<div className="item__label">Fabric</div>
							</div>
						</div>
					</div>
					<div className="configurator__section__title">
						Chair color
					</div>
					<div className="configurator__section__values">
						{chairColors.map((item, index) => (
							<div
								key={index}
								className={`item ${
									item.color === chairColor.color
										? "item--active"
										: ""
								}`}
								onClick={() => console.log("chair")}
							>
								<div
									className="item__dot"
									style={{ backgroundColor: item.color }}
								/>
								<div className="item__label">!23</div>
							</div>
						))}
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
		} else if (loc === 8) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. Study Area
					</div>
				</div>
			);
		}

		*/
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

				<Overlay />
			</div>
		</div>
	);
}

export default App;
