'use client'
import messageStyle from '@/styles/components/message.module.scss'
import { ReactP5Wrapper, Sketch } from '@p5-wrapper/react'

const MessagePanel = () => {
    // Mere member recruitment website = non-functional museum
    // Concept = Gap + Excitement
    const sketch: Sketch = (p5) => {
        p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL)

        p5.draw = () => {
            p5.background(0)
            p5.normalMaterial()
            p5.push()
            p5.rotateZ(p5.frameCount * 0.01)
            p5.rotateX(p5.frameCount * 0.01)
            p5.rotateY(p5.frameCount * 0.01)
            p5.plane(100)
            p5.pop()
        }
    }
    return (
        <>
            <ReactP5Wrapper sketch={sketch} />
            <div className={messageStyle.section}>
                <p>hoge</p>
            </div>
        </>
    )
}

export default MessagePanel
