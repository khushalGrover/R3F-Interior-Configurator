import {
	CameraControls,
	Environment,
	AccumulativeShadows,
	RandomizedLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Building } from "./Building";
import React, { useEffect, useState, useRef } from "react";
// import { useControls, button, buttonGroup, folder } from "leva";
import { useCustomization } from "../../constants/Customization";
import * as THREE from "three";

const { DEG2RAD } = THREE.MathUtils;


export const EnviroCanvas = (arg) => {
	const { loc, setLoc , objectCode, setObjectCode} = useCustomization();
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
				target: { x: 25, y: 2, z: -17 },
			},
			{
				position: { x: 15, y: 3, z: -14 },
				target: { x: 20, y: 0, z: -20 },
			},
			{
				position: { x: 20, y: 3, z: -17 },
				target: { x: 10, y: 0, z: -12 },
			},
			{
				position: { x: 18, y: 3, z: -18 },
				target: { x: 10, y: 1, z: -35 },
			},
			{
				position: { x: 22, y: 3, z: -18 },
				target: { x: 10, y: 1, z: -35 },
			},
			{
				position: { x: 25, y: 6, z: -13 },
				target: { x: 35, y: -5, z: -20 },
			},
		];
		const view = views[loc - 1];
		if (view) {
			handleView(view.position, view.target, true);
		}
	}, [arg]);

	{/*
	const {
		minDistance,
		enabled,
		verticalDragToForward,
		dollyToCursor,
		infinityDolly,
	} = useControls({
	
		DebugPanel: folder({
			ActiveCamera: folder({
				activeCamera: buttonGroup({
					label: "Camera",
					opts: {
						1: () => setLoc(1),
						2: () => setLoc(2),
						3: () => setLoc(3),
						4: () => setLoc(4),
						5: () => setLoc(5),
						6: () => setLoc(6),
						7: () => setLoc(7),
						8: () => setLoc(8),
					},
				}),
			}),
		}),

		DrawingRoom: folder(
			{
				sofa: buttonGroup({
					label: "Sofa Set",
					opts: {
						"Vairient-1": () => handleObjectCodeUpdateAtIndex(0,1,objectCode),
						"Vairient-2": () => handleObjectCodeUpdateAtIndex(0,2,objectCode),
					},
				}),
				// SofaColor: { r: 1, g: 2, b: 3 },

				Rug: buttonGroup({
					label: "Rug Pattern",
					opts: {
						"Pattern-1": () => handleObjectCodeUpdateAtIndex(1,1,objectCode),
						"Pattern-2": () => handleObjectCodeUpdateAtIndex(1,2,objectCode),
						"Pattern-3": () => handleObjectCodeUpdateAtIndex(1,3,objectCode),
					},
				}),
				CenterTable: buttonGroup({
					label: "Center Table",
					opts: {
						"Vairient-1": () => handleObjectCodeUpdateAtIndex(2,1,objectCode),
						"Vairient-2": () => handleObjectCodeUpdateAtIndex(2,2,objectCode),
					},
				}),

				// collapsed: true,
			},
			{ collapsed: false }
		),
	});

	function handleObjectCodeUpdateAtIndex(tIndex, value, objectCode) {
		// in case 3 and case4, value is incremented by 1 bcz the value starts from 1 not 0 , bcz none option is not included for legs and seat
        switch (tIndex) {
            case 0: 
                setObjectCode(value + objectCode.charAt(1) + objectCode.slice(2));
                break;
            case 1:
                setObjectCode(objectCode.charAt(0) + value + objectCode.slice(2));
                break;
            case 2:
                setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + value + objectCode.slice(3));
                break;
            case 3:
                setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + (value + 1) + objectCode.slice(4));
                break;
            case 4:
                setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + (value + 1));
                break;
			case 5:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + (value + 1) + objectCode.slice(6));
				break;
			case 6:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + (value + 1) + objectCode.slice(7));
				break;
			case 7:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + (value + 1) + objectCode.slice(8));
				break;
			case 8:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + (value + 1) + objectCode.slice(9));
				break;
			case 9:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + (value + 1) + objectCode.slice(10));
				break;
			case 10:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + (value + 1) + objectCode.slice(11));
				break;
			case 11:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + (value + 1) + objectCode.slice(12));
				break;
			case 12:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + (value + 1) + objectCode.slice(13));
				break;
			case 13:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + (value + 1) + objectCode.slice(14));
				break;
			case 14:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + (value + 1) + objectCode.slice(15));
				break;
			case 15:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + (value + 1) + objectCode.slice(16));
				break;
			case 16:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + objectCode.charAt(15) + (value + 1) + objectCode.slice(17));
				break;
			case 17:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + objectCode.charAt(15) + objectCode.charAt(16) + (value + 1) + objectCode.slice(18));
				break;
			case 18:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + objectCode.charAt(15) + objectCode.charAt(16) + objectCode.charAt(17) + (value + 1) + objectCode.slice(19));
				break;
			case 19:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + objectCode.charAt(15) + objectCode.charAt(16) + objectCode.charAt(17) + objectCode.charAt(18) + (value + 1) + objectCode.slice(20));
				break;
			case 20:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + objectCode.charAt(15) + objectCode.charAt(16) + objectCode.charAt(17) + objectCode.charAt(18) + objectCode.charAt(19) + (value + 1) + objectCode.slice(21));
				break;
			


            default:
                break;
			
			
        
        }
		console.log("Object Code: " + objectCode);
        
	}	




*/}
	

	return (
		<Canvas shadows camera={{ fov: 50 }}>
			<CameraControls
				ref={cameraControlsRef}
			/>
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
		</Canvas>
	);
};
