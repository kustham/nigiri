import 'styles/globals.scss'
import { Inter } from 'next/font/google'

export const metadata = {
    title: 'Kabaddi | Join Us',
    description:
        '広島から西日本のカバディを活性化させたい。広島市を拠点とするカバディチーム「安芸ライノセラス」はオープン練習を開催中、未経験者の体験希望を随時募集・歓迎しています。',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
