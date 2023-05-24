import KabaddiStyle from '@/styles/components/kabaddi.module.scss'
import { Train_One } from 'next/font/google'

const trainOne = Train_One({
    subsets: ['latin'],
    weight: '400',
})

const KabaddiPanel = () => {
    return (
        <section className={KabaddiStyle.formSection}>
            <div className={trainOne.className}>kabaddi</div>
        </section>
    )
}

export default KabaddiPanel
