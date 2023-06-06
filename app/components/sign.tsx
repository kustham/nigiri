import styles from 'styles/components/sign.module.scss'
import { Yuji_Mai, Oswald } from 'next/font/google'

const yujiMai = Yuji_Mai({
    subsets: ['latin'],
    weight: '400',
})

const oswald = Oswald({
    subsets: ['latin'],
    weight: '400',
})

const SignBoard = () => {
    return (
        <section className={styles.signSection}>
            <span className={`${styles.teamA} ${yujiMai.className}`}>阿</span>
            <span className={`${styles.echo} ${oswald.className}`}>
                The escape drama filled with 'contact', 'dodging', 'capturing', and 'tackle'.
            </span>
            <span className={`${styles.teamGni} ${yujiMai.className}`}>國</span>
        </section>
    )
}

export default SignBoard
