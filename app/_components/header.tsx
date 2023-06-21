'use client'
import headerStyles from 'styles/components/header.module.scss'
import Link from 'next/link'
import { ChangeThemeButton } from './theme/themeButton'
import { Unbounded, Oxanium } from 'next/font/google'

const unbounded = Unbounded({
    subsets: ['latin'],
    weight: '800',
})

const oxanium = Oxanium({
    subsets: ['latin'],
    weight: '500',
})

const Header = () => {
    return (
        <header className={headerStyles.agniHeader}>
            <nav className={headerStyles.agniNav}>
                <Link href='/'>
                    <h1 className={`${headerStyles.teamName} ${unbounded.className}`}>
                        <span className={headerStyles.agni}>AGNi</span> <br />
                        HIROSHIMa KABADDi TEAm
                    </h1>
                </Link>
                <ul className={`${headerStyles.navMenu} ${oxanium.className}`}>
                    <li className={headerStyles.joinus}>
                        <Link href='/recruit'>Join Us</Link>
                    </li>
                    {/*
                    <li className={headerStyles.theme}>
                        <ChangeThemeButton />
                    </li>
                    */}
                </ul>
            </nav>
        </header>
    )
}

export default Header
