'use client'
import { NextPage } from 'next'
import '@/styles/globals.scss'
import KabaddiBoard from './_components/kabaddi'
import SignBoard from './_components/sign'
import Footer from './_components/footer'

const Home: NextPage = () => {
    return (
        <>
            <main className='main'>
                <SignBoard />
                <KabaddiBoard />
            </main>
            <Footer />
        </>
    )
}

export default Home
