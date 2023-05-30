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
    const [to, setTo] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (!to || !subject || !body) return
        sendEmail(to, subject, body)
    }

    const sendEmail = async (to: string, subject: string, body: string) => {
        try {
            await import('@lib/denrei/pkg/denrei').then((module) => {
                const { send_email } = module
                send_email(to, subject, body)
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='to'>To:</label>
                    <input id='to' type='email' value={to} onChange={(e) => setTo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='subject'>Subject:</label>
                    <input id='subject' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='body'>Body:</label>
                    <textarea id='body' value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
            </form>
            <div>
                <span className={formStyle.buttonWall} />
                <button type='submit' className={formStyle.joinUsButton} onClick={handleSubmit}>
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
