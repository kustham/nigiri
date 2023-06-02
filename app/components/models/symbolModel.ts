import { P5CanvasInstance } from '@p5-wrapper/react'

export class SymbolModel {
    x: number
    y: number
    p: P5CanvasInstance

    constructor(p: P5CanvasInstance) {
        this.x = p.width / 3
        this.y = p.height / 10
        this.p = p
    }

    render() {
        this.p.stroke(255)
        this.p.strokeWeight(10)
        this.p.point(this.x, this.y)
    }

    update() {
        this.p.push()
        this.p.rotateZ(this.p.frameCount * 0.01)
        this.p.rotateX(this.p.frameCount * 0.01)
        this.p.rotateY(this.p.frameCount * 0.01)
        this.p.box(50, 50, 50, 0, 0)
        this.p.pop()
        const choice = Math.floor(this.p.random(4))
        if (choice === 0) {
            this.x++
        } else if (choice === 1) {
            this.x--
        } else if (choice === 2) {
            this.y++
        } else {
            this.y--
        }
        this.x = this.p.constrain(this.x, 0, this.p.width - 1)
        this.y = this.p.constrain(this.y, 0, this.p.height - 1)
    }
}
