import { useGLTF } from '@react-three/drei'

export function BuildingGroup(props) {
  const { nodes, materials } = useGLTF('./models3/Building.gltf')
  return (
    <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>
          <mesh geometry={nodes.Material2157.geometry} material={materials.FREIXO_PAINEL} position={[1329.25, 718.904, 347.375]} />
        </group>
        <mesh geometry={nodes.Material2001.geometry} material={materials.Concrete_and_Wood} position={[19.281, 6.11, -14.654]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2011.geometry} material={materials.material} position={[18.786, 6.317, -14.681]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2012.geometry} material={materials.material} position={[16.773, 6.949, -15.162]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2013.geometry} material={materials.material} position={[20.618, 5.274, -17.989]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2020.geometry} material={materials.Porphyritic_Granite_stack_dvas52} position={[17.107, 3.639, -14.617]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2022.geometry} material={materials['40_black_portoro_gold_pbr_texture-seamless']} position={[14.682, 5.635, -14.565]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2047.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[13.726, 6.127, -10.98]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2048.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[21.827, 6.028, -22.055]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2049.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[18.471, 5.849, -19.467]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2050.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[13.931, 3.962, -19.19]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2051.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[15.647, 5.233, -17.924]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2052.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[15.724, 5.068, -15.774]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2053.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[16.376, 5.981, -22.421]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2054.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[15.842, 5.325, -21.576]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2064.geometry} material={materials['16_Terrazzo_surface_PBR_texture-seamless']} position={[21.992, 2.844, -15.929]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2065.geometry} material={materials.Color_008} position={[22.738, 5.415, -15.642]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2068.geometry} material={materials.Color_008} position={[21.342, 5.285, -17.105]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2070.geometry} material={materials.Color_008} position={[16.07, 3.588, -19.359]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2071.geometry} material={materials.Color_008} position={[16.919, 4.36, -17.753]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2072.geometry} material={materials.Vegetation_Bark_Maple2} position={[31.807, 1.993, -16.226]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2073.geometry} material={materials.material_6} position={[31.605, 1.998, -16.221]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2081.geometry} material={materials.shadow} position={[24.311, 2.31, -9.806]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2083.geometry} material={materials['24_pool_water_texture_seamless']} position={[24.812, 1.774, -15.863]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2084.geometry} material={materials.Color_F19} position={[13.11, 4.813, -18.202]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2085.geometry} material={materials.Color_F19} position={[14.79, 3.872, -21.774]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2086.geometry} material={materials.Color_F19} position={[15.771, 4.971, -17.824]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2087.geometry} material={materials.Color_F19} position={[6.357, 5.028, -17.271]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2091.geometry} material={materials.Color_F19} position={[14.704, 3.773, -22.392]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2093.geometry} material={materials.Color_F19} position={[13.527, 2.949, -12.339]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2094.geometry} material={materials.Color_F19} position={[16.996, 6.745, -12.528]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2098.geometry} material={materials.Color_F19} position={[14.657, 3.757, -22.397]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2099.geometry} material={materials.Color_F19} position={[14.649, 3.688, -22.347]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2104.geometry} material={materials.Water_Deep} position={[24.214, 1.603, -7.099]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2108.geometry} material={materials['31_brushed_copper_metal_texture-seamless']} position={[16.095, 7.491, -16.058]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2109.geometry} material={materials['31_brushed_copper_metal_texture-seamless']} position={[16.392, 7.46, -13.234]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2111.geometry} material={materials['31_brushed_copper_metal_texture-seamless']} position={[16.891, 6.187, -16.227]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2112.geometry} material={materials['31_brushed_copper_metal_texture-seamless']} position={[16.006, 7.229, -16.11]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2113.geometry} material={materials['31_brushed_copper_metal_texture-seamless']} position={[16.226, 7.469, -15.371]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2122.geometry} material={materials['26_old_dirty_copper_metal_texture-seamless']} position={[20.064, 5.422, -16.838]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2123.geometry} material={materials.Color_M07} position={[17.778, 4.84, -17.132]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2125.geometry} material={materials.Color_M07} position={[19.966, 5.523, -14.789]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2126.geometry} material={materials.Color_M07} position={[19.73, 5.52, -14.989]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2127.geometry} material={materials.Color_M07} position={[18.445, 5.575, -16.506]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2128.geometry} material={materials.Color_M07} position={[16.501, 4.074, -18.714]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2129.geometry} material={materials.Color_M07} position={[15.742, 3.336, -20.28]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2130.geometry} material={materials.Color_M07} position={[17.424, 4.673, -17.783]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2131.geometry} material={materials.Color_M07} position={[18.068, 4.339, -17.204]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2132.geometry} material={materials.Color_M07} position={[17.621, 3.832, -17.255]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2137.geometry} material={materials.material_47} position={[19.753, 5.257, -16.279]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2141.geometry} material={materials.material_47} position={[16.633, 5.504, -15.553]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2143.geometry} material={materials.Mirror_01} position={[16.077, 5.644, -18.66]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2144.geometry} material={materials.BLACK_TEXTURE_CERAMIC_SHEEN} position={[14.091, 3.221, -19.999]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <group position={[17.433, 4.973, -14.945]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>
          <mesh geometry={nodes.Material2153_1.geometry} material={materials.Charred_Timber_11} />
          <mesh geometry={nodes.Material2153_2.geometry} material={materials.Translucent_Glass_Gray} />
        </group>
        <mesh geometry={nodes.Material2154.geometry} material={materials.Slate_staggered_yovds6} position={[22.442, 7.748, -15.817]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2155.geometry} material={materials.Stacy_Shirt} position={[20.243, 5.352, -15.542]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2206.geometry} material={materials.material} position={[13.924, 4.83, -21.244]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2216.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[16.536, 5.972, -11.147]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2218.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[16.853, 5.977, -10.77]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2220.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[16.542, 6.858, -11.12]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material3.geometry} material={materials['Seamless_stucco_plaster_-black_0']} position={[20.099, 5.459, -22.312]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material3001.geometry} material={materials.Fluted_Granite__Stack_1} position={[26.416, 5.698, -17.107]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material3006.geometry} material={materials.Fan_Palm_leaf} position={[25.77, 2.202, -16.045]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material3007.geometry} material={materials.brushed_aluminium_8} position={[14.24, 2.285, -20.241]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material3008.geometry} material={materials.material_5_9} position={[32.115, 1.984, -16.286]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material3013.geometry} material={materials.Pale_lancelot_oak_PBR_12} position={[16.702, 7.853, -14.403]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material3014.geometry} material={materials.Polished_Concrete_Old_13} position={[20.831, 4.955, -15.686]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2007.geometry} material={materials.material} position={[15.339, 4.306, -19.161]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2005.geometry} material={materials.material} position={[15.959, 4.228, -16.593]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2006.geometry} material={materials.material} position={[15.104, 2.67, -22.157]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2009.geometry} material={materials.material} position={[21.632, 2.997, -21.539]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2110.geometry} material={materials['31_brushed_copper_metal_texture-seamless']} position={[17.031, 5.857, -16.423]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2059.geometry} material={materials.material_12} position={[15.366, 4.398, -16.964]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2202.geometry} material={materials['26_old_dirty_copper_metal_texture-seamless']} position={[18.789, 4.415, -15.811]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2027.geometry} material={materials.Translucent_Glass_Gray} position={[15.882, 3.045, -19.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2031.geometry} material={materials.material} position={[17.728, 1.542, -16.291]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2037.geometry} material={materials.Polished_Concrete_Old} position={[25.483, 1.821, -15.491]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2039.geometry} material={materials['40_black_portoro_gold_pbr_texture-seamless']} position={[32.009, 2.065, -13.404]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2040.geometry} material={materials.Color_008} position={[32, 2.234, -13.488]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2041.geometry} material={materials.Color_008} position={[31.973, 2.202, -13.811]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2120.geometry} material={materials['31_brushed_copper_metal_texture-seamless_6']} position={[20.831, 4.788, -15.686]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2045.geometry} material={materials.Fluted_Granite__Stack} position={[13.808, 4.455, -14.522]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2058.geometry} material={materials.material_12} position={[14.471, 3.999, -18.306]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2115.geometry} material={materials.Charred_Timber} position={[13.608, 3.056, -18.36]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2117.geometry} material={materials.Color_F19} position={[13.567, 2.58, -12.386]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2223.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[16.542, 6.857, -11.12]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2225.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[13.726, 6.127, -10.534]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2245.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[13.726, 6.127, -11.426]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2246.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[14.37, 6.127, -8.851]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2036.geometry} material={materials.Translucent_Glass_Gray} position={[19.323, 6.09, -10.549]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2248.geometry} material={materials.Pale_lancelot_oak_PBR} position={[15.885, 3.025, -19.025]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2251.geometry} material={materials.Color_F19} position={[14.669, 3.703, -22.369]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2252.geometry} material={materials.Color_F19} position={[17.081, 6.597, -12.398]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2253.geometry} material={materials.Color_F19} position={[24.131, 2.083, -15.88]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2256.geometry} material={materials.Color_F19} position={[17.053, 6.679, -12.39]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2250.geometry} material={materials.material} position={[14.57, 3.111, -20.817]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2264.geometry} material={materials['Camel___Ivory_Rug__Labyrinth__-_Jonathan_Adler']} position={[20.832, 1.837, -15.971]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2265.geometry} material={materials['Camel___Ivory_Rug__Labyrinth__-_Jonathan_Adler']} position={[16.547, 4.788, -10.736]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2269.geometry} material={materials.Dense_Rattan} position={[16.547, 4.784, -10.736]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2286.geometry} material={materials.Color_008} position={[21.623, 4.987, -13.145]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2283.geometry} material={materials.Color_008} position={[8.704, 3.29, -17.644]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2285.geometry} material={materials.material} position={[13.555, 2.478, -12.391]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2291.geometry} material={materials.Dense_Rattan} position={[20.832, 1.834, -15.971]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2300.geometry} material={materials['16_Terrazzo_surface_PBR_texture-seamless']} position={[21.13, 4.496, -15.475]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2370.geometry} material={materials.Grass} position={[6.596, 0.999, -15.652]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <group position={[31.931, 8.639, -14.279]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>
          <mesh geometry={nodes.Material2413_1.geometry} material={materials.Color_008} />
          <mesh geometry={nodes.Material2413_2.geometry} material={materials.Fluted_Granite__Stack} />
          <mesh geometry={nodes.Material2413_3.geometry} material={materials.material} />
        </group>
        <mesh geometry={nodes.Material2372.geometry} material={materials.Color_M07} position={[26.998, 7.435, -18.61]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2023.geometry} material={materials['Seamless_stucco_plaster_-black']} position={[26.085, 5.822, -17.436]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2021.geometry} material={materials.Fluted_Granite__Stack} position={[25.712, 5.62, -17.153]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2015.geometry} material={materials.material} position={[24.192, 4.795, -16.175]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2035.geometry} material={materials.Translucent_Glass_Gray} position={[25.202, 8.329, -15.907]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2067.geometry} material={materials.Color_008} position={[22.123, 6.148, -15.244]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2018.geometry} material={materials.Pale_lancelot_oak_PBR} position={[17.876, 6.698, -15.317]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2017.geometry} material={materials.Pale_lancelot_oak_PBR} position={[17.586, 4.936, -16.688]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2060.geometry} material={materials.material_12} position={[15.795, 4.474, -17.675]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2077.geometry} material={materials['148_dark_parquet_flooring_texture-seamless']} position={[18.993, 3.329, -16.139]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2078.geometry} material={materials.Granite_Stack_431} position={[21.286, 3.55, -14.594]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2016.geometry} material={materials.material} position={[17.549, 5.021, -16.657]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2075.geometry} material={materials.Polished_Concrete_Old} position={[19.588, 5.053, -16.578]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2024.geometry} material={materials.sehpa_mermer__marble} position={[22.119, 3.451, -16.512]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2063.geometry} material={materials.material_77} position={[27.722, 5.116, -15.755]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2019.geometry} material={materials.Pale_lancelot_oak_PBR} position={[20.446, 6.432, -15.166]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material3018.geometry} material={materials.Pale_lancelot_oak_PBR_10} position={[28.179, 3.022, -15.942]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <group position={[27.505, 3.024, -15.451]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>
          <mesh geometry={nodes.Material2421.geometry} material={materials.Color_M07} />
          <mesh geometry={nodes.Material2421_1.geometry} material={materials.Pale_lancelot_oak_PBR_10} />
        </group>
        <mesh geometry={nodes.Material3012.geometry} material={materials.Pale_lancelot_oak_PBR_10} position={[29.763, 3.164, -17.428]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2311.geometry} material={materials.Translucent_Glass_Gray} position={[18.4, 5.297, -19.853]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <group position={[27.505, 3.024, -15.451]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021}>
          <mesh geometry={nodes.Material2423.geometry} material={materials.Color_M07} />
          <mesh geometry={nodes.Material2423_1.geometry} material={materials.Pale_lancelot_oak_PBR_10} />
        </group>
        <mesh geometry={nodes.Material2076.geometry} material={materials.Weathered_Timber_Staggered} position={[26.809, 1.712, -8.571]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2201.geometry} material={materials.Charred_Timber} position={[27.878, 4.492, -12.361]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2224.geometry} material={materials.Charred_Timber} position={[13.567, 4.487, -20.425]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2158.geometry} material={materials.FREIXO_PAINEL_14} position={[20.874, 7.263, -15.845]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2010.geometry} material={materials.material} position={[16.565, 5.047, -18.949]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2026.geometry} material={materials.brushed_aluminium} position={[29.033, 1.673, -8.693]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2103.geometry} material={materials.E27_3D_Emissive_White1} position={[16.82, 4.004, -15.47]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <group position={[15.659, 4.936, -19.29]} rotation={[-Math.PI / 2, 0, -0.982]} scale={0.021}>
          <mesh geometry={nodes.Material2435.geometry} material={materials.Pale_lancelot_oak_PBR} />
          <mesh geometry={nodes.Material2435_1.geometry} material={materials.Color_M07} />
          <mesh geometry={nodes.Material2435_2.geometry} material={materials.Translucent_Glass_Gray} />
          <mesh geometry={nodes.Material2435_3.geometry} material={materials['26_old_dirty_copper_metal_texture-seamless']} />
        </group>
        <mesh geometry={nodes.Material2156.geometry} material={materials.Color_M07} position={[17.778, 4.84, -17.132]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <group position={[19.143, 5.724, -21.995]} rotation={[-Math.PI / 2, 0, 2.752]} scale={0.021}>
          <mesh geometry={nodes.Material2451.geometry} material={materials.Pale_lancelot_oak_PBR} />
          <mesh geometry={nodes.Material2451_1.geometry} material={materials.Color_M07} />
          <mesh geometry={nodes.Material2451_2.geometry} material={materials.Translucent_Glass_Gray} />
          <mesh geometry={nodes.Material2451_3.geometry} material={materials['26_old_dirty_copper_metal_texture-seamless']} />
        </group>
        <mesh geometry={nodes.Material2378.geometry} material={materials['148_dark_parquet_flooring_texture-seamless']} position={[17.33, 4.496, -19.316]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2055.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[18.229, 6.084, -12.438]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2138.geometry} material={materials.material_47} position={[19.895, 5.744, -15.449]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2232.geometry} material={materials.Plain_Natural_Blackout_Sheer} position={[15.815, 4.867, -19.171]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2409.geometry} material={materials['40_black_portoro_gold_pbr_texture-seamless']} position={[15.617, 4.248, -14.651]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2410.geometry} material={materials.material} position={[18.786, 6.317, -14.681]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
        <mesh geometry={nodes.Material2388.geometry} material={materials['31_brushed_copper_metal_texture-seamless']} position={[17.8, 5.47, -14.585]} rotation={[-Math.PI / 2, 0, 0]} scale={0.021} />
      </group>
  );
}

useGLTF.preload('./models/Building.gltf');