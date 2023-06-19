'use client'
import headerStyles from 'styles/components/header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeThemeButton } from './theme/themeButton'

const Header = () => {
    return (
        <header className={headerStyles.agniHeader}>
            <nav className={headerStyles.agniNav}>
                <Link href='/'>
                    <Image src='/logo.svg' width={140} height={140} alt='logo' />
                </Link>
                <ul className={headerStyles.navMenu}>
                    <li className={headerStyles.joinus}>
                        <Link href='/recruit'>Join Us</Link>
                    </li>
                    <li>
                        <ChangeThemeButton />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
