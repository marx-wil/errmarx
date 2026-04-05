"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import * as THREE from "three";

/* ─── Philosophy domains (mirrors Skills.tsx) ────────── */
const DOMAINS = [
  {
    id: "system_design",
    name: "01_SYSTEM_DESIGN",
    label: "System Design",
    sub: "& Architecture",
    color: "#47d6ff",
    items: [
      "Distributed systems",
      "Offline-first arch",
      "Event-driven",
      "Microservices",
      "High availability",
    ],
  },
  {
    id: "eng_philosophy",
    name: "02_PHILOSOPHY",
    label: "Engineering",
    sub: "Philosophy",
    color: "#edb1ff",
    items: [
      "Observability-first",
      "Infra as Code",
      "GitOps & CD",
      "Domain-Driven Design",
      "Zero Trust security",
    ],
  },
  {
    id: "backend",
    name: "03_BACKEND",
    label: "Backend",
    sub: "Platform",
    color: "#ffd79f",
    items: [
      "Service-oriented arch",
      "Auth & authz",
      "Real-time messaging",
      "Data modeling",
      "Cache strategy",
    ],
  },
  {
    id: "devops",
    name: "04_DEVOPS",
    label: "DevOps",
    sub: "Infrastructure",
    color: "#47d6ff",
    items: [
      "Docker / Kubernetes",
      "CI/CD pipelines",
      "Terraform IaC",
      "Monitoring & SLOs",
      "Multi-region cloud",
    ],
  },
  {
    id: "data",
    name: "05_DATA_SYS",
    label: "Data",
    sub: "Systems",
    color: "#edb1ff",
    items: [
      "PostgreSQL",
      "NoSQL systems",
      "Redis caching",
      "Elasticsearch",
      "Kafka streaming",
    ],
  },
] as const;

type Domain = (typeof DOMAINS)[number];

/* ─── Positions: nodes on a tilted elliptical ring ───── */
function buildNodePositions(n: number, radius: number): THREE.Vector3[] {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return new THREE.Vector3(
      Math.cos(a) * radius,
      Math.sin(a) * radius * 0.52 + Math.sin(a * 2) * 0.55,
      Math.sin(a + 0.95) * 1.8
    );
  });
}

