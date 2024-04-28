
import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useCustomization } from "../../constants/Customization";
// import { UpdateObjectCode } from "../UpdateObjectCode";
export function UIManager(props) {
	const { codeOBJ, loc, setLoc } = useCustomization();
	const [objVisible, setObjVisible] = useState();
	const mainRef = useRef();
	const [clicked, setClick] = useState(false);

	return (
		<>
			<Annotation
				position={[16.483, 3.5, -15.337]}
				focusObj={"Drawing Room"}
				tIndex={2}
			></Annotation>
			<Annotation
				position={[17, 2, -21]}
				focusObj={"Dinning Table"}
				tIndex={4}
			></Annotation>
			<Annotation
				position={[20, 3.5, -20]}
				focusObj={"Kitchen"}
				tIndex={5}
			></Annotation>
			<Annotation
				position={[19, 3, -20]}
				focusObj={"."}
				tIndex={6}
			></Annotation>
			<Annotation
				position={[29, 3.5, -15]}
				focusObj={"Guest Room"}
				tIndex={7}
			></Annotation>
			<Annotation
				position={[27, 3.5, -7]}
				focusObj={"Swimming Pool"}
				tIndex={1}
			></Annotation>
			<Annotation
				position={[24, 5, -15]}
				focusObj={"Study Room"}
				tIndex={8}
			></Annotation>
			<Annotation
				position={[16, 7, -11]}
				focusObj={"Master Bed Room"}
				tIndex={9}
			></Annotation>
		</>
	);
}

function Annotation({ children, ...props }) {
	const [objVisible, setObjVisible] = useState();
	const [isObjFocus, setIsObjFocus] = useState(true);
	const { setLoc } = useCustomization();
	return (
		<Html
			scale={5}
			// rotation={[Math.PI / 2, Math.PI / 2, 0]}
			position={props.position}
			distanceFactor={5}
		>
			<div className="configurator">
				{/* Table	 */}
				<div className="configurator__section">
					<div
						className="configurator__section__title"
						onClick={() => {
							console.log("focus on " + props.focusObj);
							setLoc(props.tIndex);
						}}
					>
						{props.focusObj}
					</div>
				</div>
				{/* <Overlay /> */}
			</div>
		</Html>
	);
}
