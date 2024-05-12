import {
	custom,
	move,
	rotate2,
	texture,
	swap,
	cross,
} from "../../../assets/icons";
import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useCustomization } from "../../../constants/Customization";
import { UpdateObjectCode } from "../../UpdateObjectCode";

export function UIManager() {
	const { activeItem, mode, setMode } = useCustomization();

	// Calculate the position for the Card and SubMenu based on the offset of interactionBtns
	const cardPosition = calculatePosition[(50, 0, 0)];
	const subMenuPosition = calculatePosition([50, 0, 0]);

	function calculatePosition(offset) {
		// Calculate the average of the offset values of interactionBtns
		const averageOffset = interactionBtns
			.reduce(
				(acc, btn) => {
					acc[0] += btn.offset[0];
					acc[1] += btn.offset[1];
					acc[2] += btn.offset[2];
					return acc;
				},
				[0, 0, 0]
			)
			.map((val) => val / interactionBtns.length);

		// Add the average offset to the offset of the last interactionBtn
		const position = [
			offset[0] + averageOffset[0],
			offset[1] + averageOffset[1],
			offset[2] + averageOffset[2],
		];
		return position;
	}

	return (
		<>
			{annotations.map((annotation, index) => (
				<Annotation key={index} {...annotation} />
			))}
			{interactionBtns.map((btn, index) => (
				<InteractionBtn key={index} {...btn} />
			))}

			{/* only visible when mode is config */}
			{/* {mode === "config" && <Card position={cardPosition} />} */}
			{/* only visible when mode is subMenu */}
			{mode === "submenu" && <SubMenu position={subMenuPosition} />}
		</>
	);
}

function InteractionBtn(target) {
	const { activeItem, setActiveItem, setMode } = useCustomization();

	const handleFocus = (target) => {
		setActiveItem(target);
		setMode("submenu");
		// console.log("Active pos is:", activeItem.offset);
	};

	return (
		<Html scale={1} distanceFactor={3} position={target.offset}>
			<div
				className={"handle w-8 h-8 bg-black"}
				onClick={() => {
					handleFocus(target);
					// console.log("Active obj is:", target.target);
					// console.log("position is:", target.offset);
				}}
			>
				<img
					className="handleIcon--active"
					src={custom}
					alt="handle Icon"
				/>
			</div>
		</Html>
	);
}

function Annotation({ children, ...props }) {
	const { setLoc } = useCustomization();
	return (
		<Html scale={5} position={props.position} distanceFactor={5}>
			<div className="configurator">
				<div className="configurator__section">
					<div
						className="configurator__section__title"
						onClick={() => {
							setLoc(props.tIndex);
						}}
					>
						{props.focusLocation}
					</div>
				</div>
			</div>
		</Html>
	);
}

const annotations = [
	{
		position: [16.483, 3.5, -15.337],
		focusLocation: "Drawing Room",
		tIndex: 2,
	},
	{ position: [17, 2, -21], focusLocation: "Dinning Table", tIndex: 4 },
	{ position: [19, 3, -20], focusLocation: "Kitchen", tIndex: 6 },
	{ position: [29, 3.5, -15], focusLocation: "Guest Room", tIndex: 7 },
	{ position: [27, 3.5, -7], focusLocation: "Swimming Pool", tIndex: 1 },
	{ position: [24, 5, -15], focusLocation: "Study Room", tIndex: 8 },
	{ position: [16, 7, -11], focusLocation: "Master Bed Room", tIndex: 9 },
];

const interactionBtns = [
	{ target: "dSofa1", offset: [16.9, 2, -16.7], name: "Sofa1" },
	{ target: "dSelf", offset: [15.2, 2.301, -17.85], name: "Cabinet" },
	{ target: "dTable", offset: [16.873, 1.7, -15.301], name: "Table" },
	{ target: "dRug", offset: [17.5, 1.472, -16], name: "Rug" },
	{ target: "dnClock", offset: [15.9, 3.295, -21.151], name: "Clock" },
	{ target: "dnLamp", offset: [16.928, 3.619, -21.346], name: "Lamp" },
	{ target: "dnTable", offset: [16.928, 2.5, -20.8], name: "Table" },
	{ target: "ktTap", offset: [20, 2.672, -19.84], name: "Tap" },
	{ target: "ktLamp", offset: [20.111, 3.556, -19.587], name: "Lamp" },
	{ target: "ktTable", offset: [19.5, 2.672, -19.84], name: "Table" },
	{ target: "ktChair", offset: [20.138, 2.5, -18.28], name: "" },
];

