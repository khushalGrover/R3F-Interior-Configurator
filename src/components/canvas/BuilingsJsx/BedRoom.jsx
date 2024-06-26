import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCustomization } from "../../../constants/Customization";

export function BedRoom(props) {
  const { nodes, materials } = useGLTF('./models3/BedRoom.gltf')
	const { codeOBJ, loc, setLoc } = useCustomization();

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Retopo_Material2219.geometry} material={materials.material} position={[16.386, 5.195, -10.922]} />
      <mesh geometry={nodes.Retopo_Material2213.geometry} material={materials.Plain_Natural_Blackout} position={[16.543, 5.402, -12.055]} />
      <mesh geometry={nodes.Material2214.geometry} material={materials.material} position={[16.633, 5.251, -11.139]} />
      <mesh geometry={nodes.Material2215.geometry} material={materials.material_47} position={[16.551, 5.76, -11.132]} />
      <mesh geometry={nodes.Material2220.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[16.542, 6.858, -11.12]} />
      <mesh geometry={nodes.Material2223.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[16.542, 6.857, -11.12]} />
      <mesh geometry={nodes.Material2265.geometry} material={materials['Camel___Ivory_Rug__Labyrinth__-_Jonathan_Adler']} position={[16.547, 4.788, -10.736]} />
      <mesh geometry={nodes.Material2269.geometry} material={materials.Dense_Rattan} position={[16.547, 4.784, -10.736]} />
      <mesh geometry={nodes.Material2205.geometry} material={materials.material_47} position={[15.947, 5.195, -12.606]} />
      <mesh geometry={nodes.Material2210.geometry} material={materials.Color_008} position={[15.966, 5.034, -12.738]} />
      <mesh geometry={nodes.Material2221.geometry} material={materials.material} position={[16.542, 6.855, -11.12]} />
      <mesh geometry={nodes.Material2403.geometry} material={materials.material_12} position={[16.538, 6.037, -12.273]} />
      <mesh geometry={nodes.Material2405.geometry} material={materials.Color_008} position={[16.5, 5.989, -12.362]} />
      <mesh geometry={nodes.Material2417.geometry} material={materials.Pale_lancelot_oak_PBR} position={[16.606, 8.006, -12.321]} />
      <mesh geometry={nodes.Material2419.geometry} material={materials.Pale_lancelot_oak_PBR} position={[16.881, 5.994, -14.121]} />
      <mesh geometry={nodes.Material2420.geometry} material={materials.material_12} position={[17.052, 6.584, -14.256]} />
    </group>
  )
}

useGLTF.preload('./models3/BedRoom.gltf')
