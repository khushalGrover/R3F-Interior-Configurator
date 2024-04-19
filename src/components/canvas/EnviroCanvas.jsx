import {
	OrbitControls,
	useTexture,
	CameraControls,
	Environment,
	AccumulativeShadows,
	RandomizedLight,
} from "@react-three/drei";
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
		// if (arg === 1) {
		// 	handleView(
		// 		{ x: 0, y: 5, z: 0 }, // position
		// 		{ x: 20, y: 4, z: -10 }, // target
		// 		true // enableTransition
		// 	);
		// }
		if (arg === 1) {
			handleView(
				{ x: 22, y: 5, z: 0 }, // position
				{ x: 20, y: 2, z: -17 }, // target
				true // enableTransition
			);
		} else if (arg === 2) {
			handleView(
				{ x: 15, y: 3, z: -14 }, // position
				{ x: 20, y: 0, z: -20 }, // target
				true // enableTransition
			);
		} else if (arg === 3) {
			handleView(
				{ x: 20, y: 3, z: -17 }, // position
				{ x: 10, y: 0, z: -12 }, // target
				true // enableTransition
			);
		} else if (arg === 4) {
			handleView(
				{ x: 18, y: 3, z: -18 }, // position
				{ x: 10, y: 1, z: -35 }, // target
				true // enableTransition
			);
		} else if (arg === 5) {
			handleView(
				{ x: 22, y: 3, z: -18 }, // position
				{ x: 10, y: 1, z: -35 }, // target
				true // enableTransition
			);
		} else if (arg === 6) {
			handleView(
				{ x: 25, y: 6, z: -13 }, // position
				{ x: 35, y: -5, z: -20 }, // target
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
			<Building arg={arg} />
			<AccumulativeShadows
				resolution={1024}
				frames={100}
				color={'#8fa2be'}
				alphaTest={0.68}
				colorBlend={1.5}
				opacity={1.65}
				scale={8}
			>
				<RandomizedLight
					radius={2.6}
					ambient={0.5}
					position={[10, 5, -15]}
					bias={0.001}
				/>
			</AccumulativeShadows>
			<Environment
				files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr"
				background
				blur={0.7}
			/>
		</Canvas>
	);
};
