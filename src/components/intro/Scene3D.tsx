"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import ACModel from "./ACModel";
import AirflowParticles from "./AirflowParticles";

/* ─── Camera controller driven by scroll progress ─── */
function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();

  useFrame(() => {
    const p = scrollProgress;

    // Camera path: starts far → zooms in → orbits → pulls back
    let targetX: number, targetY: number, targetZ: number;
    let lookY = 0;

    if (p < 0.2) {
      // Phase 1: Far away, approaching
      const t = p / 0.2;
      targetX = 0;
      targetY = 0.5 - t * 0.3;
      targetZ = 6 - t * 2;
    } else if (p < 0.45) {
      // Phase 2: Close-up front view
      const t = (p - 0.2) / 0.25;
      targetX = t * 1.5;
      targetY = 0.2 - t * 0.1;
      targetZ = 4 - t * 1;
    } else if (p < 0.65) {
      // Phase 3: Orbit to see side + back (copper pipes)
      const t = (p - 0.45) / 0.2;
      const angle = t * Math.PI * 0.5;
      targetX = Math.sin(angle) * 3.5;
      targetY = 0.1 + t * 0.3;
      targetZ = Math.cos(angle) * 3.5;
    } else if (p < 0.85) {
      // Phase 4: Pull back, dramatic angle
      const t = (p - 0.65) / 0.2;
      targetX = 1.5 - t * 1.5;
      targetY = 0.4 + t * 0.5;
      targetZ = 3.5 + t * 1;
      lookY = -t * 0.3;
    } else {
      // Phase 5: Final position, ready to transition
      const t = (p - 0.85) / 0.15;
      targetX = 0;
      targetY = 0.9 + t * 2;
      targetZ = 4.5 + t * 3;
      lookY = -0.3 - t * 2;
    }

    camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.04);
    const lookTarget = new THREE.Vector3(0, lookY, 0);
    const currentLook = new THREE.Vector3();
    camera.getWorldDirection(currentLook);
    camera.lookAt(lookTarget);
  });

  return null;
}

/* ─── Fog particles (ambient) ─── */
function FogParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 100;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.08} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ─── Ground ring light effect ─── */
function GroundLight({ intensity }: { intensity: number }) {
  return (
    <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1, 2.5, 64]} />
      <meshBasicMaterial color="#4488cc" transparent opacity={intensity * 0.08} side={THREE.DoubleSide} />
    </mesh>
  );
}

/* ─── Main 3D Scene ─── */
export default function Scene3D({ scrollProgress }: { scrollProgress: number }) {
  const airflowActive = scrollProgress > 0.3;
  const glowIntensity = scrollProgress > 0.25 ? Math.min((scrollProgress - 0.25) * 3, 1) : 0;

  return (
    <Canvas
      camera={{ position: [0, 0.5, 6], fov: 35 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        {/* Lighting setup */}
        <ambientLight intensity={0.15} />

        {/* Key light — main illumination */}
        <directionalLight
          position={[5, 4, 3]}
          intensity={0.8}
          color="#ffffff"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        {/* Fill light — softer, blue tint */}
        <directionalLight position={[-3, 2, -2]} intensity={0.3} color="#8ab4f8" />

        {/* Rim light — edge highlight */}
        <directionalLight position={[0, -1, 4]} intensity={0.2} color="#ffffff" />

        {/* Accent spot — dramatic */}
        <spotLight
          position={[0, 3, 2]}
          angle={0.4}
          penumbra={0.8}
          intensity={glowIntensity * 1.5}
          color="#aaccff"
          castShadow
        />

        {/* Environment for reflections */}
        <Environment preset="city" />

        {/* Camera controller */}
        <CameraController scrollProgress={scrollProgress} />

        {/* AC Model */}
        <Float speed={0.5} rotationIntensity={0.02} floatIntensity={0.05} enabled={scrollProgress < 0.8}>
          <ACModel scrollProgress={scrollProgress} />
        </Float>

        {/* Airflow particles */}
        <AirflowParticles active={airflowActive} count={150} />

        {/* Ambient fog particles */}
        <FogParticles />

        {/* Ground light ring */}
        <GroundLight intensity={glowIntensity} />

        {/* Contact shadow on ground */}
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.3}
          scale={8}
          blur={2}
          far={3}
          color="#000000"
        />

        {/* Post-processing */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
            intensity={0.3}
          />
          <Vignette offset={0.3} darkness={0.6} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
