import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Character3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return;

    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
    meshRef.current.rotation.x = Math.cos(t * 0.3) * 0.1;
    
    // Pulsating glow effect
    glowRef.current.intensity = 1.5 + Math.sin(t * 2) * 0.5;
  });

  return (
    <group>
      {/* Glowing Light Source */}
      <pointLight
        ref={glowRef}
        position={[0, 3, 3]}
        color="#9c27b0"
        intensity={1.5}
        distance={10}
      />
      <mesh ref={meshRef} position={[0, -0.5, 0]} scale={2}>
        {/* Alien Geometry */}
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshPhysicalMaterial
          color="#311b92"
          emissive="#8e24aa"
          emissiveIntensity={1}
          metalness={0.9}
          roughness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      {/* Adding Tentacle-Like Appendages */}
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i) * 1.5, Math.cos(i) * 1.5, 0]}>
          <cylinderGeometry args={[0.1, 0.3, 3, 16]} />
          <meshPhysicalMaterial
            color="#1a237e"
            emissive="#6a1b9a"
            emissiveIntensity={0.8}
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}