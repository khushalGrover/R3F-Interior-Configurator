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
import { annotations, interactionBtns, subMenuItems } from "../../../constants";
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


					//  To Do make saperate component file for below code



// function Card() {
// 	const { setFocusObj, setMode, activeItem, setActiveItem } =
// 		useCustomization();

// 	const handleReset = () => {
// 		// setFocusObj("");
// 		setMode("view");
// 	};

// 	return (
// 		<Html scale={1} distanceFactor={4} position={activeItem.offset}>
// 			<div className="handle w-5 h-5 bg-red-600" onClick={handleReset}>
// 				<img
// 					className="handleIcon--active"
// 					src={cross}
// 					alt={"crossImg"}
// 				/>
// 			</div>
// 			<div className="configurator">
// 				<div className="configurator__section">
// 					<div className="configurator__section__title">
// 						<CardSection
// 							activeItem={activeItem}
// 							setMode={setMode}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</Html>
// 	);
// }

function SubMenu() {
	const { activeItem, setMode, objectCode, setObjectCode } = useCustomization();
	return (
		<Html scale={2} distanceFactor={3} position={activeItem.offset}>
			<div className="configurator">
				<div className="configurator__section">
					<div className="configurator__section__title">
						<CardSection
							isSubMenu
							activeItem={activeItem}
							setMode={setMode}
							objectCode={objectCode}
							setObjectCode={setObjectCode}							
						/>
					</div>
				</div>
			</div>
		</Html>
	);
}

function CardSection({ isSubMenu, activeItem, setMode, objectCode, setObjectCode}) {
	// const { setMode } = useCustomization();

	const handleCardClick = () => {
		// console.log("Clicked "+ activeItem.target);
		setMode("submenu");
	};
	const handleSubMenuClick = (value, targetValue, item, objectCode, setObjectCode) => {
		// console.log("Clicked subMenu " + activeItem.target);
		setMode("view");
		// console.log(
		// 	" Clicked " +
		// 		value +
		// 		" with target " +
		// 		targetValue +
		// 		" at index " +
		// 		item.tIndex
		// );
		UpdateObjectCode(item.tIndex, targetValue, objectCode, setObjectCode);
		// console.log("ObjectCode is:", objectCode);
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
													handleSubMenuClick(
														value,
														targetValue,
														item,
														objectCode={objectCode},
														setObjectCode={setObjectCode},
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
					{/* {!isSubMenu && (
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
					)} */}
				</div>
			</div>
		</div>
	);
}




function InteractionBtn(target) {
	const { activeItem, setActiveItem, setMode, setActiveObjectProductId, activeObjectProductId } = useCustomization();

	const handleFocus = (target) => {
		setActiveItem(target);
		setMode("submenu");
		// console.log("Active pos is:", activeItem.name);
		// console.log("target:", activeObjectProductId);
		setActiveObjectProductId(target.objectId);

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

