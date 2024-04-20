





// not using ANY WHERE








import { OrbitControls } from "@react-three/drei";
import { useTexture } from "@react-three/drei"
export const Experience = ({arg }) => {

  // const props = useTexture({
  //   map: 'PavingStones092_1K_Color.jpg',
  //   displacementMap: 'PavingStones092_1K_Displacement.jpg',
  //   normalMap: 'PavingStones092_1K_Normal.jpg',
  //   roughnessMap: 'PavingStones092_1K_Roughness.jpg',
  //   aoMap: 'PavingStones092_1K_AmbientOcclusion.jpg',
  // })
  let textureMap = arg ? `${arg}.jpg` : '1.jpg';

  const props = useTexture({
    map: textureMap,  
  })
  return (
    <>
      {/* <OrbitControls />
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial {...props}/>
      </mesh> */}
    </>
  );
};
