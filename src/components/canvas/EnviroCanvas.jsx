import { OrbitControls, useTexture, CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Building } from "./Building";
import React, { useEffect, useRef } from "react";

export const EnviroCanvas = ({ arg }) => {
	const cameraControlRef = useRef(null);

	const handleView = (position, target, enableTransition) => {
		cameraControlRef.current?.setLookAt(
			position.x,
			position.y,
			position.z,
			target.x,
			target.y,
			target.z,
			enableTransition
		);
		console.log("Camera position:", position);
	};

	useEffect(() => {
		if (arg === 1) {
			handleView(
				{ x: 0, y: 5, z: 0 }, // position
				{ x: 20, y: 4, z: -10 }, // target
				true // enableTransition
			);
		} else if (arg === 2) {
			handleView(
				{ x: 22, y: 5, z: 0 }, // position
				{ x: 20, y: 2, z: -17 }, // target
				true // enableTransition
			);
		} else if (arg === 3) {
			handleView(
				{ x: 20, y: 3, z: -17 }, // position
				{ x: 10, y: 0, z: -12 }, // target
				true // enableTransition
			);
		}
	}, [arg]);

	return (
		<Canvas shadows camera={{ position: [3, 0, 0], fov: 50 }}>
			<CameraControls ref={cameraControlRef} />
			<color attach="background" args={["#ececec"]} />
			{/* <OrbitControls /> */}

			<ambientLight intensity={0.5} />
			{/* <mesh>
				<boxGeometry />
				<meshNormalMaterial />
			</mesh> */}
			<Building arg={arg}/>
		</Canvas>
	);
};