/* ─── Animated packet ─────────────────────────────────── */
function Packet({
  from,
  to,
  color,
  speed,
  offset = 0,
}: {
  from: THREE.Vector3;
  to: THREE.Vector3;
  color: string;
  speed: number;
  offset?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(offset);

  useFrame((_, delta) => {
    t.current = (t.current + delta * speed) % 1;
    if (!meshRef.current) return;
    meshRef.current.position.lerpVectors(from, to, t.current);
    const pulse = Math.sin(t.current * Math.PI) * 0.5 + 0.5;
    meshRef.current.scale.setScalar(0.042 + pulse * 0.028);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 5, 5]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

/* ─── Dashed edge with animated packets ──────────────── */
function NetworkEdge({
  from,
  to,
  color,
  highlighted,
  packetCount,
}: {
  from: THREE.Vector3;
  to: THREE.Vector3;
  color: string;
  highlighted: boolean;
  packetCount: number;
}) {
  const lineRef = useRef<THREE.LineSegments>(null);

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints([
      from.clone(),
      to.clone(),
    ]);
    return g;
  }, [from, to]);

  // compute line distances after geom is available
  const lineRefCallback = (ls: THREE.LineSegments | null) => {
    (lineRef as React.MutableRefObject<THREE.LineSegments | null>).current = ls;
    ls?.computeLineDistances();
  };

  useFrame((state) => {
    const mat = lineRef.current?.material;
    const m = Array.isArray(mat) ? mat[0] : mat;
    if (!m) return;
    (m as unknown as { dashOffset: number }).dashOffset =
      -state.clock.elapsedTime * (highlighted ? 0.55 : 0.18);
  });

  return (
    <group>
      <lineSegments ref={lineRefCallback} geometry={geom}>
        <lineDashedMaterial
          color={color}
          dashSize={0.055}
          gapSize={0.09}
          transparent
          opacity={highlighted ? 0.68 : 0.2}
        />
      </lineSegments>
      {Array.from({ length: packetCount }, (_, i) => (
        <Packet
          key={i}
          from={i % 2 === 0 ? from : to}
          to={i % 2 === 0 ? to : from}
          color={color}
          speed={0.14 + i * 0.05}
          offset={i / packetCount}
        />
      ))}
    </group>
  );
}

/* ─── Domain server node ─────────────────────────────── */
function DomainNode({
  domain,
  position,
  index,
  hovered,
  active,
  setHovered,
  setActive,
}: {
  domain: Domain;
  position: THREE.Vector3;
  index: number;
  hovered: number | null;
  active: number | null;
  setHovered: (i: number | null) => void;
  setActive: (i: number | null) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const isOver = hovered === index;
  const isActive = active === index;
  const lit = isOver || isActive;
  const [px, py, pz] = position.toArray();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime + index * 1.15;
    meshRef.current.rotation.y = t * 0.44;
    meshRef.current.rotation.x = t * 0.21;
    const target = lit ? 1.3 : 1.0;
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, target, 0.1)
    );
  });

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setActive(isActive ? null : index);
    const g = groupRef.current;
    if (g) {
      gsap.fromTo(
        g.scale,
        { x: 1, y: 1, z: 1 },
        { x: 1.22, y: 1.22, z: 1.22, duration: 0.1, yoyo: true, repeat: 1 }
      );
    }
  };

  return (
    <group ref={groupRef} position={[px, py, pz]}>
      {/* Glow halo ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.32, 0.4, 32]} />
        <meshBasicMaterial
          color={domain.color}
          transparent
          opacity={lit ? 0.5 : 0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Server cube */}
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
        onClick={handleClick}
      >
        <boxGeometry args={[0.28, 0.28, 0.28]} />
        <meshStandardMaterial
          color="#040810"
          emissive={domain.color}
          emissiveIntensity={lit ? 2.4 : 0.55}
          metalness={0.92}
          roughness={0.18}
        />
      </mesh>

      {/* Wireframe shell */}
      <mesh scale={1.42}>
        <boxGeometry args={[0.28, 0.28, 0.28]} />
        <meshBasicMaterial
          color={domain.color}
          wireframe
          transparent
          opacity={lit ? 0.24 : 0.06}
        />
      </mesh>

      {/* Persistent label */}
      <Html
        distanceFactor={8}
        center
        position={[0, -0.52, 0]}
        style={{ pointerEvents: "none" }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "7.5px",
            letterSpacing: "0.18em",
            color: domain.color,
            opacity: lit ? 1 : 0.72,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            textShadow: `0 0 14px ${domain.color}80`,
            transition: "opacity 0.2s",
          }}
        >
          {domain.name}
        </div>
      </Html>

      {/* Detail card on hover/active */}
      {lit && (
        <Html
          distanceFactor={7}
          center
          position={[0, 0.9, 0]}
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              background: "rgba(5, 8, 13, 0.94)",
              border: `1px solid ${domain.color}45`,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: "10px 14px",
              minWidth: "165px",
              boxShadow: `0 0 40px ${domain.color}20, inset 0 0 20px rgba(0,0,0,0.4)`,
            }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "0.14em",
                color: domain.color,
                textTransform: "uppercase",
                marginBottom: "7px",
                borderBottom: `1px solid ${domain.color}30`,
                paddingBottom: "6px",
              }}
            >
              {domain.label}&nbsp;{domain.sub}
            </div>
            {domain.items.map((item) => (
              <div
                key={item}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "7.5px",
                  color: "#bbc9cf",
                  marginBottom: "3.5px",
                  paddingLeft: "8px",
                  borderLeft: `2px solid ${domain.color}40`,
                  lineHeight: 1.45,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </Html>
      )}
    </group>
  );
}

