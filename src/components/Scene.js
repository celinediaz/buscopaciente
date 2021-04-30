import React from "react";
import { Canvas } from "react-three-fiber";
import {MeshDistortMaterial, MeshWobbleMaterial, Ring, Text } from '@react-three/drei'

const Scene = ({texto}) => {
    return (
      <Canvas>
      <ambientLight intensity={0.7} />
      <spotLight position={[5, 10, 10]} angle={0.15} penumbra={0.8} />
      <pointLight position={[5, -5, -10]} />
      <Ring visible position={[0, 0, 0]} args={[2, 3, 150]}>
        <MeshWobbleMaterial
          color="#037AFB"
          attach="material"
          factor={0.3}
          speed={0.2}
          roughness={0}
        />
        <MeshDistortMaterial
          color="#037AFB"
          attach="material"
          distort={0.2} 
          speed={10} 
        />
      </Ring>
      <Text fontSize={1} font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            outlineOffsetX={'10%'}
            outlineOffsetY={'10%'}
            outlineBlur={'30%'}
            outlineOpacity={0.3}
            outlineColor="#000000">
        {texto}
        <meshStandardMaterial attach="material" color="#037AFB" />
      </Text>
    </Canvas>
    );
  }
  


export default Scene
