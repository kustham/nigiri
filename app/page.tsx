import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const MessagePanel = dynamic(() => import('./components/messagePanel'), {
    ssr: false,
})

const KabaddiPanel = dynamic(() => import('./components/kabaddiPanel'), {
    ssr: false,
})

const Formpanel = dynamic(() => import('./components/formPanel'), {
    ssr: false,
})
const WantedPage: NextPage = () => {
    return (
        <>
            <main className="h-screen">
                <MessagePanel />
                <KabaddiPanel />
                <Formpanel />
            </main>
        </>
    )
}

export default WantedPage
