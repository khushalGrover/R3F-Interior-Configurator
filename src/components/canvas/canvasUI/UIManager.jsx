import { custom } from "../../../assets/icons";
import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useCustomization } from "../../../constants/Customization";
// import { UpdateObjectCode } from "../UpdateObjectCode";
export function UIManager() {
	return (
		<>
			<Annotation
				position={[16.483, 3.5, -15.337]}
				focusLocation={"Drawing Room"}
				tIndex={2}
			></Annotation>
			<Annotation
				position={[17, 2, -21]}
				focusLocation={"Dinning Table"}
				tIndex={4}
			></Annotation>
			{/* <Annotation
				position={[21, 3.5, -21]}
				focusLocation={"Kitchen"}
				tIndex={5}
			></Annotation> */}
			<Annotation
				position={[19, 3, -20]}
				focusLocation={"Kitchen"}
				tIndex={6}
			></Annotation>
			<Annotation
				position={[29, 3.5, -15]}
				focusLocation={"Guest Room"}
				tIndex={7}
			></Annotation>
			<Annotation
				position={[27, 3.5, -7]}
				focusLocation={"Swimming Pool"}
				tIndex={1}
			></Annotation>
			<Annotation
				position={[24, 5, -15]}
				focusLocation={"Study Room"}
				tIndex={8}
			></Annotation>
			<Annotation
				position={[16, 7, -11]}
				focusLocation={"Master Bed Room"}
				tIndex={9}
			></Annotation>

			<InteractionBtn target="dSofa1" offset={[16.9, 2, -16.7]} />
			
			<InteractionBtn target="dSelf" offset={[15.2, 2.301, -17.85]} />
			<InteractionBtn target="dTable" offset={[16.873, 1.7, -15.301]} />
			<InteractionBtn target="dRug" offset={[17.5, 1.472, -16]} />

			<InteractionBtn target="dnClock" offset={[15.9, 3.295, -21.151]} />
			<InteractionBtn
				target="dnClock"
				offset={[16.928, 3.619, -21.346]}
			/>
			<InteractionBtn target="dnTable" offset={[16.928, 2.5, -20.8]} />

			<InteractionBtn target="ktTap" offset={[20, 2.672, -19.84]} />
			<InteractionBtn target="ktLamp" offset={[20.111, 3.556, -19.587]} />
			<InteractionBtn target="ktTable" offset={[19.5, 2.672, -19.84]} />
			<InteractionBtn target="ktTable" offset={[20.138, 2.5, -18.28]} />
		</>
	);
}

function InteractionBtn(target) {
	const { activeItem, setActiveItem } = useCustomization();

	const handleFocus = (target) => {
		setActiveItem(target.target);
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
    { position: [16.483, 3.5, -15.337], focusLocation: "Drawing Room", tIndex: 2 },
    { position: [17, 2, -21], focusLocation: "Dinning Table", tIndex: 4 },
    { position: [19, 3, -20], focusLocation: "Kitchen", tIndex: 6 },
    { position: [29, 3.5, -15], focusLocation: "Guest Room", tIndex: 7 },
    { position: [27, 3.5, -7], focusLocation: "Swimming Pool", tIndex: 1 },
    { position: [24, 5, -15], focusLocation: "Study Room", tIndex: 8 },
    { position: [16, 7, -11], focusLocation: "Master Bed Room", tIndex: 9 },
];

const interactionBtns = [
    { target: "dSofa1", offset: [16.9, 2, -16.7] },
    { target: "dSelf", offset: [15.2, 2.301, -17.85] },
    { target: "dTable", offset: [16.873, 1.7, -15.301] },
    { target: "dRug", offset: [17.5, 1.472, -16] },
    { target: "dnClock", offset: [15.9, 3.295, -21.151] },
    { target: "dnClock", offset: [16.928, 3.619, -21.346] },
    { target: "dnTable", offset: [16.928, 2.5, -20.8] },
    { target: "ktTap", offset: [20, 2.672, -19.84] },
    { target: "ktLamp", offset: [20.111, 3.556, -19.587] },
    { target: "ktTable", offset: [19.5, 2.672, -19.84] },
    { target: "ktTable", offset: [20.138, 2.5, -18.28] },
];

const SubMenu = (target) => {
	if (activeItem === "dSofa1") {
		return (
			<Html scale={5} position={target.position} distanceFactor={5}>
				<div className="card">
					<h1 className="card__section__title">Table</h1>

					{/* <div className="card__section__values">
						<div
							className="item"
							onClick={() => {
								console.log("clicked 0");
							}}
						>
							<div className="item__dot">
								<img src={move} alt="moveImg" />
							</div>
						</div>
						{true && (
							<div
								className="item"
								onClick={() => {
									console.log("clicked 0");
								}}
							>
								<div className="item__dot">
									<img src={rotate2} alt="rotateImg" />
								</div>
							</div>
						)}
						 <div className="item ">
							<div className="item__dot">
								{" "}
								<img src={texture} alt="textureImg" />
							</div>
						</div>
						<div className="item">
							<div className="item__dot">
								<img src={swap} alt="swapImg" />
							</div>
						</div> 
					</div> */}
				</div>
			</Html>
		);
	}
};
