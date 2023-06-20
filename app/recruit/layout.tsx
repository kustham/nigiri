import Footer from '@/_components/footer'
import recruitStyle from '@/styles/recruit/recruit.module.scss'

export const metadata = {
    title: 'Join Us',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <section className={recruitStyle.recruitSection}>{children}</section>
}
