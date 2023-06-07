import headerStyles from 'styles/components/header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={headerStyles.agniHeader}>
            <nav className={headerStyles.agniNav}>
                <Image src='/resources/bar.png' width={100} height={50} alt='aGnI Logo' />
                <ul className={headerStyles.navMenu}>
                    <li>
                        <Link href='/recruit'>Join Us</Link>
                    </li>
                    <li>
                        <Link href='/achievement'>実績</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
