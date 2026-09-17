import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const nodes: [number, number, number][] = [
  [0, 1.35, 0],
  [-1.4, -0.85, 0.4],
  [1.35, -0.7, -0.35],
];

function CameraRig() {
  useFrame((state) => {
    const x = state.pointer.x * 1.6;
    const y = state.pointer.y * 0.9;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x, 0.045);
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      y + 0.2,
      0.045
    );
    state.camera.position.z = 6.4;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function CoreNode({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!inner.current) return;
    inner.current.rotation.y = state.clock.elapsedTime * 0.35;
    inner.current.rotation.x = state.clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.6}>
      <group position={position} scale={scale}>
        <mesh ref={inner}>
          <icosahedronGeometry args={[0.52, 1]} />
          <meshStandardMaterial
            color={color}
            metalness={0.78}
            roughness={0.18}
            emissive={color}
            emissiveIntensity={0.28}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.62, 0]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitRing() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ring.current) return;
    ring.current.rotation.z = state.clock.elapsedTime * 0.12;
    ring.current.rotation.x = 0.55 + Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[2.15, 0.012, 16, 180]} />
      <meshBasicMaterial color="#6bb8ae" transparent opacity={0.45} />
    </mesh>
  );
}

function Cluster() {
  const connections = useMemo(
    () => [
      [nodes[0], nodes[1]] as const,
      [nodes[1], nodes[2]] as const,
      [nodes[2], nodes[0]] as const,
    ],
    []
  );

  return (
    <group position={[1.85, -0.15, 0]}>
      <OrbitRing />
      {connections.map((points, index) => (
        <Line
          key={index}
          points={[...points]}
          color="#6bb8ae"
          lineWidth={1.1}
          transparent
          opacity={0.55}
        />
      ))}
      <CoreNode position={nodes[0]} color="#7fd4c9" scale={1.05} />
      <CoreNode position={nodes[1]} color="#4e8f88" />
      <CoreNode position={nodes[2]} color="#c9ebe6" scale={0.92} />
      <Sparkles
        count={80}
        scale={[7, 5, 4]}
        size={2.4}
        speed={0.35}
        opacity={0.55}
        color="#9ee8dc"
      />
    </group>
  );
}

export default function TriCodeScene({ dark }: { dark: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, 6.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={[dark ? "#0c0e11" : "#f3f1ec"]} />
      <fog attach="fog" args={[dark ? "#0c0e11" : "#f3f1ec", 7.5, 16]} />
      <ambientLight intensity={dark ? 0.35 : 0.7} />
      <directionalLight position={[4, 6, 3]} intensity={dark ? 1.3 : 0.9} color="#e8fff9" />
      <pointLight position={[-3, -2, 2]} intensity={1.1} color="#6bb8ae" />
      <Cluster />
      <CameraRig />
    </Canvas>
  );
}
