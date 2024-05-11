import React, { useRef } from 'react'
import { BuildingGroup } from '../BuildingGroup';


export function Building(props) {
  const group = useRef();

  return (
    <group position={[0,0,0]} >
      <BuildingGroup/>
      
    </group>
  )
}

