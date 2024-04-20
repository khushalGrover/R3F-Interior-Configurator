import Button from "./components/Button";
import { EnviroCanvas } from "./components/canvas/EnviroCanvas";
import { useCustomization } from "./constants/Customization";
import "../src/App.css";
import React, { useState } from "react";
import Spinner from "./components/Spinner";

function App() {
	const {
		loc,
		setLoc,
		objectCode,
		setObjectCode,
		sofa,
		setSofa,
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
		if (loc === 6) {
			return;
		}
		setLoc((prevLoc) => prevLoc + 1);
	};

	const handleSetCode = () => {
		if (rawValue.length === 5) {
			setObjectCode("" + rawValue);
			console.log(rawValue, "!!! Final value of objectCode", objectCode);
		} else {
			console.log("Invalid code");
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
		} else if (loc === 2) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. Drawing Room
					</div>
					<Spinner
						targetIndex={0}
						type="text"
						items={["Classic Sofa", "Modern Sofa"]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
						sofa={sofa}
						setSofa={setSofa}
					/>
					<Spinner
						targetIndex={2}
						type="text"
						items={["Classic Rug", "Modern Rug"]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
					<Spinner
						targetIndex={1}
						type="text"
						items={["Classic Table", "Modern Table"]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
				</div>
			);
		} else if (loc === 4) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. dining room{" "}
					</div>
					<Spinner
						targetIndex={10}
						type="text"
						items={["Classic Chair", "chair2 not avai."]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
					<Spinner
						targetIndex={7}
						type="text"
						items={["Classic pattern", "Modern Pattern"]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
					<Spinner
						targetIndex={9}
						type="text"
						items={[
							"Classic lamp",
							"Modern Lamp",
							"Abstract",
							"minimalist ",
						]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
					<Spinner
						targetIndex={11}
						type="text"
						items={["Classic Clock", "clock2 not avai."]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
				</div>
			);
		} else if (loc === 5) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. Kitchen{" "}
					</div>
					<Spinner
						targetIndex={6}
						type="text"
						items={["Classic Chair", "Modern Chair"]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
					<Spinner
						targetIndex={4}
						type="text"
						items={[
							"Classic pattern",
							"Modern Pattern",
							"Abstract",
						]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
					<Spinner
						targetIndex={5}
						type="text"
						items={[
							"Classic lamp",
							"Modern Lamp",
							"Abstract Lamp",
							"minimalist Lamp",
						]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
					<Spinner
						targetIndex={3}
						type="text"
						items={[
							"Classic Tap",
							"Modern tap",
							"Abstract tap",
							"minimalist tap",
							"Unique tap",
							"Classic tap 2",
							"Functional tap",
						]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
				</div>
			);
		} else if (loc === 6) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. Guest Room{" "}
					</div>
					<Spinner
						targetIndex={15}
						type="text"
						items={["Classic sofa", "Modern sofa"]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
					<Spinner
						targetIndex={13}
						type="text"
						items={[
							"Rug Classic pattern",
							"Rug Modern Pattern",
							"Rug Abstract",
						]}
						objectCode={objectCode}
						setObjectCode={setObjectCode}
					/>
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
						<Button size="ls" variant="primary"></Button>
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
					{/* Drawing Room */}
					<div className="configurator__section">
						<div className="configurator__section__title">
							Chair Code: #{objectCode}
						</div>

						<div className="configurator__section__values">
							<input
								type="text"
								value={rawValue}
								onChange={handleChange}
								placeholder="Enter Code(numbers only)"
								className="w-auto spinner"
							/>

							<div
								className="item__label  cursor-pointer"
								onClick={handleSetCode}
							>
								Set
							</div>
						</div>
					</div>
					<Overlay />
					{/* DINING  */}
				</div>
			</div>
		</div>
	);
}

export default App;
