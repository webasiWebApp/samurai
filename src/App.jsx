import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import SamuraiModel from './components/SamuraiModel'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [animationPhase, setAnimationPhase] = useState('initial') // 'initial', 'rotating', 'moved'

  useEffect(() => {
    // Start animation after 3 seconds
    const timer = setTimeout(() => {
      setAnimationPhase('rotating')
      
      // Move to final position after rotation
      setTimeout(() => {
        setAnimationPhase('moved')
      }, 2000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-screen bg-gradient-to-br from-red-900 via-black to-red-800 overflow-hidden relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Initial SAMURAI Text */}
      {animationPhase === 'initial' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <h1 className="text-8xl font-bold text-white font-serif tracking-wider">
            SAMURAI
          </h1>
        </motion.div>
      )}
      
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff4444" />
          
          {/* Environment for reflections */}
          <Environment preset="sunset" />
          
          {/* Samurai Model */}
          <SamuraiModel animationPhase={animationPhase} />
          
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      
      {/* Content that appears after animation */}
      {animationPhase === 'moved' && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 max-w-lg"
        >
          <h1 className="text-6xl font-bold text-white mb-4 font-serif">
            侍
          </h1>
          <h2 className="text-4xl font-bold text-red-400 mb-6">
            SAMURAI
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Experience the honor, discipline, and artistry of ancient Japanese warrior culture. 
            Discover the way of the samurai through immersive 3D storytelling.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
      )}
      
      {/* Cherry Blossom Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-70"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: -10,
              rotate: 0,
            }}
            animate={{
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 10,
              rotate: 360,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Red Circle Background Element */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
    </div>
  )
}

export default App

