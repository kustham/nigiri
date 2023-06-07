import styles from 'styles/components/sign.module.scss'
import { Yuji_Mai, Oswald } from 'next/font/google'

const yujiMai = Yuji_Mai({
    subsets: ['latin'],
    weight: '400',
})

const SignBoard = () => {
    return (
        <section className={styles.signSection}>
            <div className={styles.teamName}>
                <div className={`${styles.teamA} ${yujiMai.className}`}>阿</div>
                <div className={`${styles.teamGni} ${yujiMai.className}`}>國</div>
            </div>
        </section>
    )
}

export default SignBoard
