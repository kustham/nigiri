'use client'
import useResize from '@/hooks/useResize'
import useThree from '@/hooks/useThree'
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

const CourtModel: NextPage = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { windowWidth, windowHeight } = useResize()
    const { THREE, renderer, camera, scene } = useThree(canvasRef.current)

    useEffect(() => {
        if (!renderer || !camera) {
            return
        }

        camera.position.z = 4
        camera.position.x = 4
        camera.position.y = 2

        renderer.setSize(windowWidth, windowHeight)
        renderer.setPixelRatio(window.devicePixelRatio)

        //material
        const courtMaterial = new THREE.MeshStandardMaterial({
            color: '#b065c9',
            roughness: 0.6,
        })
        const lobbyMaterial = new THREE.MeshStandardMaterial({
            color: '#fea140',
            roughness: 0.6,
        })
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff })

        // geometry
        const bonusGeometry = new THREE.BoxGeometry(1.75, 0.05, 8)
        const baulkGeometry = new THREE.BoxGeometry(1, 0.05, 8)
        const edgesGeometry = new THREE.EdgesGeometry(bonusGeometry)
        const edgesGeometry2 = new THREE.EdgesGeometry(baulkGeometry)

        //mesh
        const bonusArea = new THREE.Mesh(bonusGeometry, courtMaterial)
        bonusArea.position.z = -7
        bonusArea.rotation.set(-3, 0, 0)

        const outline = new THREE.LineSegments(edgesGeometry, lineMaterial)
        bonusArea.add(outline)
        scene.add(bonusArea)

        // ライト
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
        scene.add(ambientLight)
        const pointLight = new THREE.PointLight(0xffffff, 1.0, 10, 0.9)
        pointLight.position.set(10, 10, 10)
        scene.add(pointLight)

        // アニメーション
        const clock = new THREE.Clock()
        const tick = () => {
            const elapsedTime = clock.getElapsedTime()
            bonusArea.rotation.y = elapsedTime * 0.1
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
