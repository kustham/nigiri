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
                <span className={formStyle.buttonWall}></span>
                <button
                    type='submit'
                    className={formStyle.joinUsButton}
                >
                    <span className={formStyle.buttonContent}>
                        <GoRocket />
                        Join Us
                    </span>
                </button>
            </div>
        </section>
    )
}

export default FormPanel
