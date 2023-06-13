import footerStyles from 'styles/components/footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={footerStyles.agniFooter}>
            <div className={footerStyles.copy}>&copy; Agni 2023</div>
            <div className={footerStyles.sns}>
                <Link href={'https://www.instagram.com/agni.kabaddi/'}>
                    <Image priority src='/sns/insta.svg' width={24} height={24} alt='Follow us on Instagram' />
                </Link>
                <Link href={'https://twitter.com/agni_kab'}>
                    <Image priority src='/sns/twitter.svg' width={24} height={24} alt='Follow us on Twitter' />
                </Link>
            </div>
    </footer>
    )
}

export default Footer
