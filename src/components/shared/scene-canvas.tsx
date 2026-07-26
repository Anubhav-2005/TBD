"use client";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
export function SceneCanvas() {
  return (
    <Canvas aria-label="Decorative 3D scene" camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <Float speed={1.5} rotationIntensity={0.5}>
        <mesh>
          <icosahedronGeometry args={[0.8, 4]} />
          <MeshDistortMaterial color="#00d1c3" distort={0.25} speed={1.5} roughness={0.25} />
        </mesh>
      </Float>
    </Canvas>
  );
}
