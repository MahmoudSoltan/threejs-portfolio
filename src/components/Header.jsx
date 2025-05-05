// src/components/Header.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-20 bg-black fixed top-0 left-0 z-50 border-b border-gray-800">
      <div className="relative w-full h-16">
        {/* Stars background */}
        <div className="absolute inset-0 -z-10">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Stars radius={50} depth={10} count={300} factor={4} saturation={0} fade />
          </Canvas>
        </div>
        <div className="flex justify-between items-center text-white h-full">
          <h1 className="text-xl font-bold tracking-wide">Mahmoud Soltan</h1>
          <nav className="space-x-4 hidden md:block">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
);
}
