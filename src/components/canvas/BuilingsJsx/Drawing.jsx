import React from "react";
import { useLoader } from "@react-three/fiber";
import { useCustomization } from "../../../constants/Customization";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";











export function Drawing(props) {
	const { codeOBJ } = useCustomization();

	const modelPaths = {
		dTable: [
			"https://www.backend.visualizenbuild.com/static/d_table/d_table_a.glb",
			"https://www.backend.visualizenbuild.com/static/d_table/d_table_b.glb",
		],
		dSofa: [
			"https://www.backend.visualizenbuild.com/static/d_sofa/d_sofa_a.glb",
			"https://www.backend.visualizenbuild.com/static/d_sofa/d_sofa_b.glb",
		],
		dRug: [
			"https://www.backend.visualizenbuild.com/static/d_rug/d_rug_a.glb",
			"https://www.backend.visualizenbuild.com/static/d_rug/d_rug_b.glb",
		],
		dSelf: [
			"https://www.backend.visualizenbuild.com/static/d_self/d_self_a.glb",
			"https://www.backend.visualizenbuild.com/static/d_self/d_self_b.glb",
		],
	};

	const loadedModels = {
		dTable: modelPaths.dTable.map((path) => useLoader(GLTFLoader, path)),
		dSofa: modelPaths.dSofa.map((path) => useLoader(GLTFLoader, path)),
		dRug: modelPaths.dRug.map((path) => useLoader(GLTFLoader, path)),
		dSelf: modelPaths.dSelf.map((path) => useLoader(GLTFLoader, path)),
	};

	return (
		<>
			{loadedModels.dTable.map((model, index) => (
				<primitive
					key={`d_table_${index}`}
					object={model.scene}
					visible={codeOBJ["dTable"] === index}
				/>
			))}

			{loadedModels.dSofa.map((model, index) => (
				<primitive
					key={`d_sofa_${index}`}
					object={model.scene}
					visible={codeOBJ["dSofa"] === index}
				/>
			))}

			{loadedModels.dRug.map((model, index) => (
				<primitive
					key={`d_rug_${index}`}
					object={model.scene}
					visible={codeOBJ["dRug"] === index}
				/>
			))}

			{loadedModels.dSelf.map((model, index) => (
				<primitive
					key={`d_self_${index}`}
					object={model.scene}
					visible={codeOBJ["dSelf"] === index}
				/>
			))}
		</>
	);
}
