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

function OrbitRing({ color }: { color: string }) {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ring.current) return;
    ring.current.rotation.z = state.clock.elapsedTime * 0.12;
    ring.current.rotation.x = 0.55 + Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[2.15, 0.012, 16, 180]} />
      <meshBasicMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
}

function Cluster({ dark }: { dark: boolean }) {
  const palette = dark
    ? {
        ring: "#6bb8ae",
        line: "#6bb8ae",
        nodeA: "#7fd4c9",
        nodeB: "#4e8f88",
        nodeC: "#c9ebe6",
        sparkles: "#9ee8dc",
      }
    : {
        ring: "#1a4c4a",
        line: "#1a4c4a",
        nodeA: "#1d5955",
        nodeB: "#0d3d3b",
        nodeC: "#8bd7d1",
        sparkles: "#1d5955",
      };

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
      <OrbitRing color={palette.ring} />
      {connections.map((points, index) => (
        <Line
          key={index}
          points={[...points]}
          color={palette.line}
          lineWidth={1.1}
          transparent
          opacity={dark ? 0.55 : 0.8}
        />
      ))}
      <CoreNode position={nodes[0]} color={palette.nodeA} scale={1.05} />
      <CoreNode position={nodes[1]} color={palette.nodeB} />
      <CoreNode position={nodes[2]} color={palette.nodeC} scale={0.92} />
      <Sparkles
        count={80}
        scale={[7, 5, 4]}
        size={dark ? 2.4 : 2.8}
        speed={dark ? 0.35 : 0.45}
        opacity={dark ? 0.55 : 0.9}
        color={palette.sparkles}
      />
    </group>
  );
}

export default function TriCodeScene({ dark }: { dark: boolean }) {
  const colors = dark
    ? {
        background: "#0c0e11",
        fog: "#0c0e11",
        ambient: 0.35,
        directional: "#e8fff9",
        point: "#6bb8ae",
      }
    : {
        background: "#f5f5f7",
        fog: "#f5f5f7",
        ambient: 0.7,
        directional: "#dffaf6",
        point: "#154f4d",
      };

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, 6.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={[colors.background]} />
      <fog attach="fog" args={[colors.fog, 7.5, 16]} />
      <ambientLight intensity={colors.ambient} />
      <directionalLight position={[4, 6, 3]} intensity={dark ? 1.3 : 0.9} color={colors.directional} />
      <pointLight position={[-3, -2, 2]} intensity={dark ? 1.1 : 1.4} color={colors.point} />
      <Cluster dark={dark} />
      <CameraRig />
    </Canvas>
  );
}
