import styles from '@/styles/components/page.module.scss'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const MessagePanel = dynamic(() => import('./components/message'), { ssr: false })

const KabaddiPanel = dynamic(() => import('./components/kabaddi'), { ssr: false })

const FormPanel = dynamic(() => import('./components/form'), { ssr: false })

const WantedPage: NextPage = () => {
    console.log('Have a Good day.')

    return (
        <main className={styles.main}>
            <MessagePanel />
            <KabaddiPanel />
            <FormPanel />
            <div className={styles.grid}>
                <a
                    href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a
                    href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </a>

                <a
                    href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore the Next.js 13 playground.</p>
                </a>

                <a
                    href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
                </a>
            </div>
        </main>
    )
}

export default WantedPage
