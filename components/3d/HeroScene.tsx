"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ─── Floating shape data ────────────────────────────── */
const SHAPES = [
  { pos: [-7, 2, -3], s: 0.4, color: "#47d6ff", rot: [0.3, 0.2], type: "box" },
  { pos: [8, -0.5, -5], s: 0.35, color: "#edb1ff", rot: [0.2, 0.35], type: "oct" },
  { pos: [-4, -1.5, -2], s: 0.28, color: "#ffd79f", rot: [0.25, 0.15], type: "tet" },
  { pos: [6, 3.5, -7], s: 0.45, color: "#a5e7ff", rot: [0.15, 0.25], type: "box" },
  { pos: [-9, 0.5, -4], s: 0.22, color: "#47d6ff", rot: [0.35, 0.3], type: "oct" },
  { pos: [3, -3, -1], s: 0.3, color: "#edb1ff", rot: [0.2, 0.4], type: "tet" },
  { pos: [-2, 4, -6], s: 0.32, color: "#ffd79f", rot: [0.3, 0.2], type: "box" },
  { pos: [10, 1.5, -9], s: 0.5, color: "#a5e7ff", rot: [0.1, 0.2], type: "oct" },
  { pos: [-6, -3.5, -5], s: 0.18, color: "#47d6ff", rot: [0.4, 0.25], type: "tet" },
  { pos: [5, -1.5, -3], s: 0.25, color: "#edb1ff", rot: [0.25, 0.3], type: "box" },
  { pos: [-10, 3, -8], s: 0.38, color: "#ffd79f", rot: [0.18, 0.28], type: "oct" },
  { pos: [2, 5, -10], s: 0.2, color: "#a5e7ff", rot: [0.32, 0.18], type: "tet" },
] as const;

/* ─── Single floating wireframe shape ────────────────── */
function FloatingShape({
  pos,
  s,
  color,
  rot,
  type,
}: (typeof SHAPES)[number]) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime;
    meshRef.current.rotation.y = t * rot[0];
    meshRef.current.rotation.x = t * rot[1];
    meshRef.current.position.y = Math.sin(t * 0.5 + pos[0]) * 0.25;
  });

  return (
    <group position={[pos[0], pos[1], pos[2]]}>
      <mesh ref={meshRef} scale={s}>
        {type === "box" && <boxGeometry />}
        {type === "oct" && <octahedronGeometry args={[1, 0]} />}
        {type === "tet" && <tetrahedronGeometry args={[1, 0]} />}
        <meshBasicMaterial
          wireframe
          color={color}
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}

/* ─── Dashed lines connecting nearby shapes ──────────── */
function ShapeConnections() {
  const data = useMemo(() => {
    const MAX_DIST = 9;
    const geos: THREE.BufferGeometry[] = [];
    const cols: string[] = [];
    for (let i = 0; i < SHAPES.length; i++) {
      for (let j = i + 1; j < SHAPES.length; j++) {
        const a = new THREE.Vector3(...SHAPES[i].pos);
        const b = new THREE.Vector3(...SHAPES[j].pos);
        if (a.distanceTo(b) < MAX_DIST) {
          geos.push(new THREE.BufferGeometry().setFromPoints([a, b]));
          cols.push(SHAPES[i].color);
        }
      }
    }
    return { geos, cols };
  }, []);

  return (
    <group>
      {data.geos.map((geo, i) => (
        <lineSegments key={i} geometry={geo}>
          <lineBasicMaterial
            color={data.cols[i]}
            transparent
            opacity={0.06}
          />
        </lineSegments>
      ))}
    </group>
  );
}

/* ─── Perspective grid floor ─────────────────────────── */
function TechGrid() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, -8]}>
        <planeGeometry args={[80, 60, 80, 60]} />
        <meshBasicMaterial
          wireframe
          color="#47d6ff"
          transparent
          opacity={0.03}
        />
      </mesh>
      {/* Second grid plane angled differently for depth layering */}
      <mesh
        rotation={[-Math.PI / 2, 0, Math.PI / 6]}
        position={[0, -3.5, -8]}
      >
        <planeGeometry args={[80, 60, 40, 30]} />
        <meshBasicMaterial
          wireframe
          color="#edb1ff"
          transparent
          opacity={0.012}
        />
      </mesh>
    </group>
  );
}

/* ─── Ambient particle field ─────────────────────────── */
function AmbientParticles() {
  const ref = useRef<THREE.Points>(null);
  const COUNT = 380;

  const { positions, colors } = useMemo(() => {
    const p = new Float32Array(COUNT * 3);
    const c = new Float32Array(COUNT * 3);
    const pal = [
      new THREE.Color("#47d6ff"),
      new THREE.Color("#edb1ff"),
      new THREE.Color("#a5e7ff"),
      new THREE.Color("#ffffff"),
    ];
    for (let i = 0; i < COUNT; i++) {
      p[i * 3] = (Math.random() - 0.5) * 30;
      p[i * 3 + 1] = (Math.random() - 0.5) * 18;
      p[i * 3 + 2] = (Math.random() - 0.5) * 16 - 4;
      const co = pal[Math.floor(Math.random() * pal.length)];
      c[i * 3] = co.r;
      c[i * 3 + 1] = co.g;
      c[i * 3 + 2] = co.b;
    }
    return { positions: p, colors: c };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.004;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Export ──────────────────────────────────────────── */
export default function HeroScene() {
  return (
    <>
      {/* Static camera angled slightly down toward the grid */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        target={[0, -1, -3]}
      />

      <ambientLight intensity={0.04} />
      <pointLight position={[8, 6, 4]} color="#00d2ff" intensity={2.5} />
      <pointLight position={[-6, -3, 5]} color="#edb1ff" intensity={1.5} />
      <pointLight position={[0, 6, -5]} color="#a5e7ff" intensity={0.8} />

      <TechGrid />
      <ShapeConnections />
      {SHAPES.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
      <AmbientParticles />
    </>
  );
}
