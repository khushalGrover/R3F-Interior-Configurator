import {
	CameraControls,
	Environment,
	AccumulativeShadows,
	RandomizedLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Building } from "./Building";
import React, { useEffect, useRef } from "react";
import { CustomizationProvider } from "../../constants/Customization";
import { useControls, button, buttonGroup, folder } from "leva";
import * as THREE from "three";

const { DEG2RAD } = THREE.MathUtils;

export const EnviroCanvas = ({ arg }) => {
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
	};

	useEffect(() => {
		const views = [
			{
				position: { x: 22, y: 5, z: 0 },
				target: { x: 20, y: 2, z: -17 },
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
		const view = views[arg - 1];
		if (view) {
			handleView(view.position, view.target, true);
		}
	}, [arg]);

	const {
		minDistance,
		enabled,
		verticalDragToForward,
		dollyToCursor,
		infinityDolly,
	} = useControls({
		DebugPanel: folder(
			{
				//  current code with readonly
				CameraPos: folder({
					cameraPos: { x: 0, y: 0, z: 0 },
					cameraBtn: buttonGroup({
						label: "Camera Button",
						opts: {
							" Prev. Camera": () => setArg(arg-1),
							"Next Camera": () => setArg(arg+1),
						},
					}),
				}),
				Code: "DR11-DR11-KT11-HR11",
				Search: button((get) => console.log("Search:", get("Code"))),
				// 'setLookAt(…position, …target)': button((get) => cameraControlsRef.current?.setLookAt(...get('setLookAt.vec4'), ...get('setLookAt.vec5'), true)),
				setLookAt: folder(
					{
						vec4: { value: [1, 2, 3], label: "position" },
						vec5: { value: [1, 1, 0], label: "target" },
						"setLookAt(…position, …target)": button((get) => {
							const position = get("setLookAt.vec4");
							const target = get("setLookAt.vec5");
							if (Array.isArray(position) && Array.isArray(target)) {
								cameraControlsRef.current?.setLookAt(
									...position,
									...target,
									true
								);
							}
						}),
					},
					{ collapsed: true }
				),
				thetaGrp: buttonGroup({
					label: "rotate theta",
					opts: {
						"+45º": () =>
							cameraControlsRef.current?.rotate(
								45 * DEG2RAD,
								0,
								true
							),
						"-90º": () =>
							cameraControlsRef.current?.rotate(
								-90 * DEG2RAD,
								0,
								true
							),
						"+360º": () =>
							cameraControlsRef.current?.rotate(
								360 * DEG2RAD,
								0,
								true
							),
					},
				}),
			},
			{ collapsed: true }
		),

		DrawingRoom: folder(
			{
				// label: "Drawing Room",
				// collapsed: true,
				Sofa: folder({
					sofa: buttonGroup({
						label: "Sofa Set",
						opts: {
							"Vairient-1": () => console.log("sofa 1"),
							"Vairient-2": () => console.log("sofa 2"),
						},
					}),
					SofaColor: { r: 1, g: 2, b: 3 },
				}),

				CenterTable: folder({
					CenterTable: buttonGroup({
						label: "Table Body",
						opts: {
							"Vairient-1": () => console.log("table 1"),
							"Vairient-2": () => console.log("table 2"),
						},
					}),
				}),

				Rug: { options: ["ZigZag Pattern", "Classic", "Modern"] },
				// collapsed: true,
			},
			{ collapsed: false }
		),
	});

	return (
		<CustomizationProvider>
			<Canvas shadows camera={{ fov: 50 }}>
				<CameraControls
					ref={cameraControlsRef}
					minDistance={minDistance}
					enabled={enabled}
					verticalDragToForward={verticalDragToForward}
					dollyToCursor={dollyToCursor}
					infinityDolly={infinityDolly}
				/>
				<color attach="background" args={["#ececec"]} />
				<ambientLight intensity={0.5} />
				<Building arg={arg} />
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
		</CustomizationProvider>
	);
};
