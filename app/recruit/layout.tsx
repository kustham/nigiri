import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.scss'
import { Noto_Sans_JP } from 'next/font/google'

const noto = Noto_Sans_JP({
    subsets: ['latin'],
    weight: '300',
})

export const metadata = {
    title: 'Join Us'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ja'>
            <body className={noto.className}>
                <div className='agni-wrapper'>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
