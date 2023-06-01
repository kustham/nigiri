'use client'
import formStyle from '@/styles/components/contact.module.scss'
import { Noto_Sans_JP } from 'next/font/google'
import { GoRocket } from 'react-icons/go'

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: '100',
})

const ContactPanel = () => {

    return (
        <>
            <div>
                <span className={formStyle.buttonWall} />
                <button type='submit' className={formStyle.joinUsButton}>
                    <span className={formStyle.buttonContent}>
                        <GoRocket />
                        Join Us
                    </span>
                </button>
            </div>
        </>
    )
}

export default ContactPanel
