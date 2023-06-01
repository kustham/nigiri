import '@/styles/globals.scss'
import { Inter } from 'next/font/google'
import { Oswald } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })

const siteName = '阿國'
const description = '広島市を拠点に活動しているカバディチーム「阿國」は、未経験者の体験希望を随時募集・歓迎しています。'
const url = 'https://www.agni.ninja'

export const metadata = {
    title: {
        default: siteName,
        template: `%s | ${siteName}`,
    },
    description,
    openGraph: {
        title: siteName,
        description,
        url,
        siteName,
        locale: 'ja_JP',
        type: 'website',
    },
    alternates: {
        canonical: url,
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ja'>
            <body className={oswald.className}>{children}</body>
        </html>
    )
}
