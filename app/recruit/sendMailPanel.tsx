import { NextPage } from 'next'
import styles from 'styles/recruit/recruit.module.scss'

type Props = {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    close?: (e: any) => void
}

const SendMailPanel: NextPage<Props> = (props) => {
    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (props.close) {
            props.close(e)
        }
    }

    return (
        <section className={styles.panel}>
            <header>
                <h3>Modal Panel!</h3>
            </header>
            <div>Hi! Nice to meet you!</div>
            <footer>
                <button type='button' onClick={props.close}>
                    Cancel
                </button>
                <button type='submit' onClick={submit}>
                    OK
                </button>
            </footer>
        </section>
    )
}

export default SendMailPanel
