'use client'
import useResize from '@/hooks/useResize'
import useThree from '@/hooks/useThree'
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'

const COURT_SCALE = 0.5

const CourtModel: NextPage = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { windowWidth, windowHeight } = useResize()
    const { THREE, renderer, camera, scene } = useThree(canvasRef.current)

    useEffect(() => {
        if (!renderer || !camera) {
            return
        }
        camera.position.set(6, 7, 6)
        camera.fov = 50

        renderer.setSize(windowWidth, windowHeight)
        renderer.setPixelRatio(window.devicePixelRatio)

        //material
        const courtMaterial = new THREE.MeshStandardMaterial({
            color: '#b065c9',
            roughness: 5.6,
        })
        const lobbyMaterial = new THREE.MeshStandardMaterial({
            color: '#fea140',
            roughness: 0.6,
        })
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff })

        // geometry
        const fieldGeometry = mergeGeometries([
            new THREE.BoxGeometry(3.75, 0.05, 8).translate(3.75 / 2, 0, 0),
            new THREE.BoxGeometry(1, 0.05, 8).translate(3.75 + 0.5, 0, 0),
            new THREE.BoxGeometry(1.75, 0.05, 8).translate(1.75 / 2 + 4.75, 0, 0),
            new THREE.BoxGeometry(3.75, 0.05, 8).translate(-(3.75 / 2), 0, 0),
            new THREE.BoxGeometry(1, 0.05, 8).translate(-(3.75 + 0.5), 0, 0),
            new THREE.BoxGeometry(1.75, 0.05, 8).translate(-(1.75 / 2 + 4.75), 0, 0),
        ])
        const lobbyGeometry = mergeGeometries([
            new THREE.BoxGeometry(6.5, 0.05, 1).translate(6.5 / 2, 0, 4.5),
            new THREE.BoxGeometry(6.5, 0.05, 1).translate(6.5 / 2, 0, -4.5),
            new THREE.BoxGeometry(6.5, 0.05, 1).translate(-6.5 / 2, 0, 4.5),
            new THREE.BoxGeometry(6.5, 0.05, 1).translate(-6.5 / 2, 0, -4.5),
        ])
        const edgesFieldGeometry = new THREE.EdgesGeometry(fieldGeometry)
        const edgesLobbyGeometry = new THREE.EdgesGeometry(lobbyGeometry)
        //mesh
        const noLobby = new THREE.Mesh(fieldGeometry, courtMaterial)
        const lobby = new THREE.Mesh(lobbyGeometry, lobbyMaterial)
        noLobby.scale.set(COURT_SCALE, COURT_SCALE, COURT_SCALE)
        lobby.scale.set(COURT_SCALE, COURT_SCALE, COURT_SCALE)
        const outline = new THREE.LineSegments(edgesFieldGeometry, lineMaterial)
        const lineLobby = new THREE.LineSegments(edgesLobbyGeometry, lineMaterial)
        noLobby.add(outline)
        lobby.add(lineLobby)
        scene.add(noLobby, lobby)

        // ライト
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
        scene.add(ambientLight)
        const pointLight = new THREE.PointLight(0xffffff, 1.0, 10, 0.9)
        pointLight.position.set(10, 10, 10)
        scene.add(pointLight)

        // アニメーション
        const clock = new THREE.Clock()
        const tick = () => {
            camera.lookAt(new THREE.Vector3(0, 0, 0))
            const elapsedTime = clock.getElapsedTime()
            noLobby.rotation.y = elapsedTime * 0.07
            lobby.rotation.y = elapsedTime * 0.07
            window.requestAnimationFrame(tick)
            renderer.render(scene, camera)
        }
        tick()
    }, [renderer, camera])

    // ブラウザのリサイズ処理
    useEffect(() => {
        if (!renderer || !camera) {
            return
        }

        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(windowWidth, windowHeight)
        camera.aspect = windowWidth / windowHeight
        camera.updateProjectionMatrix()
    }, [renderer, camera, windowWidth, windowHeight])

    return (
        <>
            <canvas ref={canvasRef} />
        </>
    )
}

export default CourtModel
