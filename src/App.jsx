import Button from "./components/Button";
import { EnviroCanvas } from "./components/canvas/EnviroCanvas";
import { useCustomization } from "./constants/Customization";
import "../src/App.css";
import React, { useState } from "react";
function App() {
	const {
		loc,
		setLoc,
		objectCode,
		setObjectCode,
		rawValue,
		setRawValue,
		rug,
		setRug,
		rugColors,
		sofaColor,
	} = useCustomization();

	function handleObjectCodeUpdateAtIndex(tIndex, value, objectCode) {
		// in case 3 and case4, value is incremented by 1 bcz the value starts from 1 not 0 , bcz none option is not included for legs and seat
		switch (tIndex) {
			case 0:
				setObjectCode(
					value + objectCode.charAt(1) + objectCode.slice(2)
				);
				break;
			case 1:
				setObjectCode(
					objectCode.charAt(0) + value + objectCode.slice(2)
				);

				break;
			case 2:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						value +
						objectCode.slice(3)
				);

				break;
			case 3:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						(value + 1) +
						objectCode.slice(4)
				);
				break;
			case 4:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						(value + 1) +
						objectCode.slice(5)
				);
				break;
			case 5:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						(value + 1) +
						objectCode.slice(6)
				);
				break;
			case 6:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						(value + 1) +
						objectCode.slice(7)
				);
				break;
			case 7:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						(value + 1) +
						objectCode.slice(8)
				);
				break;
			case 8:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						(value + 1) +
						objectCode.slice(9)
				);
				break;
			case 9:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						(value + 1) +
						objectCode.slice(10)
				);
				break;
			case 10:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						(value + 1) +
						objectCode.slice(11)
				);
				break;
			case 11:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						objectCode.charAt(10) +
						(value + 1) +
						objectCode.slice(12)
				);
				break;
			case 12:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						objectCode.charAt(10) +
						objectCode.charAt(11) +
						(value + 1) +
						objectCode.slice(13)
				);
				break;
			case 13:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						objectCode.charAt(10) +
						objectCode.charAt(11) +
						objectCode.charAt(12) +
						(value + 1) +
						objectCode.slice(14)
				);
				break;
			case 14:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						objectCode.charAt(10) +
						objectCode.charAt(11) +
						objectCode.charAt(12) +
						objectCode.charAt(13) +
						(value + 1) +
						objectCode.slice(15)
				);
				break;
			case 15:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						objectCode.charAt(10) +
						objectCode.charAt(11) +
						objectCode.charAt(12) +
						objectCode.charAt(13) +
						objectCode.charAt(14) +
						(value + 1) +
						objectCode.slice(16)
				);
				break;
			case 16:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						objectCode.charAt(10) +
						objectCode.charAt(11) +
						objectCode.charAt(12) +
						objectCode.charAt(13) +
						objectCode.charAt(14) +
						objectCode.charAt(15) +
						(value + 1) +
						objectCode.slice(17)
				);
				break;
			case 17:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						objectCode.charAt(10) +
						objectCode.charAt(11) +
						objectCode.charAt(12) +
						objectCode.charAt(13) +
						objectCode.charAt(14) +
						objectCode.charAt(15) +
						objectCode.charAt(16) +
						(value + 1) +
						objectCode.slice(18)
				);
				break;
			case 18:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						objectCode.charAt(10) +
						objectCode.charAt(11) +
						objectCode.charAt(12) +
						objectCode.charAt(13) +
						objectCode.charAt(14) +
						objectCode.charAt(15) +
						objectCode.charAt(16) +
						objectCode.charAt(17) +
						(value + 1) +
						objectCode.slice(19)
				);
				break;
			case 19:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						objectCode.charAt(10) +
						objectCode.charAt(11) +
						objectCode.charAt(12) +
						objectCode.charAt(13) +
						objectCode.charAt(14) +
						objectCode.charAt(15) +
						objectCode.charAt(16) +
						objectCode.charAt(17) +
						objectCode.charAt(18) +
						(value + 1) +
						objectCode.slice(20)
				);
				break;
			case 20:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						objectCode.charAt(4) +
						objectCode.charAt(5) +
						objectCode.charAt(6) +
						objectCode.charAt(7) +
						objectCode.charAt(8) +
						objectCode.charAt(9) +
						objectCode.charAt(10) +
						objectCode.charAt(11) +
						objectCode.charAt(12) +
						objectCode.charAt(13) +
						objectCode.charAt(14) +
						objectCode.charAt(15) +
						objectCode.charAt(16) +
						objectCode.charAt(17) +
						objectCode.charAt(18) +
						objectCode.charAt(19) +
						(value + 1) +
						objectCode.slice(21)
				);
				break;
		}
	}

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
		} else if (loc === 2 || loc === 3) {
			return (
				<>
					{/* table */}
					<div className="configurator__section">
						<div className="configurator__section__title">
							Table
						</div>
						<div className="configurator__section__values">
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										1,
										0,
										objectCode
									)
								}
							>
								<div className="item__label">Wooden</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										1,
										1,
										objectCode
									)
								}
							>
								<div className="item__label">Metalic</div>
							</div>
						</div>
					</div>

					{/* sofa */}
					<div className="configurator__section">
						<div className="configurator__section__title">
							Sofa Set
						</div>
						<div className="configurator__section__values">
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										0,
										0,
										objectCode
									)
								}
							>
								<div className="item__label">Classic</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										0,
										1,
										objectCode
									)
								}
							>
								<div className="item__label">Modern</div>
							</div>
						</div>
					</div>
					<div className="configurator__section">
						<div className="configurator__section__title">
							Rug color
						</div>
						<div className="configurator__section__values">
							{rugColors.map((item, index) => (
								<div
									key={index}
									className={`item ${
										item.color === sofaColor.color
											? "item--active"
											: ""
									}`}
									onClick={() => {
										setRug(item.name);
										console.log(item);
									}}
								>
									<div
										className="item__dot"
										style={{ backgroundColor: item.color }}
									/>
									<div className="item__label">
										{item.name}
									</div>
								</div>
							))}
						</div>
					</div>
				</>
			);
		} else if (loc === 4) {
			return (
				<>
					{/* Clock */}
					<div className="configurator__section">
						<div className="configurator__section__title">
							Clock
						</div>
						<div className="configurator__section__values">
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										11,
										0,
										objectCode
									)
								}
							>
								<div className="item__label">Able</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										11,
										1,
										objectCode
									)
								}
							>
								<div className="item__label">disable</div>
							</div>
						</div>
					</div>

					{/* Table Pattern */}
					<div className="configurator__section">
						<div className="configurator__section__title">
							Table pattern
						</div>
						<div className="configurator__section__values">
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										7,
										0,
										objectCode
									)
								}
							>
								<div className="item__label">Style 1</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										7,
										1,
										objectCode
									)
								}
							>
								<div className="item__label">Style 2</div>
							</div>
						</div>
					</div> 

					{/* Lamp */}
					<div className="configurator__section">
						<div className="configurator__section__title">Lamp</div>
						<div className="configurator__section__values">
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										9,
										0,
										objectCode
									)
								}
							>
								<div className="item__label">Classic</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										9,
										1,
										objectCode
									)
								}
							>
								<div className="item__label">Modern</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										9,
										2,
										objectCode
									)
								}
							>
								<div className="item__label">Abstract</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										9,
										3,
										objectCode
									)
								}
							>
								<div className="item__label">Premium</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										9,
										4,
										objectCode
									)
								}
							>
								<div className="item__label">Stylish</div>
							</div>
						</div>
					</div>
				</>
			);
		} else if (loc === 5 || loc === 6) {
			return (
				<>
					{/* Taps */}
					<div className="configurator__section">
						<div className="configurator__section__title">Taps</div>
						<div className="configurator__section__values">
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										3,
										0,
										objectCode
									)
								}
							>
								<div className="item__label">var1</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										3,
										1,
										objectCode
									)
								}
							>
								<div className="item__label">var2</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										3,
										2,
										objectCode
									)
								}
							>
								<div className="item__label">var3</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										3,
										3,
										objectCode
									)
								}
							>
								<div className="item__label">var4</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										3,
										4,
										objectCode
									)
								}
							>
								<div className="item__label">var5</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										3,
										5,
										objectCode
									)
								}
							>
								<div className="item__label">var6</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										3,
										6,
										objectCode
									)
								}
							>
								<div className="item__label">var7</div>
							</div>
						</div>
					</div>

					{/* Lamp */}
					<div className="configurator__section">
						<div className="configurator__section__title">Lamp</div>
						<div className="configurator__section__values">
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										5,
										0,
										objectCode
									)
								}
							>
								<div className="item__label">Classic</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										5,
										1,
										objectCode
									)
								}
							>
								<div className="item__label">Modern</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										5,
										2,
										objectCode
									)
								}
							>
								<div className="item__label">Abstract</div>
							</div>
						</div>
					</div>

					{/* Chairs */}
					<div className="configurator__section">
						<div className="configurator__section__title">
							Chair
						</div>
						<div className="configurator__section__values">
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										6,
										0,
										objectCode
									)
								}
							>
								<div className="item__label">Classic</div>
							</div>
							<div
								className={"item"}
								onClick={() =>
									handleObjectCodeUpdateAtIndex(
										6,
										1,
										objectCode
									)
								}
							>
								<div className="item__label">Modern</div>
							</div>
						</div>
					</div>
				</>
			);
		} else if (loc === 7) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. not avail.
					</div>
				</div>
			);
		} else if (loc === 8) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. not avail.
					</div>
				</div>
			);
		} else if (loc === 9) {
			return (
				<div className="configurator__section">
					<div className="configurator__section__title">
						{loc}. not avail.
					</div>
				</div>
			);
		}
	};

	return (
		<div className="relative">
			<div className=" fixed flex flex-col h-full w-full outline">
				<EnviroCanvas />
				<div className="configurator">
					<Overlay />
				</div>
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
