import { custom } from "../../assets/icons";
import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useCustomization } from "../../constants/Customization";
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

			<InteractionBtn target="dnClock" offset={[15.764, 3.295, -21.151]} />
		</>
	);
}

function InteractionBtn(target, offset) {
	const handleFocus = (target) => {
		setAct(target);
		console.log("target is:", target);
	};

	return (
		<Html scale={1} distanceFactor={3} position={target.offset}>
			<div
				className={"handle w-8 h-8 bg-black"}
				onClick={() => {
					handleFocus.bind(this, target);
					console.log("Active obj is:", target.target);
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
				{/* Table	 */}
				<div className="configurator__section">
					<div
						className="configurator__section__title"
						onClick={() => {
							console.log(
								"focus on location " + props.focusLocation
							);
							setLoc(props.tIndex);
						}}
					>
						{props.focusLocation}
					</div>
				</div>
				{/* <Overlay /> */}
			</div>
		</Html>
	);
}
