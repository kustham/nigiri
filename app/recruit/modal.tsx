import { NextPage } from 'next'
import React from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from 'styles/recruit/recruit.module.scss'

type ModalProps = {
    close: (e: any) => void
    children: React.ReactNode
}

const Modal: NextPage<ModalProps> = (props) => {
    const [isMouseDown, setIsMouseDown] = useState(false)

    const onMouseDown = (e: { target: any; currentTarget: any }) => {
        if (e.target === e.currentTarget) {
            setIsMouseDown(true)
        }
    }

    const onMouseUp = (e: MouseEvent) => {
        if (isMouseDown) {
            props.close(e)
        }
        setIsMouseDown(false)
    }

    return (
        <div className={styles.modalOverlay} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            <div>
                {React.cloneElement(props.children as any, {
                    close: props.close,
                })}
            </div>
        </div>
    )
}

export default Modal
