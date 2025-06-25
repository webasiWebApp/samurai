import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Sphere, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

function SamuraiModel({ animationPhase }) {
  const groupRef = useRef()
  const rotationRef = useRef(0)
  const positionRef = useRef(new THREE.Vector3(0, -1, 0))
  const targetPositionRef = useRef(new THREE.Vector3(0, -1, 0))

  useFrame((state, delta) => {
    if (!groupRef.current) return

    // Handle rotation animation
    if (animationPhase === 'rotating') {
      rotationRef.current += delta * 2
      groupRef.current.rotation.y = rotationRef.current
    }

    // Handle position animation
    if (animationPhase === 'moved') {
      targetPositionRef.current.set(4, -1, 0)
    } else {
      targetPositionRef.current.set(0, -1, 0)
    }

    // Smooth position interpolation
    positionRef.current.lerp(targetPositionRef.current, delta * 3)
    groupRef.current.position.copy(positionRef.current)
  })

  return (
    <group
      ref={groupRef}
      scale={[1.5, 1.5, 1.5]}
    >
      {/* Samurai Helmet */}
      <group position={[0, 2.5, 0]}>
        <Box args={[1.2, 0.8, 1.2]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </Box>
        {/* Helmet Horns */}
        <Cylinder args={[0.05, 0.05, 0.8]} position={[-0.4, 0.5, 0]} rotation={[0, 0, 0.3]}>
          <meshStandardMaterial color="#8B4513" />
        </Cylinder>
        <Cylinder args={[0.05, 0.05, 0.8]} position={[0.4, 0.5, 0]} rotation={[0, 0, -0.3]}>
          <meshStandardMaterial color="#8B4513" />
        </Cylinder>
        {/* Face Mask */}
        <Box args={[0.8, 0.6, 0.1]} position={[0, -0.3, 0.6]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </Box>
      </group>

      {/* Body Armor */}
      <group position={[0, 1, 0]}>
        {/* Chest Plate */}
        <Box args={[1.6, 1.2, 0.3]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
        </Box>
        {/* Shoulder Guards */}
        <Sphere args={[0.5]} position={[-1, 0.3, 0]} scale={[1.2, 0.8, 1]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </Sphere>
        <Sphere args={[0.5]} position={[1, 0.3, 0]} scale={[1.2, 0.8, 1]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </Sphere>
      </group>

      {/* Arms */}
      <group>
        {/* Left Arm */}
        <Cylinder args={[0.2, 0.2, 1.5]} position={[-1.2, 0.5, 0]} rotation={[0, 0, 0.3]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
        </Cylinder>
        {/* Right Arm */}
        <Cylinder args={[0.2, 0.2, 1.5]} position={[1.2, 0.5, 0]} rotation={[0, 0, -0.3]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.6} roughness={0.4} />
        </Cylinder>
      </group>

      {/* Legs */}
      <group>
        {/* Left Leg */}
        <Cylinder args={[0.25, 0.25, 2]} position={[-0.4, -1, 0]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
        </Cylinder>
        {/* Right Leg */}
        <Cylinder args={[0.25, 0.25, 2]} position={[0.4, -1, 0]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
        </Cylinder>
      </group>

      {/* Katana Sword */}
      <group position={[0.8, 1, -0.5]} rotation={[0, 0, -0.5]}>
        {/* Blade */}
        <Box args={[0.05, 2, 0.02]} position={[0, 1, 0]}>
          <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.1} />
        </Box>
        {/* Handle */}
        <Cylinder args={[0.08, 0.08, 0.6]} position={[0, -0.3, 0]}>
          <meshStandardMaterial color="#8B4513" />
        </Cylinder>
        {/* Guard */}
        <Cylinder args={[0.15, 0.15, 0.05]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </Cylinder>
      </group>

      {/* Cape/Cloak */}
      <Box args={[2, 2.5, 0.1]} position={[0, 0.5, -0.8]}>
        <meshStandardMaterial color="#8B0000" />
      </Box>
    </group>
  )
}

export default SamuraiModel

