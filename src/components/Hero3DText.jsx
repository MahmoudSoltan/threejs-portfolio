// src/components/Hero3DText.jsx
import React, { useRef } from 'react';
import { Text3D, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Hero3DText() {
  const textRef = useRef();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Center>
      <Text3D
        ref={textRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={1}
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Mahmoud Soltan
        <meshStandardMaterial color="#00d4ff" metalness={0.4} roughness={0.1} />
      </Text3D>
    </Center>
  );
}
