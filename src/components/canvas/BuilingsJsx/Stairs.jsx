/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models3\Stairs.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Stairs(props) {
  const { nodes, materials } = useGLTF('./models3//Stairs.gltf')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Material3002.geometry} material={materials.material_3_3} position={[25.453, 3.297, -15.601]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
      <group position={[25.267, 3.974, -15.74]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>
        <mesh geometry={nodes.Material2335.geometry} material={materials.Oak_2} />
        <mesh geometry={nodes.Material2335_1.geometry} material={materials.material_12} />
      </group>
      <mesh geometry={nodes.Material3004.geometry} material={materials.material_3} position={[24.863, 4.005, -15.638]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
      <mesh geometry={nodes.Material2080.geometry} material={materials.Oak_2} position={[24.385, 5.305, -16.855]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
      <mesh geometry={nodes.Material3005.geometry} material={materials['Wood-cherry']} position={[24.376, 5.305, -14.995]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
      <group position={[20.787, 4.704, -13.926]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>
        <mesh geometry={nodes.Material2357.geometry} material={materials.Color_F19} />
        <mesh geometry={nodes.Material2357_1.geometry} material={materials.material} />
        <mesh geometry={nodes.Material2357_2.geometry} material={materials.Grass} />
      </group>
      <mesh geometry={nodes.Material2102.geometry} material={materials.material} position={[23.309, 4.511, -14.613]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
    </group>
  )
}

useGLTF.preload('./models3//Stairs.gltf')
