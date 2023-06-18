import styles from 'styles/components/sign.module.scss'
import { Yuji_Mai } from 'next/font/google'

const yujiMai = Yuji_Mai({
    subsets: ['latin'],
    weight: '400',
})

const SignBoard = () => {
    return (
        <section className={styles.signSection}>
            <div className={`${styles.agni} ${yujiMai.className}`}>
                <h1 className={styles.title}>阿國</h1>
            </div>
        </section>
    )
}

export default SignBoard
