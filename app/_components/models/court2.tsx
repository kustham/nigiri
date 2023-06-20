import { Canvas, useFrame } from '@react-three/fiber'
import { BoxGeometry, BufferGeometry, EdgesGeometry, Mesh } from 'three'
import React, { useRef } from 'react'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'
import { OrbitControls } from '@react-three/drei'

export const CourtModel = () => {
    const noLobbyRef = useRef<Mesh>(null)
    const lobbyRef = useRef<Mesh>(null)

    return (
        <Canvas camera={{ position: [4, 2.5, 4], fov: 50 }}>
            <mesh ref={noLobbyRef} scale={0.3}>
                <primitive
                    object={
                        new EdgesGeometry(
                            mergeGeometries([
                                new BoxGeometry(3.75, 0.05, 8).translate(3.75 / 2, 0, 0),
                                new BoxGeometry(1, 0.05, 8).translate(3.75 + 0.5, 0, 0),
                                new BoxGeometry(1.75, 0.05, 8).translate(1.75 / 2 + 4.75, 0, 0),
                                new BoxGeometry(3.75, 0.05, 8).translate(-(3.75 / 2), 0, 0),
                                new BoxGeometry(1, 0.05, 8).translate(-(3.75 + 0.5), 0, 0),
                                new BoxGeometry(1.75, 0.05, 8).translate(-(1.75 / 2 + 4.75), 0, 0),
                            ]),
                        )
                    }
                />
                <meshStandardMaterial color='#b065c9' roughness={0.1} />
            </mesh>

            <mesh ref={lobbyRef} scale={0.3}>
                <primitive
                    object={
                        new EdgesGeometry(
                            mergeGeometries([
                                new BoxGeometry(6.5, 0.05, 1).translate(6.5 / 2, 0, 4.5),
                                new BoxGeometry(6.5, 0.05, 1).translate(-6.5 / 2, 0, -4.5),
                                new BoxGeometry(6.5, 0.05, 1).translate(6.5 / 2, 0, -4.5),
                                new BoxGeometry(6.5, 0.05, 1).translate(-6.5 / 2, 0, 4.5),
                            ]),
                        )
                    }
                />
                <meshStandardMaterial color='#fea140' roughness={0.1} />
                <lineSegments>
                    <primitive object={new EdgesGeometry(lobbyRef.current?.geometry as BufferGeometry)} />
                    <lineBasicMaterial color={0xffffff} />
                </lineSegments>
            </mesh>
            <OrbitControls />
            <ambientLight />
        </Canvas>
    )
}

export default CourtModel
