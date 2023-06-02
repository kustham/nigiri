'use client'
import messageStyle from '@/styles/components/message.module.scss'
import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react'
import { SymbolModel } from './models/symbolModel'

const MessagePanel = () => {
    const opinion = fields.opinion
    // Mere member recruitment website = non-functional museum
    // Concept = Gap + Excitement
    function sketch(p5: P5CanvasInstance) {
        const symbol: SymbolModel = new SymbolModel(p5)

        p5.setup = () => {
            p5.createCanvas(600, 400, p5.WEBGL)
        }

        p5.draw = () => {
            p5.background(0, 0, 0, 0)
            symbol.update()
            symbol.render()
        }
    }
    return (
        <>
            <div className={messageStyle.section}>
                <p>{opinion.text}</p>
                <ReactP5Wrapper sketch={sketch} />
            </div>
        </>
    )
}

const fields = { opinion: { text: 'a' } } as const

export default MessagePanel
