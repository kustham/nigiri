'use client'
import { NextPage } from 'next'
import '@/styles/globals.scss'
import KabaddiBoard from './_components/kabaddi'
import SignBoard from './_components/sign'

import { ThemeProvider } from 'next-themes'
const Home: NextPage = () => {
    return (
        <ThemeProvider>
            <main className='main'>
                <SignBoard />
                <KabaddiBoard />
            </main>
        </ThemeProvider>
    )
}

export default Home
