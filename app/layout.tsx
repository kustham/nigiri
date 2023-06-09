'use client'
import '@/styles/globals.scss'
import { Noto_Sans_JP } from 'next/font/google'
import Footer from './_components/footer'
import Header from './_components/header'
import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

const noto = Noto_Sans_JP({
    subsets: ['latin'],
    weight: '300',
})

const siteName = '阿國'
const description = '広島市を拠点に活動しているカバディチーム「阿國」は、未経験者の体験希望を随時募集・歓迎しています。'
const url = 'https://www.agni.ninja'

export const metadata: Metadata = {
    title: {
        default: siteName,
        template: `%s | ${siteName}`,
    },
    icons: {
        icon: '/_next/static/media/metadata/favicon.png',
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
            <body className={noto.className}>
                <ThemeProvider>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
