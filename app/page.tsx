import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import '@/styles/globals.scss'
import Footer from './components/footer'
import KabaddiPanel from './components/kabaddi'
import ContactPanel from './components/contact'
import SignBoard from './components/sign'

const MessagePanel = dynamic(() => import('./components/message'), { ssr: false })

const Home: NextPage = () => {
    return (
        <main className='main'>
            <SignBoard />
            <KabaddiPanel />
            <ContactPanel />
            <Footer />
        </main>
    )
}

export default Home
