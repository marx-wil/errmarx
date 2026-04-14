"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

/*   Condensed stack: JS web (Node, Express, Next) + Expo + Flutter + infra ─ */
const SKILLS = [
  { name: "JavaScript", position: [0, 1.42, 0] as [number, number, number], color: "#a5e7ff" },
  { name: "TypeScript", position: [1.32, 0.52, 0.38] as [number, number, number], color: "#a5e7ff" },
  { name: "Node.js", position: [-1.32, 0.52, 0.38] as [number, number, number], color: "#ffd79f" },
  { name: "Express", position: [1.12, -0.62, 0.48] as [number, number, number], color: "#ffd79f" },
  { name: "Next.js", position: [-1.12, -0.62, 0.48] as [number, number, number], color: "#edb1ff" },
  { name: "Expo", position: [0.08, 0.32, -1.38] as [number, number, number], color: "#a5e7ff" },
  { name: "Flutter", position: [1.02, 0.92, -0.78] as [number, number, number], color: "#edb1ff" },
  { name: "Docker", position: [-0.88, -1.22, 0.42] as [number, number, number], color: "#ffd79f" },
  { name: "Kubernetes", position: [0.48, -1.48, -0.28] as [number, number, number], color: "#a5e7ff" },
  { name: "Terraform", position: [-0.42, -0.12, -1.36] as [number, number, number], color: "#edb1ff" },
];

const CONNECTIONS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [4, 5],
  [1, 6],
  [3, 7],
  [4, 7],
  [6, 7],
  [7, 8],
  [8, 9],
];

/*   Single skill orb             */
interface NodeProps {
  name: string;
  position: [number, number, number];
  color: string;
}

function SkillNode({ name, position, color }: NodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(() => {
    if (!matRef.current) return;
    matRef.current.emissiveIntensity = THREE.MathUtils.lerp(
      matRef.current.emissiveIntensity,
      hovered ? 2.5 : 0.4,
      0.1
    );
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.11, 20, 20]} />
        <meshStandardMaterial
          ref={matRef}
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* Outer glow ring — scales up on hover */}
      <mesh scale={hovered ? 1.8 : 1.3}>
        <sphereGeometry args={[0.11, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.06} />
      </mesh>

      {/* HTML label — always faces camera */}
      <Html
        center
        distanceFactor={9}
        style={{ pointerEvents: "none", userSelect: "none" }}
        position={[0, 0.22, 0]}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: color,
            whiteSpace: "nowrap",
            padding: "2px 7px",
            background: "rgba(14,14,14,0.85)",
            border: `1px solid ${color}35`,
            letterSpacing: "0.08em",
            opacity: hovered ? 1 : 0.7,
            transition: "opacity 0.3s",
          }}
        >
          {name}
        </div>
      </Html>
    </group>
  );
}

/*   Connection lines             */
function SkillConnections() {
  const positions = useMemo(() => {
    const pts: number[] = [];
    CONNECTIONS.forEach(([a, b]) => {
      pts.push(...SKILLS[a].position, ...SKILLS[b].position);
    });
    return new Float32Array(pts);
  }, []);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#a5e7ff" transparent opacity={0.12} />
    </lineSegments>
  );
}

/*   Camera parallax (reused from hero pattern)    */
function CameraController() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * 0.6,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.4,
      0.03
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/*   Root group (slow orbit)         ── */
function OrbitingNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.04) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {SKILLS.map((s) => (
        <SkillNode key={s.name} {...s} />
      ))}
      <SkillConnections />
    </group>
  );
}

/*   Export               ─ */
export default function SkillNodes() {
  return (
    <>
      <CameraController />
      <ambientLight intensity={0.1} />
      <pointLight position={[3, 3, 3]} color="#a5e7ff" intensity={2} />
      <pointLight position={[-3, -2, 2]} color="#edb1ff" intensity={1.5} />
      <OrbitingNodes />
    </>
  );
}
