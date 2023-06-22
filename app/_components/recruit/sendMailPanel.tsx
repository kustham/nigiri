import { NextPage } from 'next'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/recruit/recruit.module.scss'
type Props = {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    close?: (e: any) => void
}

type FormValues = {
    name: string
    email: string
    message: string
}

const SendMailPanel: NextPage<Props> = (props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        mode: 'onSubmit',
        criteriaMode: 'all',
    })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setSending(true)
        const res = await fetch('/api/linebot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data }),
        })
        if (res.ok) {
            setSending(false)
            setSent(true)
            reset()
        }
    }

    return (
        <form className={styles.panel} onSubmit={handleSubmit(onSubmit)}>
            <label>お問い合わせ</label>
            <div className={styles.panelForm}>
                <label>氏名</label>
                <input {...register('name', { required: true })} />
                <label>メールアドレス</label>
                <input
                    {...register('email', {
                        required: true,
                        maxLength: 60,
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: 'メールアドレスの形式が不正です',
                        },
                    })}
                />
                <div className={styles.errorMessage}>{errors.email?.message}</div>
                <label>メッセージ</label>
                <input {...register('message', { required: true })} className={styles.hoge} />
            </div>
            <div className={styles.formFooter}>
                <button type='button' onClick={props.close}>
                    {!sent ? 'Cancel' : '完了'}
                </button>
                {!sent && <button type='submit'>送信</button>}
                {sending && <div>送信しています...</div>}
            </div>
            {sent && (
                <div>お問い合わせありがとうございます。代表よりご記載のメールアドレスにご連絡させていただきます。</div>
            )}
        </form>
    )
}

export default SendMailPanel
