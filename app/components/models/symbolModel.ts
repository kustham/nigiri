import { P5CanvasInstance } from '@p5-wrapper/react'

export class SymbolModel {
    id: number
    r: number
    p: P5CanvasInstance

    constructor(id:number, r:number, p: P5CanvasInstance) {
        this.id = id
        this.r = r
        this.p = p
    }

    render() {
        this.p.noStroke()
        this.p.sphere(this.r)
        this.p.pop()
    }

    update() {
        this.p.ambientLight(170, 160, 150)
        this.p.pointLight(255,255,255,50,-100,80)
        this.p.push()
        this.p.directionalLight(120,120,220,-20,50,-30)
        this.p.specularMaterial(0,0,0)
        this.p.shininess(20)
        this.p.specularMaterial(250)
        this.p.ambientMaterial(100)
        this.p.rotateZ(this.p.frameCount * 0.01 + this.id)
        this.p.shearX(this.p.frameCount * 0.01 + this.id)
        this.p.shearY(this.p.frameCount * 0.01 + this.id)
    }
}
