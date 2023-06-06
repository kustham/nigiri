import { NextPage } from 'next'
import '@/styles/globals.scss'
import KabaddiBoard from './components/kabaddi'
import SignBoard from './components/sign'

const Home: NextPage = () => {
    return (
        <main className='main'>
            <SignBoard />
            <KabaddiBoard />
        </main>
    )
}

export default Home
