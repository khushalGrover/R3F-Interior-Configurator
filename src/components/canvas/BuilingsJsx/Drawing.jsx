import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useCustomization } from "../../../constants/Customization";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Drawing(props) {
	const { codeOBJ, loc, setLoc } = useCustomization();
	
    
        
    const d_table_a = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d_table/d_table_a.glb"
	);
	const d_table_b = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d_table/d_table_b.glb"
	);
	const d_sofa_a = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d_sofa/d_sofa_a.glb"
	);
	const d_sofa_b = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d_sofa/d_sofa_b.glb"
	);
	const d_rug_a = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d_rug/d_rug_a.glb"
	);
	const d_rug_b = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d_rug/d_rug_b.glb"
	);
	const d_self_a = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d_self/d_self_a.glb"
	);
	const d_self_b = useLoader(
		GLTFLoader,
		"https://www.backend.visualizenbuild.com/static/d_self/d_self_b.glb"
	);

	return (
		<>
			<primitive object={d_table_a.scene} visible={codeOBJ['dTable'] === 0}/>
			<primitive object={d_table_b.scene} visible={codeOBJ['dTable'] === 1}/>
			<primitive object={d_sofa_a.scene} visible={codeOBJ['dSofa'] === 0}/>
			<primitive object={d_sofa_b.scene} visible={codeOBJ['dSofa'] === 1}/> 
			<primitive object={d_rug_a.scene} visible={codeOBJ['dRug'] === 0}/>
			<primitive object={d_rug_b.scene} visible={codeOBJ['dRug'] === 1}/>
			<primitive object={d_self_a.scene} visible={codeOBJ['dSelf'] === 0}/>
			<primitive object={d_self_b.scene} visible={codeOBJ['dSelf'] === 1}/>
			
		</>
	);

    
        
    
	{/* 
	
    const modelPaths = [
		"https://www.backend.visualizenbuild.com/static/d_table/d_table_a.glb",
		"https://www.backend.visualizenbuild.com/static/d_table/d_table_b.glb",
		"https://www.backend.visualizenbuild.com/static/d_sofa/d_sofa_a.glb",
		// "https://www.backend.visualizenbuild.com/static/d_sofa/d_sofa_b.glb",
		// "https://www.backend.visualizenbuild.com/static/d_rug/d_rug_a.glb",
		// "https://www.backend.visualizenbuild.com/static/d_rug/d_rug_b.glb",
		// "https://www.backend.visualizenbuild.com/static/d_self/d_self_a.glb",
		// "https://www.backend.visualizenbuild.com/static/d_self/d_self_b.glb",
        "./public/models/d_commom.glb"
	];
   
	const models = modelPaths.map((path) => useLoader(GLTFLoader, path));

	return (
		<>
			{models.map((model, index) => (
				<primitive key={index} object={model.scene} />
			))}
		</>
	);

		
	*/}
}
