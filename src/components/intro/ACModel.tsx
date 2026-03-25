"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Procedural 3D Split-Unit Air Conditioner ─── */
export default function ACModel({ scrollProgress = 0 }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const louverRef = useRef<THREE.Mesh>(null);
  const ledRef = useRef<THREE.PointLight>(null);

  // Animate based on scroll
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Gentle floating
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.05;

    // Rotate based on scroll progress
    const targetRotY = scrollProgress < 0.3
      ? scrollProgress * 2 // Slow reveal rotation
      : 0.6 + Math.sin((scrollProgress - 0.3) * Math.PI) * 0.3; // Orbit back
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);

    // Tilt based on scroll
    const targetRotX = scrollProgress > 0.4 ? -0.1 : 0.05;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.03);

    // Scale up as it reveals
    const targetScale = scrollProgress < 0.2 ? 0.6 + scrollProgress * 2 : 1;
    const s = THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.05);
    groupRef.current.scale.set(s, s, s);

    // Louver animation (opens when airflow starts)
    if (louverRef.current) {
      const louverAngle = scrollProgress > 0.35 ? -0.35 : 0;
      louverRef.current.rotation.x = THREE.MathUtils.lerp(louverRef.current.rotation.x, louverAngle, 0.03);
    }

    // LED pulse
    if (ledRef.current) {
      ledRef.current.intensity = scrollProgress > 0.25 ? 0.5 + Math.sin(t * 3) * 0.3 : 0;
    }
  });

  // Materials
  const bodyMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#f5f5f5",
    metalness: 0.1,
    roughness: 0.15,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    reflectivity: 0.9,
  }), []);

  const panelMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#e8e8e8",
    metalness: 0.05,
    roughness: 0.2,
    clearcoat: 0.5,
  }), []);

  const ventMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#333333",
    metalness: 0.3,
    roughness: 0.6,
  }), []);

  const accentMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#cccccc",
    metalness: 0.6,
    roughness: 0.1,
    clearcoat: 1,
  }), []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main body */}
      <mesh material={bodyMaterial} castShadow receiveShadow>
        <boxGeometry args={[3.6, 0.9, 0.65]} />
      </mesh>

      {/* Top edge — chrome accent */}
      <mesh position={[0, 0.46, 0]} material={accentMaterial}>
        <boxGeometry args={[3.62, 0.02, 0.67]} />
      </mesh>

      {/* Bottom edge — chrome accent */}
      <mesh position={[0, -0.46, 0]} material={accentMaterial}>
        <boxGeometry args={[3.62, 0.02, 0.67]} />
      </mesh>

      {/* Front panel with subtle inset */}
      <mesh position={[0, 0.05, 0.33]} material={panelMaterial}>
        <boxGeometry args={[3.4, 0.7, 0.01]} />
      </mesh>

      {/* Air intake grille (top) */}
      <mesh position={[0, 0.35, 0.33]}>
        <boxGeometry args={[3.3, 0.08, 0.01]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Vent slats */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`slat-${i}`} position={[0, 0.32 - i * 0.04, 0.335]} material={ventMaterial}>
          <boxGeometry args={[3.2, 0.008, 0.005]} />
        </mesh>
      ))}

      {/* Bottom louver (animated) */}
      <group position={[0, -0.35, 0.33]}>
        <mesh ref={louverRef} material={panelMaterial} castShadow>
          <boxGeometry args={[3.3, 0.15, 0.015]} />
        </mesh>
      </group>

      {/* Side panels — rounded feel */}
      <mesh position={[-1.81, 0, 0]} material={bodyMaterial}>
        <boxGeometry args={[0.02, 0.92, 0.67]} />
      </mesh>
      <mesh position={[1.81, 0, 0]} material={bodyMaterial}>
        <boxGeometry args={[0.02, 0.92, 0.67]} />
      </mesh>

      {/* LED indicator */}
      <mesh position={[1.55, 0.3, 0.34]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2} />
      </mesh>
      <pointLight ref={ledRef} position={[1.55, 0.3, 0.4]} color="#22c55e" intensity={0} distance={0.5} />

      {/* Brand plate */}
      <mesh position={[0, -0.15, 0.34]}>
        <boxGeometry args={[0.6, 0.12, 0.005]} />
        <meshPhysicalMaterial color="#e5e5e5" metalness={0.4} roughness={0.1} clearcoat={1} />
      </mesh>

      {/* Wall mount bracket (back) */}
      <mesh position={[0, 0.15, -0.35]}>
        <boxGeometry args={[2.5, 0.5, 0.05]} />
        <meshStandardMaterial color="#999" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* Copper pipes (back, visible when rotated) */}
      <mesh position={[1.2, -0.2, -0.38]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 16]} />
        <meshPhysicalMaterial color="#b87333" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1.35, -0.2, -0.38]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.6, 16]} />
        <meshPhysicalMaterial color="#b87333" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}
