'use client'
import Modal from '@/recruit/modal'
import SendMailPanel from '@/recruit/sendMailPanel'
import recruitStyle from '@/styles/recruit/recruit.module.scss'
import { NextPage } from 'next'
import { Righteous } from 'next/font/google'
import { useState } from 'react'

const righteous = Righteous({
    subsets: ['latin'],
    weight: '400',
})

const RecruitPage: NextPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const toggleModal = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsOpenModal(!isOpenModal)
        }
    }
    return (
        <>
            <div className={recruitStyle.message}>
                <h1>プレイヤーの公募について</h1>
                <h2 className={recruitStyle.greetingTitle}>ご挨拶</h2>
                <div className={recruitStyle.greeting}>
                    <p>
                        国内において，幼少期からカバディに打ち込んできたプレイヤーは極めて稀有な存在であり，新規に競技を始められる方のほとんどは大学生以上です。身体が自由に動くのであれば，年齢は重要な要素ではありません。カバディは誰でも始めやすいスポーツです．
                    </p>
                    <p>
                        カバディの起源は野性的な狩猟にあり，極限の緊張下で取り組まれる駆け引きです．攻撃は帰還することに徹し，守りは帰還させないことに徹するため，激しく衝突することもあります．このような熱を帯びた局面の連続によって試合は構成されています．
                    </p>
                    <p>
                        もし，このページをご覧になっているあなたがまだカバディをプレイしたことがなければ，一度私たちの練習に参加してみませんか？
                    </p>
                </div>
                <h2 className={recruitStyle.greetingTitle}>募集要項</h2>
                <div className={recruitStyle.buttonContainer}>
                    <span className={recruitStyle.aura} />
                    <button
                        type='submit'
                        className={`${recruitStyle.joinUsButton} ${righteous.className}`}
                        onClick={toggleModal}
                    >
                        Join Agni
                    </button>
                </div>
            </div>
            {isOpenModal && (
                <Modal close={toggleModal}>
                    <SendMailPanel />
                </Modal>
            )}
        </>
    )
}

export default RecruitPage
