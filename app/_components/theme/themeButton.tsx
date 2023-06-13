import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import headerStyles from 'styles/components/header.module.scss'

export const ChangeThemeButton = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }

    return (
        <>
            <button
                className={headerStyles.themeToggle}
                id='theme-toggle'
                type='button'
                title='Toggles light &amp; dark'
                onClick={() => {
                    if (theme === 'light') {
                        return setTheme('dark')
                    }
                    return setTheme('light')
                }}
            >
                <svg className={headerStyles.sunMoon} aria-hidden='true' width='24' height='24' viewBox='0 0 24 24'>
                    <title>theme</title>
                    <mask className={headerStyles.moon} id='moon-mask'>
                        <rect x='0' y='0' width='100%' height='100%' fill='white' />
                        <circle cx='24' cy='10' r='6' fill='black' />
                    </mask>
                    <circle
                        className={headerStyles.sun}
                        cx='12'
                        cy='12'
                        r='6'
                        mask='url(#moon-mask)'
                        fill='currentColor'
                    />
                    <g className={headerStyles.sunBeams} stroke='currentColor'>
                        <line x1='12' y1='1' x2='12' y2='3' />
                        <line x1='12' y1='21' x2='12' y2='23' />
                        <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
                        <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
                        <line x1='1' y1='12' x2='3' y2='12' />
                        <line x1='21' y1='12' x2='23' y2='12' />
                        <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
                        <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
                    </g>
                </svg>
            </button>
        </>
    )
}
