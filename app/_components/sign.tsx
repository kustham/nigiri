import Image from 'next/image'
import styles from 'styles/components/sign.module.scss'

const SignBoard = () => {
    return (
        <section className={styles.signSection}>
            <div className={styles.center}>
                <Image className={styles.logo} src='/logo.svg' alt='Agni Logo' fill priority />
            </div>
        </section>
    )
}

export default SignBoard
