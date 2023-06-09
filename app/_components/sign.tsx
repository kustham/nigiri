import styles from 'styles/components/sign.module.scss'
import { Yuji_Mai, Oswald } from 'next/font/google'

const yujiMai = Yuji_Mai({
    subsets: ['latin'],
    weight: '400',
})

const SignBoard = () => {
    return (
        <section className={styles.signSection}>
            <div className={`${styles.teamName} ${yujiMai.className}`}>阿國</div>
            <div className={styles.videoWrapper}>
                <video src='/back-fire.mp4' muted style={{ height: '100%', width: '100%' }} autoPlay playsInline loop />
            </div>
        </section>
    )
}

export default SignBoard
