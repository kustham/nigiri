'use client'
import headerStyles from 'styles/components/header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

const Header = () => {
    const [isHeaderShown, setIsHeaderShown] = useState(true)
    const [lastPosition, setLastPosition] = useState(0)
    const headerHeight = 40

    const scrollEvent = useCallback(() => {
        const offset = window.pageYOffset

        if (offset > headerHeight) {
            setIsHeaderShown(false)
        } else {
            setIsHeaderShown(true)
        }

        if (offset < lastPosition) {
            setIsHeaderShown(true)
        }

        setLastPosition(offset)
    }, [lastPosition])

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent)

        return () => {
            window.removeEventListener('scroll', scrollEvent)
        }
    }, [scrollEvent])

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
                        <Link href='/achievement'>実績</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
