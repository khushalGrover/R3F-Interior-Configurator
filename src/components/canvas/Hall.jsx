/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models3\Hall.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Hall(props) {
  const { nodes, materials } = useGLTF('./models3/Hall.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[28.932, 2.084, -15.55]}>
        <mesh geometry={nodes.Material2183.geometry} material={materials.Pale_lancelot_oak_PBR} />
        <mesh geometry={nodes.Material2183_1.geometry} material={materials.material_12} />
      </group>
      <mesh geometry={nodes['H-Pic-4'].geometry} material={materials.Summer_Evening} position={[31.7, 3.507, -16.106]} />
      <mesh geometry={nodes['H-Pic-2'].geometry} material={materials.House_With_A_Yellow_Seat} position={[31.7, 4.948, -16.106]} />
      <mesh geometry={nodes['H-Pic-1'].geometry} material={materials['Mid_Century_-_Fallingwater-final']} position={[31.7, 4.948, -17.687]} />
      <mesh geometry={nodes['H-Pic-3'].geometry} material={materials['Mid_Century_-Paraty-House-Brazil']} position={[31.7, 3.507, -17.687]} />
      <group position={[31.698, 4.255, -16.923]}>
        <mesh geometry={nodes.Material2319.geometry} material={materials.material} />
        <mesh geometry={nodes.Material2319_1.geometry} material={materials.Color_008} />
      </group>
      <group position={[29.116, 1.853, -15.543]}>
        <mesh geometry={nodes.Material2322.geometry} material={materials['Camel___Ivory_Rug__Labyrinth__-_Jonathan_Adler']} />
        <mesh geometry={nodes.Material2322_1.geometry} material={materials.Dense_Rattan} />
      </group>
      <group position={[22.899, 2.696, -13.442]}>
        <mesh geometry={nodes.Material2210.geometry} material={materials.auto} />
        <mesh geometry={nodes.Material2210_1.geometry} material={materials.blad1} />
        <mesh geometry={nodes.Material2210_2.geometry} material={materials.blad2} />
        <mesh geometry={nodes.Material2210_3.geometry} material={materials.zand1} />
      </group>
      <group position={[29.003, 2.245, -15.618]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials.Armchair} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.Black} />
      </group>
      <group position={[29.76, 1.946, -14.397]} rotation={[0, -0.627, 0]}>
        <mesh geometry={nodes.Material2546.geometry} material={materials.Pale_lancelot_oak_PBR} />
        <mesh geometry={nodes.Material2546_1.geometry} material={materials.PDM_Leather_BandB_AC_Lounge_2} />
      </group>
    </group>
  )
}

useGLTF.preload('./models3/Hall.gltf')
