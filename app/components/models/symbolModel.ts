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

    update() {
        this.p.rotateX(this.p.radians(this.p.mouseX))
    }

    render() {
        //this.p.ambientLight(170, 160, 150)
        //this.p.pointLight(255,255,255,50,-100,80)
        this.p.push()
        this.p.directionalLight(120,120,220,-20,50,-30)
        this.p.specularMaterial(0,0,0)
        this.p.shininess(20)
        this.p.specularMaterial(250)
        this.p.ambientMaterial(100)
        this.p.noStroke()
        this.p.sphere(this.r)
        this.p.pop()
    }
}
