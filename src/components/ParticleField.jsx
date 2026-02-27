"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 500 }) {
    const ref = useRef();

    const data = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
            // Emerald/teal tones
            const c = new THREE.Color();
            c.setHSL(0.43 + Math.random() * 0.08, 0.7, 0.4 + Math.random() * 0.2);
            col[i * 3] = c.r;
            col[i * 3 + 1] = c.g;
            col[i * 3 + 2] = c.b;
        }
        return { pos, col };
    }, [count]);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        ref.current.rotation.y = t * 0.02;
        ref.current.rotation.x = Math.sin(t * 0.03) * 0.08;
        const positions = ref.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            positions[i * 3 + 1] += Math.sin(t * 0.5 + i * 0.2) * 0.0008;
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={data.pos} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={count} array={data.col} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.035} vertexColors transparent opacity={0.7} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
}

function Wireframe() {
    const ref = useRef();
    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        ref.current.rotation.x = t * 0.12;
        ref.current.rotation.y = t * 0.08;
        ref.current.position.y = Math.sin(t * 0.4) * 0.2;
    });

    return (
        <mesh ref={ref} position={[3, 0, -3]}>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.08} />
        </mesh>
    );
}

export default function ParticleField() {
    return (
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: "transparent" }} gl={{ antialias: true, alpha: true }}>
                <Particles count={400} />
                <Wireframe />
            </Canvas>
        </div>
    );
}
