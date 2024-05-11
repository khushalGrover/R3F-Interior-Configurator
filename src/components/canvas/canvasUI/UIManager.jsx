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
// import { UpdateObjectCode } from "../UpdateObjectCode";
export function UIManager() {
	const { activeItem } = useCustomization();

	// Calculate the position for the Card and SubMenu based on the offset of interactionBtns
	const cardPosition = calculatePosition[(0, 0, 0)];
	const subMenuPosition = calculatePosition([0, 0, 0]);

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
		console.log("new Position is:", position);
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
			<Card position={cardPosition} />
			<SubMenu position={subMenuPosition} />
		</>
	);
}

function InteractionBtn(target) {
	const { activeItem, setActiveItem } = useCustomization();

	const handleFocus = (target) => {
		setActiveItem(target);
		console.log("Active obj is:", activeItem);
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
		variants: [{ variant: "L Shape" }, { variant: "U Shape" }],
		colors: [{ color: "Red" }, { color: "Blue" }],
	},
	{
		target: "dSelf",
		variants: [{ variant: "" }],
		colors: [{ color: "dark" }, { color: "light" }],
	},
	{
		target: "dTable",
		variants: [{ variant: "Round" }, { variant: "Square" }],
		colors: [{ color: "Black" }, { color: "White" }],
	},
	{
		target: "dRug",
		variants: [],
		colors: [{ color: "Red" }, { color: "Blue" }],
	},
	{
		target: "dnClock",
		variants: [],
		colors: [{ color: "Black" }, { color: "White" }],
	}
];

function Card() {
	const { setFocusObj, setMode, activeItem, setActiveItem } =
		useCustomization();

	console.log("Position is:", activeItem.offset);
	const handleReset = () => {
		// setFocusObj("");
		// setMode("view");
		setActiveItem.offset = [0, 0, 0];
		console.log("reset Active obj is offset:", activeItem.offset);
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
						<CardSection />
					</div>
				</div>
			</div>
		</Html>
	);
}

function SubMenu() {
	const { activeItem } = useCustomization();
	return (
		<Html scale={2} distanceFactor={8} position={activeItem.offset}>
			<div className="configurator">
				<div className="configurator__section">
					<div className="configurator__section__title">
						<CardSection isSubMenu activeItem={activeItem} />
					</div>
				</div>
			</div>
		</Html>
	);
}

function CardSection({ isSubMenu, activeItem }) {
	const handleClick = () => {
		console.log("Clicked");
	};

	return (
		<div className="card">
			<div className="card__section">
				<div
					className={`card__section__values ${
						isSubMenu ? "two" : ""
					}`}
				>
					{isSubMenu && (
						<>
							<div className="item" onClick={handleClick}>
								<div className="item__label">123</div>
							</div>
							<div className="item" onClick={handleClick}>
								<div className="item__label">
									{activeItem.target}
								</div>
							</div>
						</>
					)}
					{!isSubMenu && (
						<>

							<div className="item" onClick={handleClick}>
								<div className="item__dot">
									<img src={texture} alt="swapImg" />
								</div>
							</div>
							<div className="item" onClick={handleClick}>
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
