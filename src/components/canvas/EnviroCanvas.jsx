import {
	CameraControls,
	Environment,
	AccumulativeShadows,
	RandomizedLight,
	Loader,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Building } from "./Building";
import React, { useEffect, useState, useRef, Suspense } from "react";
import { useControls, button, buttonGroup, folder } from "leva";
import { useCustomization } from "../../constants/Customization";
import * as THREE from "three";

const { DEG2RAD } = THREE.MathUtils;
export const EnviroCanvas = (arg) => {
	const { loc, setLoc, objectCode, setObjectCode,targetPos } = useCustomization();
	const cameraControlsRef = useRef(null);

	const handleView = (position, target, enableTransition) => {
		cameraControlsRef.current?.setLookAt(
			position.x,
			position.y,
			position.z,
			target.x,
			target.y,
			target.z,
			enableTransition
		);
		// console.log("Camera Position", position);
	};

	useEffect(() => {
		// console.log("Location: " + loc);
		const views = [
			{
				position: { x: 32, y: 5, z: 0 },
				target: { x: 27, y: 2, z: -7 },
			},
			{
				position: { x: 16, y: 3.2, z: -13 },
				target: { x: 17, y: 1.5, z: -15.4 },
			},
			{
				position: { x: 18, y: 3, z: -16 },
				target: { x: 15, y: 2, z: -18.4 },
			},
			{
				position: { x: 18, y: 3, z: -18 },
				target: { x: 17, y: 3, z: -21 },
			},
			{
				position: { x: 19, y: 3, z: -15 },
				target: { x: 20, y: 3, z: -20 },
			},
			{
				position: { x: 19, y: 3, z: -21 },
				target: { x: 25, y: 3, z: -15 },
			},
			{
				position: { x: 31.5, y: 2.5, z: -16 },
				target: { x: 28.9, y: 2.5, z: -15.5 },
			},
			{
				position: { x: 25, y: 6, z: -15.2 },
				target: { x: 22, y: 6, z: -15.5 },
			},
			{
				position: { x: 18, y: 6, z: -10 },
				target: { x: 16.5, y: 6, z: -11}
			}
		];
		const view = views[loc - 1];
		if (view) {
			handleView(view.position, view.target, true);
		}
	}, [arg]);


	/*
	// const {
	// 	minDistance,
	// 	maxDistance,
	// 	enabled,
	// 	verticalDragToForward,
	// 	dollyToCursor,
	// 	infinityDolly,
	// } = useControls({
	// 	CameraLight: folder({
	// 		ActiveCamera: folder({
	// 			activeCamera: buttonGroup({
	// 				label: "Camera",
	// 				opts: {
	// 					1: () => setLoc(1),
	// 					2: () => setLoc(2),
	// 					3: () => setLoc(3),
	// 					4: () => setLoc(4),
	// 					5: () => setLoc(5),
	// 					6: () => setLoc(6),
	// 					7: () => setLoc(7),
	// 					8: () => setLoc(8),
	// 				},
	// 			}),
	// 		}),
	// 	}),

	// 	DrawingRoom: folder(
	// 		{
	// 			sofa: buttonGroup({
	// 				label: "Sofa-Set",
	// 				opts: {
	// 					"Vairient-1": () =>
	// 						handleObjectCodeUpdateAtIndex(0, 0, objectCode),
	// 					"Vairient-2": () =>
	// 						handleObjectCodeUpdateAtIndex(0, 1, objectCode),
	// 				},
	// 			}),
	// 			// SofaColor: { r: 1, g: 2, b: 3 },

	// 			CenteralTable: buttonGroup({
	// 				label: "Table",
	// 				opts: {
	// 					"Varient-1": () =>
	// 						handleObjectCodeUpdateAtIndex(1, 0, objectCode),
	// 					"Varient-2": () =>
	// 						handleObjectCodeUpdateAtIndex(1, 1, objectCode),
	// 					// "Pattern-3": () => handleObjectCodeUpdateAtIndex(1,1,objectCode),
	// 				},
	// 			}),
	// 			BookShelf: buttonGroup({
	// 				label: "Book-Shelf",
	// 				opts: {
	// 					"Vairient-1": () =>
	// 						handleObjectCodeUpdateAtIndex(2, 0, objectCode),
	// 					"Vairient-2": () =>
	// 						handleObjectCodeUpdateAtIndex(2, 1, objectCode),
	// 				},
	// 			}),

	// 			// collapsed: true,
	// 		},
	// 		{ collapsed: false }
	// 	),
	// 	DiningRoom: folder(
	// 		{
	// 			clock: buttonGroup({
	// 				label: "Clock",
	// 				opts: {
	// 					"Vairient-1": () =>
	// 						handleObjectCodeUpdateAtIndex(11, 0, objectCode),
	// 					"Vairient-2": () =>
	// 						handleObjectCodeUpdateAtIndex(11, 1, objectCode),
	// 				},
	// 			}),
	// 			// SofaColor: { r: 1, g: 2, b: 3 },

	// 			DnTable: buttonGroup({
	// 				label: "Dining-Table",
	// 				opts: {
	// 					"Pattern-1": () =>
	// 						handleObjectCodeUpdateAtIndex(7, 0, objectCode),
	// 					"Pattern-2": () =>
	// 						handleObjectCodeUpdateAtIndex(7, 1, objectCode),
	// 					// "Pattern-3": () => handleObjectCodeUpdateAtIndex(1,1,objectCode),
	// 				},
	// 			}),
	// 			DnLamp: buttonGroup({
	// 				label: "Lamp",
	// 				opts: {
	// 					Var1: () =>
	// 						handleObjectCodeUpdateAtIndex(9, 0, objectCode),
	// 					Var2: () =>
	// 						handleObjectCodeUpdateAtIndex(9, 1, objectCode),
	// 					Var3: () =>
	// 						handleObjectCodeUpdateAtIndex(9, 2, objectCode),
	// 					Var4: () =>
	// 						handleObjectCodeUpdateAtIndex(9, 3, objectCode),
	// 					Var5: () =>
	// 						handleObjectCodeUpdateAtIndex(9, 4, objectCode),
	// 				},
	// 			}),

	// 			// collapsed: true,
	// 		},
	// 		{ collapsed: false }
	// 	),
	// 	Kitchen: folder(
	// 		{
	// 			KtTaps: buttonGroup({
	// 				label: "Taps",
	// 				opts: {
	// 					Var1: () =>
	// 						handleObjectCodeUpdateAtIndex(3, 0, objectCode),
	// 					Var2: () =>
	// 						handleObjectCodeUpdateAtIndex(3, 1, objectCode),
	// 					Var3: () =>
	// 						handleObjectCodeUpdateAtIndex(3, 2, objectCode),
	// 					Var4: () =>
	// 						handleObjectCodeUpdateAtIndex(3, 3, objectCode),
	// 					Var5: () =>
	// 						handleObjectCodeUpdateAtIndex(3, 4, objectCode),
	// 					Var6: () =>
	// 						handleObjectCodeUpdateAtIndex(3, 5, objectCode),
	// 					Var7: () =>
	// 						handleObjectCodeUpdateAtIndex(3, 6, objectCode),
	// 				},
	// 			}),
	// 			// SofaColor: { r: 1, g: 2, b: 3 },

	// 			KtTable: buttonGroup({
	// 				label: "Table",
	// 				opts: {
	// 					"Pattern-1": () =>
	// 						handleObjectCodeUpdateAtIndex(4, 0, objectCode),
	// 					"Pattern-2": () =>
	// 						handleObjectCodeUpdateAtIndex(4, 1, objectCode),
	// 					// "Pattern-3": () => handleObjectCodeUpdateAtIndex(1,1,objectCode),
	// 				},
	// 			}),
	// 			KtLamp: buttonGroup({
	// 				label: "Lamp",
	// 				opts: {
	// 					Var1: () =>
	// 						handleObjectCodeUpdateAtIndex(5, 0, objectCode),
	// 					Var2: () =>
	// 						handleObjectCodeUpdateAtIndex(5, 1, objectCode),
	// 					Var3: () =>
	// 						handleObjectCodeUpdateAtIndex(5, 2, objectCode),
	// 				},
	// 			}),
	// 			KtChair: buttonGroup({
	// 				label: "Kitchen Chair",
	// 				opts: {
	// 					"Vairient-1": () =>
	// 						handleObjectCodeUpdateAtIndex(6, 0, objectCode),
	// 					"Vairient-2": () =>
	// 						handleObjectCodeUpdateAtIndex(6, 1, objectCode),
	// 				},
	// 			}),

	// 			// collapsed: true,
	// 		},
	// 		{ collapsed: false }
	// 	),
	// });
	*/

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

	return (
		<>
			<Canvas shadows camera={ { fov: 50 }}>
				<Suspense fallback={null}>
					<CameraControls ref={cameraControlsRef} minDistance={1} maxDistance={3} />
					{/* <color attach="background" args={["#ececec"]} /> */}
					{/* <ambientLight intensity={0.5} /> */}
					<Building loc={loc} />
					<AccumulativeShadows
						resolution={1024}
						frames={100}
						color={"#8fa2be"}
						alphaTest={0.68}
						colorBlend={1.5}
						opacity={1.65}
						scale={8}
					>
						<RandomizedLight
							radius={2.6}
							ambient={0.3}
							position={[10, 5, -15]}
							bias={0.001}
						/>
					</AccumulativeShadows>
					<Environment
						files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr"
						background
						blur={0.7}
					/>
				</Suspense>
			</Canvas>
			<Loader />
		</>
	);
};
