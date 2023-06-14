import { greet } from '@/_lib/otegami/pkg/otegami'
import { NextPage } from 'next'
import styles from 'styles/recruit/recruit.module.scss'

type Props = {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    close?: (e: any) => void
}

// 入力フォームの型定義
type FormValues = {
    password: string
    confirmPassword: string
}

const SendMailPanel: NextPage<Props> = (props) => {
    return (
        <form className={styles.panel}>
            <label>お問い合わせ</label>
            <div />
            <footer>
                <button type='button' onClick={props.close}>
                    Cancel
                </button>
                <button
                    type='submit'
                    onClick={(e) => {
                        greet('test')
                    }}
                >
                    Send
                </button>
            </footer>
        </form>
    )
}

export default SendMailPanel
