import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Hall(props) {
  const { nodes, materials } = useGLTF('./models3/Hall.3.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[28.932, 2.084, -15.55]}>
        <mesh geometry={nodes.Material2183.geometry} material={materials.Pale_lancelot_oak_PBR} />
        <mesh geometry={nodes.Material2183_1.geometry} material={materials.material_12} />
      </group>
      <mesh geometry={nodes['H-Pic-4'].geometry} material={materials.Summer_Evening} position={[31.68, 3.507, -16.106]} />
      <mesh geometry={nodes['H-Pic-2'].geometry} material={materials.House_With_A_Yellow_Seat} position={[31.68, 4.948, -16.106]} />
      <mesh geometry={nodes['H-Pic-1'].geometry} material={materials['Mid_Century_-_Fallingwater-final']} position={[31.68, 4.948, -17.687]} />
      <mesh geometry={nodes['H-Pic-3'].geometry} material={materials['Mid_Century_-Paraty-House-Brazil']} position={[31.68, 3.507, -17.687]} />
      
      <group position={[29.116, 1.853, -15.543]}>
        <mesh geometry={nodes.Material2322.geometry} material={materials['Camel___Ivory_Rug__Labyrinth__-_Jonathan_Adler']} />
        <mesh geometry={nodes.Material2322_1.geometry} material={materials.Dense_Rattan} />
      </group>
      <group position={[28.382, 2.245, -16.802]}>
        <mesh geometry={nodes.Plane005.geometry} material={materials.Armchair} />
        <mesh geometry={nodes.Plane005_1.geometry} material={materials.Black} />
      </group>
      <group position={[28.388, 2.152, -16.808]} rotation={[0, -0.627, 0]}>
        <mesh geometry={nodes.Material2546.geometry} material={materials.Pale_lancelot_oak_PBR} />
        <mesh geometry={nodes.Material2546_1.geometry} material={materials.PDM_Leather_BandB_AC_Lounge_2} />
      </group>
      <group position={[28.291, 2.152, -14.384]} rotation={[0, -0.627, 0]}>
        <mesh geometry={nodes.Material2006.geometry} material={materials.Pale_lancelot_oak_PBR} />
        <mesh geometry={nodes.Material2006_1.geometry} material={materials.PDM_Leather_BandB_AC_Lounge_2} />
      </group>
      <group position={[29.75, 2.152, -14.49]} rotation={[0, -0.627, 0]}>
        <mesh geometry={nodes.Material2007.geometry} material={materials.Pale_lancelot_oak_PBR} />
        <mesh geometry={nodes.Material2007_1.geometry} material={materials.PDM_Leather_BandB_AC_Lounge_2} />
      </group>
      <group position={[29.529, 2.152, -16.808]} rotation={[0, -0.627, 0]}>
        <mesh geometry={nodes.Material2009.geometry} material={materials.Pale_lancelot_oak_PBR} />
        <mesh geometry={nodes.Material2009_1.geometry} material={materials.PDM_Leather_BandB_AC_Lounge_2} />
      </group>
      <group position={[28.34, 2.245, -14.423]}>
        <mesh geometry={nodes.Plane001.geometry} material={materials.Armchair} />
        <mesh geometry={nodes.Plane001_1.geometry} material={materials.Black} />
      </group>
      <group position={[29.781, 2.245, -14.446]}>
        <mesh geometry={nodes.Plane002.geometry} material={materials.Armchair} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.Black} />
      </group>
      <group position={[29.509, 2.245, -16.802]}>
        <mesh geometry={nodes.Plane003.geometry} material={materials.Armchair} />
        <mesh geometry={nodes.Plane003_1.geometry} material={materials.Black} />
      </group>
      <group position={[31.68, 3.509, -16.104]}>
        <mesh geometry={nodes.Material2026.geometry} material={materials.material} />
        <mesh geometry={nodes.Material2026_1.geometry} material={materials.Color_008} />
      </group>
      <group position={[31.68, 4.95, -16.104]}>
        <mesh geometry={nodes.Material2027.geometry} material={materials.material} />
        <mesh geometry={nodes.Material2027_1.geometry} material={materials.Color_008} />
      </group>
      <group position={[31.68, 4.95, -17.686]}>
        <mesh geometry={nodes.Material2031.geometry} material={materials.material} />
        <mesh geometry={nodes.Material2031_1.geometry} material={materials.Color_008} />
      </group>
      <group position={[31.68, 3.509, -17.686]}>
        <mesh geometry={nodes.Material2319.geometry} material={materials.material} />
        <mesh geometry={nodes.Material2319_1.geometry} material={materials.Color_008} />
      </group>
    </group>
  )
}

useGLTF.preload('./models3/Hall.3.gltf')
