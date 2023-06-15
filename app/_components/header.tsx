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
                    <Image src='/resources/bar.png' width={100} height={50} alt='aGnI Logo' />
                </Link>
                <ul className={headerStyles.navMenu}>
                    <li>
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
