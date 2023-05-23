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
            <div className={formStyle.formSection}>
                <button
                    type='submit'
                    className={formStyle.button}
                >
                    <GoRocket />
                    <span>Join Us</span>
                </button>
            </div>
            <div className={formStyle.buttonContainer}>
                <span className={formStyle.tooltipContainer}>
                    <button
                        type='submit'
                        className={`${formStyle.buttonBase} ${formStyle.tooltipContainer} ${formStyle.resetReset} ${formStyle.buttonButton} ${formStyle.buttonSecondary} ${formStyle.buttonText}`}
                    >
                        <span className={formStyle.buttonContent}>
                            <span className={formStyle.aura}>
                                <GoRocket />
                            </span>
                            <span className={formStyle.auraText}>Join Us</span>
                        </span>
                    </button>
                </span>
            </div>
        </section>
    )
}

export default FormPanel
