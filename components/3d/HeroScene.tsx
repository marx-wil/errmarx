"use client";

import { useRef, useMemo, useState, useEffect, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

/* ─── Camera: mouse parallax + GSAP scroll zoom ─────── */
function CameraController() {
  const scrollProgress = useRef(0);
  const baseZ = 5;

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => trigger.kill();
  }, []);

  useFrame((state) => {
    const { camera, pointer } = state;
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * 0.85,
      0.045
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.55,
      0.045
    );

    const targetZ = baseZ - scrollProgress.current * 2.2;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.06);

    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Orbital modules (systems metaphor) ───────────── */
const MODULES = [
  { id: "api", label: "API_GATEWAY", color: "#47d6ff" },
  { id: "data", label: "DATA_PLANE", color: "#a5e7ff" },
  { id: "queue", label: "JOB_QUEUE", color: "#edb1ff" },
  { id: "cache", label: "EDGE_CACHE", color: "#47d6ff" },
  { id: "obs", label: "OBSERVABILITY", color: "#edb1ff" },
  { id: "sec", label: "POLICY_MESH", color: "#a5e7ff" },
  { id: "deploy", label: "DEPLOY_ORBIT", color: "#47d6ff" },
  { id: "fail", label: "FAILOVER", color: "#edb1ff" },
] as const;

function fibonacciSpherePoints(count: number, radius: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    pts.push(
      new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      )
    );
  }
  return pts;
}

/* ─── Dashed link from core to module ─────────────── */
function TopologyLink({
  target,
  active,
}: {
  target: THREE.Vector3;
  active: boolean;
}) {
  const lineRef = useRef<THREE.LineSegments>(null);
  const geom = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      target.clone(),
    ]);
  }, [target]);

  useLayoutEffect(() => {
    lineRef.current?.computeLineDistances();
  }, [geom]);

  useFrame((state) => {
    const raw = lineRef.current?.material;
    const mat = Array.isArray(raw) ? raw[0] : raw;
    if (!mat) return;
    (mat as unknown as { dashOffset: number }).dashOffset =
      -state.clock.elapsedTime * (active ? 0.42 : 0.14);
  });

  return (
    <lineSegments ref={lineRef} geometry={geom}>
      <lineDashedMaterial
        color={active ? "#edb1ff" : "#47d6ff"}
        dashSize={0.07}
        gapSize={0.11}
        transparent
        opacity={active ? 0.72 : 0.2}
      />
    </lineSegments>
  );
}

/* ─── Single service node (hover + label) ─────────── */
function ServiceNode({
  position,
  label,
  color,
  index,
  hovered,
  setHovered,
}: {
  position: THREE.Vector3;
  label: string;
  color: string;
  index: number;
  hovered: number | null;
  setHovered: (i: number | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const over = hovered === index;

  useFrame(() => {
    if (!meshRef.current) return;
    const s = THREE.MathUtils.lerp(meshRef.current.scale.x, over ? 1.4 : 1, 0.12);
    meshRef.current.scale.setScalar(s);
  });

  const [x, y, z] = position.toArray();

  return (
    <group position={[x, y, z]}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(index);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(null);
          document.body.style.cursor = "";
        }}
      >
        <octahedronGeometry args={[0.13, 0]} />
        <meshStandardMaterial
          color="#060d12"
          emissive={color}
          emissiveIntensity={over ? 2.2 : 0.45}
          metalness={0.88}
          roughness={0.22}
        />
      </mesh>
      <mesh scale={over ? 2 : 1.45}>
        <octahedronGeometry args={[0.13, 0]} />
        <meshBasicMaterial color={color} transparent opacity={over ? 0.12 : 0.04} wireframe />
      </mesh>

      {over && (
        <Html distanceFactor={9} center style={{ pointerEvents: "none" }}>
          <div className="font-mono text-[9px] tracking-[0.2em] text-primary whitespace-nowrap px-2.5 py-1 border border-primary/35 bg-[#0a0a0a]/85 backdrop-blur-md shadow-[0_0_20px_rgba(71,214,255,0.12)]">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}

/* ─── Central core + topology ───────────────────────── */
function InteractiveTopology() {
  const rootRef = useRef<THREE.Group>(null);
  const coreGroupRef = useRef<THREE.Group>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const nodePositions = useMemo(
    () => fibonacciSpherePoints(MODULES.length, 2.05),
    []
  );

  useFrame((state) => {
    if (!rootRef.current) return;
    const t = state.clock.elapsedTime;
    rootRef.current.rotation.y = t * 0.11 + state.pointer.x * 0.35;
    rootRef.current.rotation.x = THREE.MathUtils.lerp(
      rootRef.current.rotation.x,
      state.pointer.y * 0.22,
      0.05
    );
  });

  useFrame((state) => {
    if (!wireRef.current) return;
    wireRef.current.rotation.x = state.clock.elapsedTime * 0.09;
    wireRef.current.rotation.y = state.clock.elapsedTime * 0.11;
  });

  const pulseCore = () => {
    const g = coreGroupRef.current;
    if (!g) return;
    gsap.fromTo(
      g.scale,
      { x: 1, y: 1, z: 1 },
      {
        x: 1.12,
        y: 1.12,
        z: 1.12,
        duration: 0.12,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      }
    );
  };

  return (
    <group ref={rootRef}>
      {nodePositions.map((pos, i) => (
        <TopologyLink key={`link-${MODULES[i].id}`} target={pos} active={hovered === i} />
      ))}

      <group ref={coreGroupRef}>
        <mesh
          onClick={(e) => {
            e.stopPropagation();
            pulseCore();
          }}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "";
          }}
        >
          <icosahedronGeometry args={[0.42, 1]} />
          <meshStandardMaterial
            color="#030608"
            emissive="#001820"
            emissiveIntensity={0.9}
            metalness={0.75}
            roughness={0.35}
          />
        </mesh>
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[0.52, 1]} />
          <meshStandardMaterial
            color="#a5e7ff"
            wireframe
            transparent
            opacity={0.35}
            emissive="#00d2ff"
            emissiveIntensity={0.45}
          />
        </mesh>
      </group>

      {MODULES.map((m, i) => (
        <ServiceNode
          key={m.id}
          position={nodePositions[i]}
          label={m.label}
          color={m.color}
          index={i}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </group>
  );
}

/* ─── Ground horizon ring (depth, minimal) ──────────── */
function HorizonRing() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
  });
  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2.35, 0]}
    >
      <ringGeometry args={[3.2, 3.28, 96]} />
      <meshBasicMaterial
        color="#47d6ff"
        transparent
        opacity={0.11}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ─── Export ─────────────────────────────────────────── */
export default function HeroScene() {
  return (
    <>
      <CameraController />

      <ambientLight intensity={0.06} />
      <pointLight position={[4, 3, 5]} color="#00d2ff" intensity={2.2} />
      <pointLight position={[-4, -2, 4]} color="#edb1ff" intensity={1.2} />
      <pointLight position={[0, 2, -3]} color="#a5e7ff" intensity={0.45} />

      <InteractiveTopology />
      <HorizonRing />
    </>
  );
}
