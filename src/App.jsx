import React, { Suspense, lazy, Component } from 'react';
import './index.css';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// Error Boundary
class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.error(error, info); }
  render() {
    if (this.state.hasError) return <div className="text-center mt-20 text-red-500">Error loading 3D scene.</div>;
    return this.props.children;
  }
}

// Lazy-loaded components
const Header = lazy(() => import('./components/Header'));
const Hero3DText = lazy(() => import('./components/Hero3DText'));
const About = lazy(() => import('./components/About'));
const Earth = lazy(() => import('./components/Earth'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact = lazy(() => import('./components/Contact'));
const AIAssistant = lazy(() => import('./components/AIAssistant'));
const DataLoader = lazy(() => import('./components/DataLoader'));

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
      <DataLoader />
        <Header />

        {/* Hero Section with Fixed Canvas */}
        <section className="relative h-screen w-full overflow-hidden">
          <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 5] }}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
              <Hero3DText />
            </Suspense>
          </Canvas>

          <motion.div
            className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="mt-4 text-lg">Hi, I'm Mahmoud Soltan — Frontend Developer</p>
          </motion.div>
        </section>

        <section id="about" className="py-16 px-4 md:px-20">
          <About />
        </section>

        <section className="py-20 px-4 md:px-20">
          <ErrorBoundary>
            <Earth />
          </ErrorBoundary>
        </section>

        <section id="skills" className="py-10 px-4 md:px-20">
          <Skills />
        </section>

        <section id="projects" className="py-10 px-4 md:px-20 bg-gray-900">
          <Projects />
        </section>

        <section className="py-10 px-4 md:px-20">
          <Timeline />
        </section>

        <section id="contact" className="py-10 px-4 md:px-20 bg-gray-900">
          <Contact
            email="mahmoudeslam920@gmail.com"
            linkedIn="https://linkedin.com/in/mahmoud-soltan"
            github="https://github.com/MahmoudSoltan"
          />
        </section>
        <div className="fixed bottom-5 right-5 z-50">
          <AIAssistant />
        </div>
      </Suspense>
    </div>
  );
}
