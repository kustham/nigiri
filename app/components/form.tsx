import formStyle from '@/styles/components/form.module.scss'
import { Noto_Sans_JP } from 'next/font/google'
import { GoRocket } from 'react-icons/go'

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: '100',
})

const FormPanel = () => {
    return (
        <section>
            <div>
                <h2 className={notoSansJP.className}>お問い合わせ</h2>
            </div>
            <div className={formStyle.aura}>
                <div className={formStyle.joinUsButton}>
                    <GoRocket />
                    <button
                        type='submit'
                        className=''
                    >
                        Join Us
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FormPanel
