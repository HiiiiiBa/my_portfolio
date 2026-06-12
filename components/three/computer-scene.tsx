'use client'

import { useRef, useEffect, useCallback, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { ComputerSetup } from './computer-setup'

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const idleAngle = useRef(0)
  const isMoving = useRef(false)
  const moveTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    isMoving.current = true
    clearTimeout(moveTimeout.current)
    moveTimeout.current = setTimeout(() => {
      isMoving.current = false
    }, 150)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      clearTimeout(moveTimeout.current)
    }
  }, [onMouseMove])

  useFrame((_, delta) => {
    if (!groupRef.current) return

    idleAngle.current += delta * 0.12

    const targetX = mouse.current.y * 0.18
    const targetY = mouse.current.x * 0.35 + idleAngle.current

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      isMoving.current ? 0.06 : 0.02
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      isMoving.current ? 0.06 : 0.02
    )
  })

  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight
        position={[3, 5, 2]}
        intensity={0.6}
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[-2, 3, -1]} intensity={0.2} color="#8b5cf6" />
      <ComputerSetup groupRef={groupRef} />
    </>
  )
}

function CanvasResize() {
  const { gl, camera } = useThree()

  useEffect(() => {
    const handleResize = () => {
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [gl, camera])

  return null
}

function SceneLoader() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial color="#06b6d4" wireframe />
    </mesh>
  )
}

export function ComputerScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.8, 2.8], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
      }}
      style={{ background: 'transparent' }}
      shadows
    >
      <CanvasResize />
      <Suspense fallback={<SceneLoader />}>
        <SceneContent />
      </Suspense>
    </Canvas>
  )
}
