import { useEffect, useState } from 'react'
import * as THREE from 'three'

export default function useThree(canvas: HTMLCanvasElement | null) {
    const [renderer, setRenderer] = useState<THREE.WebGLRenderer>()
    const [camera, setCamera] = useState<THREE.PerspectiveCamera>()
    const [scene] = useState<THREE.Scene>(new THREE.Scene())

    scene.fog = new THREE.Fog(0x000000, 50, 2000)
    //scene.add(new THREE.AxesHelper(6))
    //scene.add(new THREE.GridHelper(5, 10))
    useEffect(() => {
        if (!canvas) {
            return
        }

        setRenderer(
            new THREE.WebGLRenderer({
                canvas,
                antialias: true,
                alpha: true,
            }),
        )
    }, [canvas])

    useEffect(() => {
        if (!renderer) {
            return
        }

        setCamera(new THREE.PerspectiveCamera(90, 1, 1, 100))
    }, [renderer])

    return { THREE, renderer, camera, scene }
}
