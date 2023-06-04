import styles from 'styles/components/sign.module.scss'
import { Yuji_Mai } from 'next/font/google'

const yujiMai = Yuji_Mai({
    subsets: ['latin'],
    weight: '400',
})

const SignBoard = () => {
    return (
        <section className={styles.signSection}>
            <span className={`${styles.teamName} ${yujiMai.className}`}>阿</span>
            <span className={`${styles.teamName} ${yujiMai.className}`}>國</span>
        </section>
    )
}

export default SignBoard
