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
        <section>
            <div>
                <span className={formStyle.buttonWall} />
                <button type='submit' className={formStyle.joinUsButton}>
                    <GoRocket />
                    Join Us
                </button>
            </div>
        </section>
    )
}

export default ContactPanel
