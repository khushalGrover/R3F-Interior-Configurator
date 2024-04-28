/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models3\Dinning_part2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Dinning(props) {
  const { nodes, materials } = useGLTF('./models3/Dinning_part2.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[16.947, 1.835, -21.103]}>
        <mesh geometry={nodes.Material2267.geometry} material={materials.Dense_Rattan} />
        <mesh geometry={nodes.Material2267_1.geometry} material={materials['Camel___Ivory_Rug__Labyrinth__-_Jonathan_Adler']} />
      </group>
      <group position={[17.044, 2.29, -21.658]}>
        <mesh geometry={nodes.Material2279.geometry} material={materials.material_12} />
        <mesh geometry={nodes.Material2279_1.geometry} material={materials['Texture_2.jpeg']} />
        <mesh geometry={nodes.Material2279_2.geometry} material={materials['31_brushed_copper_metal_texture-seamless_6']} />
        <mesh geometry={nodes.Material2279_3.geometry} material={materials.Polished_Concrete_Old} />
      </group>
      <group position={[15.764, 3.295, -21.151]}>
        <mesh geometry={nodes.Material2114.geometry} material={materials.brushed_aluminium} />
        <mesh geometry={nodes.Material2114_1.geometry} material={materials.WALL_CLOCK} />
        <mesh geometry={nodes.Material2114_2.geometry} material={materials.material_12} />
        <mesh geometry={nodes.Material2114_3.geometry} material={materials['23_brushed_dark_steel_metal']} />
      </group>
      <group position={[17, 2.179, -21.083]} rotation={[Math.PI, -1.312, Math.PI]}>
        <mesh geometry={nodes.mesh050.geometry} material={materials['23_brushed_dark_steel_metal']} />
        <mesh geometry={nodes.mesh050_1.geometry} material={materials['31_brushed_copper_metal_texture-seamless']} />
        <mesh geometry={nodes.mesh050_2.geometry} material={materials.material_12} />
        <mesh geometry={nodes.mesh050_3.geometry} material={materials.PDM_Leather_BandB_AC_Lounge_2} />
      </group>
      <group position={[16.928, 3.619, -21.346]}>
        <mesh geometry={nodes.Material2521.geometry} material={materials.Translucent_Glass_Gray} />
        <mesh geometry={nodes.Material2521_1.geometry} material={materials['26_old_dirty_copper_metal_texture-seamless']} />
        <mesh geometry={nodes.Material2521_2.geometry} material={materials.Color_M07} />
      </group>
      <group position={[16.93, 3.659, -21.347]}>
        <mesh geometry={nodes.Circle003.geometry} material={materials['Car plastic dark']} />
        <mesh geometry={nodes.Circle003_1.geometry} material={materials['filament_Light ']} />
        <mesh geometry={nodes.Circle003_2.geometry} material={materials['metal.002']} />
        <mesh geometry={nodes.Circle003_3.geometry} material={materials.Steel} />
        <mesh geometry={nodes.Circle003_4.geometry} material={materials.Glass} />
      </group>
      <group position={[16.93, 3.663, -21.332]}>
        <mesh geometry={nodes.Mesh157.geometry} material={materials['tepa.001']} />
        <mesh geometry={nodes.Mesh157_1.geometry} material={materials['xlor up.001']} />
        <mesh geometry={nodes.Mesh157_2.geometry} material={materials['lampa.001']} />
        <mesh geometry={nodes.Mesh157_3.geometry} material={materials['xrom.001']} />
        <mesh geometry={nodes.Mesh157_4.geometry} material={materials['Material #29.001']} />
        <mesh geometry={nodes.Mesh157_5.geometry} material={materials['Material #30.001']} />
        <mesh geometry={nodes.Mesh157_6.geometry} material={materials['simi.001']} />
        <mesh geometry={nodes.Mesh157_7.geometry} material={materials['01 wood.001']} />
        <mesh geometry={nodes.Mesh157_8.geometry} material={materials['01.001']} />
        <mesh geometry={nodes.Mesh157_9.geometry} material={materials['02 wood.001']} />
        <mesh geometry={nodes.Mesh157_10.geometry} material={materials['02.001']} />
        <mesh geometry={nodes.Mesh157_11.geometry} material={materials['03 wood.001']} />
        <mesh geometry={nodes.Mesh157_12.geometry} material={materials['03.001']} />
      </group>
      <group position={[16.913, 3.824, -21.338]}>
        <mesh geometry={nodes.Mesh170.geometry} material={materials['03']} />
        <mesh geometry={nodes.Mesh170_1.geometry} material={materials.simi} />
        <mesh geometry={nodes.Mesh170_2.geometry} material={materials['lampa.001']} />
        <mesh geometry={nodes.Mesh170_3.geometry} material={materials.tepa} />
        <mesh geometry={nodes.Mesh170_4.geometry} material={materials['03 wood']} />
      </group>
      <group position={[16.921, 3.826, -21.334]}>
        <mesh geometry={nodes.Mesh171.geometry} material={materials['03']} />
        <mesh geometry={nodes.Mesh171_1.geometry} material={materials.simi} />
        <mesh geometry={nodes.Mesh171_2.geometry} material={materials.lampa} />
        <mesh geometry={nodes.Mesh171_3.geometry} material={materials.tepa} />
      </group>
    </group>
  )
}

useGLTF.preload('./models3/Dinning_part2.gltf')
