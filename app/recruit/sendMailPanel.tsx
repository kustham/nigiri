import { NextPage } from 'next'
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
    } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        /*
        fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'test@exsample.com',
                message: { ...data },
            }),
        })
        */
        console.log('finish')
    }

    return (
        <form className={styles.panel} onSubmit={handleSubmit(onSubmit)}>
            <label>お問い合わせ</label>
            <div>
                <input {...register('name')} />
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
                <input {...register('message')} />
            </div>
            <div className={styles.formFooter}>
                <button type='button' onClick={props.close}>
                    Cancel
                </button>
                <button type='submit'>Send</button>
            </div>
        </form>
    )
}

export default SendMailPanel
