import React, { useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { useCustomization } from '../../../constants/Customization';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Dinning(props) {
  const { codeOBJ, loc, setLoc } = useCustomization();

  const dn_table_a = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/dn_table/dn_table_a.glb');
  const dn_clock_a = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/dn_clock/dn_clock_a.glb');
  const dn_chair_a = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/dn_table/dn_chair_a.glb'); // todo change to object to chair
  const dn_lamp_a = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/dn_lamp/dn_lamp_a.glb');
  const dn_lamp_b = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/dn_lamp/dn_lamp_b.glb');
  const dn_lamp_c = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/dn_lamp/dn_lamp_c.glb');
  const dn_lamp_d = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/dn_lamp/dn_lamp_d.glb');
  const dn_lamp_e = useLoader(GLTFLoader, 'https://www.backend.visualizenbuild.com/static/dn_lamp/dn_lamp_e.glb');

 

  return (
    <>
      <primitive object={dn_table_a.scene} visible={codeOBJ['dnTable'] === 1} />
      <primitive object={dn_clock_a.scene} visible={codeOBJ['dnClock'] === 0} />
      <primitive object={dn_chair_a.scene} visible={codeOBJ['dnChair'] === 1} />
      <primitive object={dn_lamp_a.scene} visible={codeOBJ['dnLamp'] === 0} />
      <primitive object={dn_lamp_b.scene} visible={codeOBJ['dnLamp'] === 1} />
      <primitive object={dn_lamp_c.scene} visible={codeOBJ['dnLamp'] === 2} />
      <primitive object={dn_lamp_d.scene} visible={codeOBJ['dnLamp'] === 3} />
      <primitive object={dn_lamp_e.scene} visible={codeOBJ['dnLamp'] === 4} />
    </>
  );
}