/* ─── Central hub ────────────────────────────────────── */
function CentralHub() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.28;
      coreRef.current.rotation.z = t * 0.11;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.21;
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.17;
      ring2Ref.current.rotation.z = -t * 0.13;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = -t * 0.19;
      ring3Ref.current.rotation.x = t * 0.09;
    }
  });

  return (
    <group>
      {/* Solid core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.36, 1]} />
        <meshStandardMaterial
          color="#030509"
          emissive="#001a24"
          emissiveIntensity={1.5}
          metalness={0.85}
          roughness={0.26}
        />
      </mesh>
      {/* Wireframe shell */}
      <mesh scale={1.2}>
        <icosahedronGeometry args={[0.36, 1]} />
        <meshStandardMaterial
          color="#47d6ff"
          wireframe
          transparent
          opacity={0.3}
          emissive="#00d2ff"
          emissiveIntensity={0.6}
        />
      </mesh>
      {/* Orbit rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI * 0.28, 0, 0]}>
        <torusGeometry args={[0.66, 0.007, 8, 64]} />
        <meshBasicMaterial color="#47d6ff" transparent opacity={0.32} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[-Math.PI * 0.2, Math.PI * 0.38, 0]}>
        <torusGeometry args={[0.8, 0.005, 8, 64]} />
        <meshBasicMaterial color="#edb1ff" transparent opacity={0.24} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[0, Math.PI * 0.5, Math.PI * 0.15]}>
        <torusGeometry args={[0.73, 0.004, 8, 64]} />
        <meshBasicMaterial color="#ffd79f" transparent opacity={0.18} />
      </mesh>

      <Html
        distanceFactor={8}
        center
        position={[0, 0.62, 0]}
        style={{ pointerEvents: "none" }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "7px",
            letterSpacing: "0.35em",
            color: "#47d6ff",
            opacity: 0.65,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            textShadow: "0 0 10px #47d6ff60",
          }}
        >
          CORE_HUB
        </div>
      </Html>
    </group>
  );
}

/* ─── Background field particles ─────────────────────── */
function FieldParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const COUNT = 240;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const palette = [
      new THREE.Color("#47d6ff"),
      new THREE.Color("#edb1ff"),
      new THREE.Color("#a5e7ff"),
      new THREE.Color("#ffffff"),
    ];
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 1;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Main network scene (with edges + nodes) ─────────── */
function NetworkScene() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(null);

  const nodePositions = useMemo(() => buildNodePositions(DOMAINS.length, 3.5), []);
  const hub = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  // Pentagon ring edges
  const ringEdges = useMemo(
    () => DOMAINS.map((_, i) => ({ a: i, b: (i + 1) % DOMAINS.length })),
    []
  );

  // Diagonal cross-links for mesh density
  const crossEdges = useMemo(
    () => [
      { a: 0, b: 2 },
      { a: 1, b: 3 },
      { a: 2, b: 4 },
      { a: 0, b: 3 },
    ],
    []
  );

  const isLit = (a: number, b: number) =>
    hovered === a || hovered === b || active === a || active === b;

  return (
    <group>
      {/* Hub spokes */}
      {nodePositions.map((pos, i) => (
        <NetworkEdge
          key={`spoke-${i}`}
          from={hub}
          to={pos}
          color={DOMAINS[i].color}
          highlighted={hovered === i || active === i}
          packetCount={hovered === i || active === i ? 3 : 1}
        />
      ))}

      {/* Pentagon ring */}
      {ringEdges.map((e, i) => (
        <NetworkEdge
          key={`ring-${i}`}
          from={nodePositions[e.a]}
          to={nodePositions[e.b]}
          color={DOMAINS[e.a].color}
          highlighted={isLit(e.a, e.b)}
          packetCount={1}
        />
      ))}

      {/* Cross-links */}
      {crossEdges.map((e, i) => (
        <NetworkEdge
          key={`cross-${i}`}
          from={nodePositions[e.a]}
          to={nodePositions[e.b]}
          color="#a5e7ff"
          highlighted={isLit(e.a, e.b)}
          packetCount={1}
        />
      ))}

      <CentralHub />

      {DOMAINS.map((domain, i) => (
        <DomainNode
          key={domain.id}
          domain={domain}
          position={nodePositions[i]}
          index={i}
          hovered={hovered}
          active={active}
          setHovered={setHovered}
          setActive={setActive}
        />
      ))}
    </group>
  );
}

/* ─── Export ──────────────────────────────────────────── */
export default function HeroScene() {
  return (
    <>
      <OrbitControls
        enableZoom
        enablePan={false}
        minDistance={5}
        maxDistance={16}
        dampingFactor={0.06}
        enableDamping
        autoRotate
        autoRotateSpeed={0.3}
        target={[2.3, 0, 0]}
      />

      <ambientLight intensity={0.05} />
      <pointLight position={[5, 4, 5]} color="#00d2ff" intensity={2.8} />
      <pointLight position={[-5, -3, 4]} color="#edb1ff" intensity={1.6} />
      <pointLight position={[0, 3, -4]} color="#a5e7ff" intensity={0.7} />

      <FieldParticles />
      {/* Shift network to right half of the viewport */}
      <group position={[2.3, 0, 0]}>
        <NetworkScene />
      </group>
    </>
  );
}