const subMenuItems = [
	{
		target: "dSofa1",
		tIndex: 0,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
		],
	},
	{
		target: "dTable",
		tIndex: 1,
		updateObjectCodeValues: [
			{ value: "Round", targetValue: 0 },
			{ value: "Classic", targetValue: 1 },
		],
	},
	{
		target: "dSelf",
		tIndex: 2,
		updateObjectCodeValues: [
			{ value: "dark", targetValue: 0 },
			{ value: "light", targetValue: 1 },
		],
	},
	{
		target: "ktTap",
		tIndex: 3,
		updateObjectCodeValues: [
			{ value: "1", targetValue: 0 },
			{ value: "2", targetValue: 1 },
			{ value: "3", targetValue: 2 },
			{ value: "4", targetValue: 3 },
			{ value: "5", targetValue: 4 },
			{ value: "6", targetValue: 5 },
			{ value: "7", targetValue: 6 },
		],
	},
	{
		target: "ktTable",
		tIndex: 4,
		updateObjectCodeValues: [
			{ value: "dark", targetValue: 0 },
			{ value: "Light", targetValue: 1 },
		],
	},
	{
		target: "ktLamp",
		tIndex: 5,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
			{ value: "minimalist", targetValue: 2 },
		],
	},
	{
		target: "ktChair",
		tIndex: 6,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
		],
	},
	{
		target: "dnTableTexture",
		tIndex: 7,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
		],
	},
	{
		target: "dnTable",
		tIndex: 8,
		updateObjectCodeValues: [
			{ value: "dark", targetValue: 0 },
			{ value: "light", targetValue: 1 },
		],
	},
	{
		target: "dnLamp",
		tIndex: 9,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
			{ value: "minimalist", targetValue: 4 },
			{ value: "Desgin", targetValue: 2 },
			{ value: "simple", targetValue: 3 },
		],
	},
	{
		target: "dnChair",
		tIndex: 10,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
		],
	},
	{
		target: "dnClock",
		tIndex: 11,
		updateObjectCodeValues: [
			{ value: "disable", targetValue: 0 },
			{ value: "enable", targetValue: 1 },
		],
	},
	{
		target: "dRug",
		tIndex: 27,
		updateObjectCodeValues: [
			{ value: "light", targetValue: 0 },
			{ value: "dark", targetValue: 1 },
		],
	},
];

function Card() {
	const { setFocusObj, setMode, activeItem, setActiveItem } =
		useCustomization();

	const handleReset = () => {
		// setFocusObj("");
		setMode("view");
	};

	return (
		<Html scale={1} distanceFactor={4} position={activeItem.offset}>
			<div className="handle w-5 h-5 bg-red-600" onClick={handleReset}>
				<img
					className="handleIcon--active"
					src={cross}
					alt={"crossImg"}
				/>
			</div>
			<div className="configurator">
				<div className="configurator__section">
					<div className="configurator__section__title">
						<CardSection
							activeItem={activeItem}
							setMode={setMode}
						/>
					</div>
				</div>
			</div>
		</Html>
	);
}

function SubMenu() {
	const { activeItem, setMode } = useCustomization();
	return (
		<Html scale={2} distanceFactor={3} position={activeItem.offset}>
			<div className="configurator">
				<div className="configurator__section">
					<div className="configurator__section__title">
						<CardSection
							isSubMenu
							activeItem={activeItem}
							setMode={setMode}
						/>
					</div>
				</div>
			</div>
		</Html>
	);
}

function CardSection({ isSubMenu, activeItem, setMode }) {
	// const { setMode } = useCustomization();

	const handleCardClick = () => {
		// console.log("Clicked "+ activeItem.target);
		setMode("submenu");
	};
	const handleSubMenuClick = () => {
		// console.log("Clicked subMenu " + activeItem.target);
		setMode("view");
	};
	return (
		<div className="card">
			<div className="card__section">
				<div className={`card__section__values ${isSubMenu ? "" : ""}`}>
					{isSubMenu && (
						<>
							{subMenuItems
								.filter(
									(item) => item.target === activeItem.target
								)
								.map((item) =>
									item.updateObjectCodeValues.map(
										({ value, targetValue }) => (
											<div
												className="item"
												key={value}
												onClick={() => {
													
													UpdateObjectCode(
														item.tIndex,
														targetValue
													);
												}}
											>
												<div className="item__label">
													{value}
												</div>
											</div>
										)
									)
								)}
						</>
					)}
					{!isSubMenu && (
						<>
							<div className="item" onClick={handleCardClick}>
								<div className="item__dot">
									<img src={texture} alt="swapImg" />
								</div>
							</div>
							<div className="item" onClick={handleCardClick}>
								<div className="item__dot">
									<img src={swap} alt="swapImg" />
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
