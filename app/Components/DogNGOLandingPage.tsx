"use client"
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Puppy = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Loader>
        <primitive object={new GLTFLoader().load('/path/to/your/puppy-model.glb')} />
      </Loader>
    </Canvas>
  );
};

export default Puppy;