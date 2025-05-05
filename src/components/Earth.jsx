// src/components/Earth.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// تحويل الإحداثيات الجغرافية إلى إحداثيات كروية ثلاثية الأبعاد
function latLongToVector3(lat, lon, radius = 1.2) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return [x, y, z];
}

function EarthSphere() {
  const meshRef = useRef();
  const markerRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
    if (markerRef.current) {
      markerRef.current.rotation.y -= 0.001; // تعويض دوران الأرض
    }
  });

  const cityPosition = latLongToVector3(29.95, 30.92); // مدينة 6 أكتوبر

  return (
    <group ref={meshRef}>
      {/* الأرض */}
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial color="#3b82f6" wireframe />
      </mesh>

      {/* مؤشر المدينة */}
      <mesh ref={markerRef} position={cityPosition}>
        <sphereGeometry args={[0.02, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

export default function Earth() {
  return (
    <div className="w-full h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 3] }}
        gl={{ preserveDrawingBuffer: true }}
        onContextLost={(e) => {
          e.preventDefault();
          console.warn('WebGL context lost.');
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Stars />
        <OrbitControls enableZoom={false} />
        <EarthSphere />
      </Canvas>
    </div>
  );
}
