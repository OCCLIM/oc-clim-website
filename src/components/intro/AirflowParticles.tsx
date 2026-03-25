"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── 3D Airflow particle system ─── */
export default function AirflowParticles({ active, count = 200 }: { active: boolean; count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, velocities, opacities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const opa = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Start near the AC unit bottom
      pos[i * 3] = (Math.random() - 0.5) * 3; // x spread
      pos[i * 3 + 1] = -0.4 + Math.random() * 0.2; // y near bottom
      pos[i * 3 + 2] = 0.3 + Math.random() * 0.3; // z in front

      // Downward + outward velocity
      vel[i * 3] = (Math.random() - 0.5) * 0.008;
      vel[i * 3 + 1] = -0.005 - Math.random() * 0.01;
      vel[i * 3 + 2] = 0.002 + Math.random() * 0.005;

      opa[i] = Math.random();
    }

    return { positions: pos, velocities: vel, opacities: opa };
  }, [count]);

  useFrame(() => {
    if (!meshRef.current || !active) return;
    const posAttr = meshRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];

      // Reset particle when it falls too far
      if (arr[i * 3 + 1] < -2 || arr[i * 3 + 2] > 3) {
        arr[i * 3] = (Math.random() - 0.5) * 3;
        arr[i * 3 + 1] = -0.3 + Math.random() * 0.1;
        arr[i * 3 + 2] = 0.3 + Math.random() * 0.2;
      }
    }
    posAttr.needsUpdate = true;
  });

  if (!active) return null;

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#aaddff"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
