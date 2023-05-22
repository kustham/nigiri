import '@/styles/globals.scss'
import { Inter } from 'next/font/google'
import { Oswald } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })

export const metadata = {
    title: 'Join Us | Kabaddi',
    description:
        '広島から西日本のカバディを活性化させたい。広島市を拠点とするカバディチーム「ライノセラス」はオープン練習を開催中、未経験者の体験希望を随時募集・歓迎しています。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ja'>
            <body className={oswald.className}>{children}</body>
        </html>
    )
}
