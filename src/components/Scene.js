import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import image from "./logo.jpeg";

const Scene = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
  
    // Set up state for the hovered and active state 
    const [active, setActive] = useState(false);
  
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });
    
    const texture = useMemo(() => new THREE.TextureLoader().load(image), []);
    
    return (
      <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
      onClick={(e) => setActive(!active)}
        >
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial attach="material" side={THREE.DoubleSide}>
          <primitive attach="map" object={texture} />
        </meshBasicMaterial>
      </mesh>
    );
  }
  


export default Scene
