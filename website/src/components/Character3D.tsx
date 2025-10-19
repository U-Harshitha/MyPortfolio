import { Canvas } from '@react-three/fiber';
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Character() {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    // Simple idle animation
    const animate = () => {
      if (groupRef.current) {
        // Gentle bobbing motion
        groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.05;
        // Gentle rotation
        groupRef.current.rotation.y = Math.sin(Date.now() * 0.0005) * 0.1;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Head */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.28, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#4a2c2a" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.08, 1.35, 0.2]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#2c1810" />
      </mesh>
      <mesh position={[0.08, 1.35, 0.2]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#2c1810" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.8, 32]} />
        <meshStandardMaterial color="#20B2AA" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.3, 0.8, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      <mesh position={[0.3, 0.8, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.12, 0.05, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.5, 16]} />
        <meshStandardMaterial color="#2c5282" />
      </mesh>
      <mesh position={[0.12, 0.05, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.5, 16]} />
        <meshStandardMaterial color="#2c5282" />
      </mesh>
    </group>
  );
}

export default function Character3D() {
  return (
    <div className="fixed bottom-8 right-8 w-48 h-48 pointer-events-auto z-50">
      <Canvas
        camera={{ position: [0, 1, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#20B2AA" />
        <Character />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
