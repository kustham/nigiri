'use client'
import formStyle from '@/styles/components/form.module.scss'
import { Noto_Sans_JP } from 'next/font/google'
import { useState } from 'react'
import { GoRocket } from 'react-icons/go'

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: '100',
})

const FormPanel = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const sendMail = async () => {
        await fetch('../api/mail', {
            method: 'POST',
            body: `
名前
${name}

お問い合わせ内容
${message}
`,
        })
    }
    return (
        <>
            <div>
                <input type='text' onChange={(e) => setName(e.target.value)} />
                <textarea onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div>
                <span className={formStyle.buttonWall} />
                <button type='submit' className={formStyle.joinUsButton} onClick={sendMail}>
                    <span className={formStyle.buttonContent}>
                        <GoRocket />
                        Join Us
                    </span>
                </button>
            </div>
        </>
    )
}

export default FormPanel
