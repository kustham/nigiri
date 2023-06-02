'use client'
import messageStyle from '@/styles/components/message.module.scss'
import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react'
import { SymbolModel } from './models/symbolModel'

const MessagePanel = () => {
    const opinion = fields.opinion
    // Mere member recruitment website = non-functional museum
    // Concept = Gap + Excitement
    function sketch(p5: P5CanvasInstance) {
        const symbols: SymbolModel[] = Array.from({ length: 50 }, (_,i) => new SymbolModel(i, p5.noise(1) * 50, p5));

        p5.setup = () => {
            p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
        }

        p5.draw = () => {
            p5.windowResized
            p5.translate(200,200);
            p5.background(0, 0, 0, 0)
            symbols.map((s) =>{
                s.update()
                s.render()
            }
            )
        }
    }
    return (
        <>
            <section className={messageStyle.msgSection}>
                <ReactP5Wrapper sketch={sketch} />
            </section>
        </>
    )
}

const fields = { opinion: { text: 'a' } } as const

export default MessagePanel
