'use client'
import messageStyle from '@/styles/components/message.module.scss'
import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react'
import { Foo } from './ga/foo'

const MessagePanel = () => {
    // Mere member recruitment website = non-functional museum
    // Concept = Gap + Excitement
    function sketch(p5: P5CanvasInstance) {
        const wk: Foo = new Foo(p5)

        p5.setup = () => {
            p5.createCanvas(600, 400, p5.WEBGL)
        }

        p5.draw = () => {
            p5.background(250, 0, 0, 0)
            p5.normalMaterial()
            p5.push()
            p5.rotateZ(p5.frameCount * 0.01)
            p5.rotateX(p5.frameCount * 0.01)
            p5.rotateY(p5.frameCount * 0.01)
            p5.plane(100)
            p5.pop()
            wk.step()
            wk.render()
        }
    }
    return (
        <>
            <div className={messageStyle.section}>
                <p>hoge</p>
                <ReactP5Wrapper sketch={sketch} />
            </div>
        </>
    )
}

export default MessagePanel
