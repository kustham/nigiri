import { NextPage } from 'next'
import React from 'react'
import { useState } from 'react'
import styles from 'styles/recruit/recruit.module.scss'

type ModalProps = {
    close: (e: React.MouseEvent) => void
    children: React.ReactNode
}

const Modal: NextPage<ModalProps> = (props) => {
    const [isMouseDown, setIsMouseDown] = useState(false)

    const onMouseDown = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsMouseDown(true)
        }
    }

    const onMouseUp = (e: React.MouseEvent) => {
        if (isMouseDown) {
            props.close(e)
        }
        setIsMouseDown(false)
    }

    return (
        <div className={styles.modalOverlay} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            <div>
                {/* rome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                {React.cloneElement(props.children as any, {
                    close: props.close,
                })}
            </div>
        </div>
    )
}

export default Modal
