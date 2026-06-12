'use client'

import { useRef, useMemo, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const KEY_ROWS = [
  { count: 14, z: 0.28 },
  { count: 14, z: 0.14 },
  { count: 14, z: 0 },
  { count: 13, z: -0.14 },
  { count: 8, z: -0.28, xOffset: 0.42 },
]

function Keyboard() {
  const keysRef = useRef<THREE.InstancedMesh>(null)

  const { positions, count } = useMemo(() => {
    const pos: THREE.Vector3[] = []
    KEY_ROWS.forEach((row) => {
      const startX = -((row.count - 1) * 0.09) / 2 + (row.xOffset ?? 0)
      for (let i = 0; i < row.count; i++) {
        pos.push(new THREE.Vector3(startX + i * 0.09 + (row.xOffset ?? 0), 0.025, row.z))
      }
    })
    return { positions: pos, count: pos.length }
  }, [])

  useLayoutEffect(() => {
    if (!keysRef.current) return
    const dummy = new THREE.Object3D()
    positions.forEach((p, i) => {
      dummy.position.copy(p)
      dummy.scale.set(0.07, 0.02, 0.07)
      dummy.updateMatrix()
      keysRef.current!.setMatrixAt(i, dummy.matrix)
    })
    keysRef.current.instanceMatrix.needsUpdate = true
  }, [positions])

  return (
    <group position={[0, 0.02, 0.55]}>
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.5, 0.04, 0.65]} />
        <meshStandardMaterial color="#1a1a1f" metalness={0.6} roughness={0.35} />
      </mesh>
      <instancedMesh ref={keysRef} args={[undefined, undefined, count]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#2a2a32" metalness={0.3} roughness={0.5} />
      </instancedMesh>
      <mesh position={[0, -0.01, 0]}>
        <boxGeometry args={[1.52, 0.005, 0.67]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}

function Mouse() {
  return (
    <group position={[1.05, 0.04, 0.55]} rotation={[0, -0.3, 0]}>
      <mesh castShadow>
        <capsuleGeometry args={[0.06, 0.1, 4, 8]} />
        <meshStandardMaterial color="#1e1e24" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.04, -0.02]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.03, 0.015, 0.04]} />
        <meshStandardMaterial color="#333" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.02, 0.04]}>
        <boxGeometry args={[0.08, 0.003, 0.12]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={1.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  )
}

function Monitor({ screenRef }: { screenRef: React.RefObject<THREE.Mesh | null> }) {
  return (
    <group position={[0, 0.55, -0.15]}>
      {/* Stand base */}
      <mesh position={[0, -0.42, 0.05]} castShadow>
        <boxGeometry args={[0.35, 0.02, 0.2]} />
        <meshStandardMaterial color="#141418" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Stand neck */}
      <mesh position={[0, -0.28, 0.05]} castShadow>
        <boxGeometry args={[0.06, 0.26, 0.06]} />
        <meshStandardMaterial color="#1a1a1f" metalness={0.6} roughness={0.35} />
      </mesh>
      {/* Bezel */}
      <mesh castShadow>
        <boxGeometry args={[1.4, 0.85, 0.05]} />
        <meshStandardMaterial color="#0d0d10" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Screen */}
      <mesh ref={screenRef} position={[0, 0, 0.026]}>
        <planeGeometry args={[1.28, 0.73]} />
        <meshStandardMaterial
          color="#0a1628"
          emissive="#1e40af"
          emissiveIntensity={0.6}
          metalness={0.1}
          roughness={0.1}
        />
      </mesh>
      {/* Screen glow overlay */}
      <mesh position={[0, 0, 0.027]}>
        <planeGeometry args={[1.28, 0.73]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* RGB strip under monitor */}
      <mesh position={[0, -0.44, 0.08]}>
        <boxGeometry args={[1.1, 0.008, 0.015]} />
        <meshStandardMaterial
          color="#ec4899"
          emissive="#ec4899"
          emissiveIntensity={1.5}
        />
      </mesh>
    </group>
  )
}

function PCTower({ rgbRef }: { rgbRef: React.RefObject<THREE.PointLight | null> }) {
  return (
    <group position={[-1.1, 0.35, -0.3]} rotation={[0, 0.4, 0]}>
      <mesh castShadow>
        <boxGeometry args={[0.28, 0.7, 0.55]} />
        <meshStandardMaterial color="#111116" metalness={0.7} roughness={0.25} />
      </mesh>
      {/* Glass side panel */}
      <mesh position={[0.141, 0, 0]}>
        <boxGeometry args={[0.005, 0.6, 0.45]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.05}
          transparent
          opacity={0.4}
        />
      </mesh>
      {/* RGB fans */}
      {[0.15, -0.05, -0.25].map((y, i) => (
        <mesh key={i} position={[0.12, y, 0]}>
          <circleGeometry args={[0.07, 16]} />
          <meshStandardMaterial
            color={['#06b6d4', '#8b5cf6', '#ec4899'][i]}
            emissive={['#06b6d4', '#8b5cf6', '#ec4899'][i]}
            emissiveIntensity={1.8}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
      <pointLight
        ref={rgbRef}
        position={[0.2, 0, 0]}
        intensity={0.4}
        distance={1.2}
        color="#8b5cf6"
      />
    </group>
  )
}

function Desk() {
  return (
    <group>
      <mesh position={[0, -0.01, 0.2]} receiveShadow>
        <boxGeometry args={[3.2, 0.02, 1.6]} />
        <meshStandardMaterial color="#1c1c22" metalness={0.2} roughness={0.8} />
      </mesh>
      <mesh position={[0, -0.005, 0.2]}>
        <boxGeometry args={[2.8, 0.003, 1.2]} />
        <meshStandardMaterial color="#12121a" roughness={0.9} />
      </mesh>
    </group>
  )
}

interface ComputerSetupProps {
  groupRef: React.RefObject<THREE.Group | null>
}

export function ComputerSetup({ groupRef }: ComputerSetupProps) {
  const screenRef = useRef<THREE.Mesh>(null)
  const towerRgbRef = useRef<THREE.PointLight>(null)
  const keyboardRgbRef = useRef<THREE.PointLight>(null)
  const monitorRgbRef = useRef<THREE.PointLight>(null)

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const hue = (t * 0.08) % 1

    if (towerRgbRef.current) {
      towerRgbRef.current.color.setHSL(hue, 1, 0.5)
    }
    if (keyboardRgbRef.current) {
      keyboardRgbRef.current.color.setHSL((hue + 0.33) % 1, 1, 0.5)
    }
    if (monitorRgbRef.current) {
      monitorRgbRef.current.color.setHSL((hue + 0.66) % 1, 1, 0.5)
    }
    if (screenRef.current) {
      const mat = screenRef.current.material as THREE.MeshStandardMaterial
      mat.emissive.setHSL(0.58 + Math.sin(t * 0.5) * 0.02, 0.7, 0.25)
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.15, 0]}>
      <Desk />
      <Monitor screenRef={screenRef} />
      <Keyboard />
      <Mouse />
      <PCTower rgbRef={towerRgbRef} />

      <pointLight
        ref={keyboardRgbRef}
        position={[0, 0.15, 0.55]}
        intensity={0.25}
        distance={1.5}
        color="#06b6d4"
      />
      <pointLight
        ref={monitorRgbRef}
        position={[0, 0.1, -0.15]}
        intensity={0.2}
        distance={1.8}
        color="#ec4899"
      />
    </group>
  )
}
