/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models3\kitchen_2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/kitchen_2.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[20.48, 2.695, -21.879]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>
        <mesh geometry={nodes.Material2357.geometry} material={materials['16_Terrazzo_surface_PBR_texture-seamless.001']} />
        <mesh geometry={nodes.Material2357_1.geometry} material={materials['material.001']} />
        <mesh geometry={nodes.Material2357_2.geometry} material={materials['Translucent_Glass_Gray.001']} />
        <mesh geometry={nodes.Material2357_3.geometry} material={materials['23_brushed_dark_steel_metal.001']} />
        <mesh geometry={nodes.Material2357_4.geometry} material={materials['31_brushed_copper_metal_texture-seamless.001']} />
        <mesh geometry={nodes.Material2357_5.geometry} material={materials['brushed_aluminium.001']} />
        <mesh geometry={nodes.Material2357_6.geometry} material={materials['31_brushed_copper_metal_texture-seamless_6.001']} />
        <mesh geometry={nodes.Material2357_7.geometry} material={materials['sehpa_mermer__marble.001']} />
        <mesh geometry={nodes.Material2357_8.geometry} material={materials['material_12.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/kitchen_2.gltf')
