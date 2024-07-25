import React from 'react';
import { useLoader } from "@react-three/fiber";
import { useCustomization } from "../../../constants/Customization";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Kitchen(props) {
    const { codeOBJ } = useCustomization();

    const modelPaths = {
        k_lamp: [
            'https://www.backend.visualizenbuild.com/static/k_lamp/k_lamp_a.glb',
            'https://www.backend.visualizenbuild.com/static/k_lamp/k_lamp_b.glb',
            'https://www.backend.visualizenbuild.com/static/k_lamp/k_lamp_c.glb',
        ],
        k_tap: [
            'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_a.glb',
            'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_b.glb',
            'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_c.glb',
            'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_d.glb',
            'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_e.glb',
            'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_f.glb',
            'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_g.glb',
        ],
        k_chair: [
            'https://www.backend.visualizenbuild.com/static/k_chair/k_chair_a.glb',
            'https://www.backend.visualizenbuild.com/static/k_chair/k_chair_b.glb',
        ],
        k_common: './public/models/k_common.glb',
    };

    const k_common = useLoader(GLTFLoader, modelPaths.k_common);

    const loadedModels = {
        k_lamp: modelPaths.k_lamp.map(path => useLoader(GLTFLoader, path)),
        k_tap: modelPaths.k_tap.map(path => useLoader(GLTFLoader, path)),
        k_chair: modelPaths.k_chair.map(path => useLoader(GLTFLoader, path)),
    };

    const isVisible = (type, index) => codeOBJ[`kt${type.charAt(0).toUpperCase() + type.slice(1)}`] === index;

    return (
        <>
            <primitive object={k_common.scene} visible={true} />

            {loadedModels.k_lamp.map((model, index) => (
                <primitive key={`k_lamp_${index}`} object={model.scene} visible={isVisible('lamp', index)} />
            ))}

            {loadedModels.k_tap.map((model, index) => (
                <primitive key={`k_tap_${index}`} object={model.scene} visible={isVisible('tap', index)} />
            ))}

            {loadedModels.k_chair.map((model, index) => (
                <primitive key={`k_chair_${index}`} object={model.scene} visible={isVisible('chair', index)} />
            ))}
        </>
    );
}





// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// Command: npx gltfjsx@6.2.16 .\public\models3\Dinning_part2.gltf 
// */

// import React, { useRef } from 'react'
// import { useLoader  } from "@react-three/fiber";
// import { useCustomization } from "../../../constants/Customization";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// export function Kitchen(props) {
// 	const { codeOBJ, loc, setLoc } = useCustomization();
//   // const k_chair_b = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_table/k_table_b.glb')
  
//   const k_lamp_a = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_lamp/k_lamp_a.glb')
//   const k_lamp_b = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_lamp/k_lamp_b.glb')
//   const k_lamp_c = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_lamp/k_lamp_c.glb')
  
//   const k_tap_a = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_a.glb')
//   const k_tap_b = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_b.glb')
//   const k_tap_c = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_c.glb')
//   const k_tap_d = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_d.glb')
//   const k_tap_e = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_e.glb')
//   const k_tap_f = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_f.glb')
//   const k_tap_g = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_tap/k_tap_g.glb')

//   const k_chair_a = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_chair/k_chair_a.glb')
//   const k_chair_b = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/k_chair/k_chair_b.glb')
  
//   const k_common = useLoader(GLTFLoader, './public/models/k_common.glb')
  
//   console.log(codeOBJ, "!!! codeOBJ  ", codeOBJ["ktTaps"] === 3);

//   return (
//     <>
//       <primitive object={k_common.scene} visible={true}/>
      
//       <primitive object={k_lamp_a.scene} visible={codeOBJ['ktLamp']==0}/>
//       <primitive object={k_lamp_b.scene} visible={codeOBJ['ktLamp']==1}/>
//       <primitive object={k_lamp_c.scene} visible={codeOBJ['ktLamp']==2}/>

//       <primitive object={k_tap_a.scene} visible={codeOBJ['ktTap']==0}/>
//       <primitive object={k_tap_b.scene} visible={codeOBJ['ktTap']==1}/>
//       <primitive object={k_tap_c.scene} visible={codeOBJ['ktTap']==2}/>
//       <primitive object={k_tap_d.scene} visible={codeOBJ['ktTap']==3}/>
//       <primitive object={k_tap_e.scene} visible={codeOBJ['ktTap']==4}/>
//       <primitive object={k_tap_f.scene} visible={codeOBJ['ktTap']==5}/>
//       <primitive object={k_tap_g.scene} visible={codeOBJ['ktTap']==6}/>
      
//       <primitive object={k_chair_a.scene} visible={codeOBJ['ktChair']==0}/>
//       <primitive object={k_chair_b.scene} visible={codeOBJ['ktChair']==1}/>
//     </>
//   )
// }


