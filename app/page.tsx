import { NextPage } from 'next'
import '@/styles/globals.scss'
import Footer from './components/footer'
import KabaddiBoard from './components/kabaddi'
import SignBoard from './components/sign'

const Home: NextPage = () => {
    return (
        <main className='main'>
            <SignBoard />
            <KabaddiBoard />
            <Footer />
        </main>
    )
}

export default Home
