'use client'
import Image from 'next/image'
import Modal from '@/_components/recruit/modal'
import SendMailPanel from '@/_components/recruit/sendMailPanel'
import recruitStyle from '@/styles/recruit/recruit.module.scss'
import { NextPage } from 'next'
import { Righteous } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'

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
        <div className={recruitStyle.message}>
            <div className={recruitStyle.recruitItem}>
                <h1 className={recruitStyle.subTitle}>プレイヤーの公募について</h1>
                <div className={recruitStyle.pr}>
                    <p>
                        新規に競技を始められる方のほとんどは大学生以上です。体が自由に動くのであれば，カバディは誰でも始めやすいスポーツです。
                    </p>
                    <p>カバディの起源は野性的な狩猟にあり，極限の緊張下で取り組まれる駆け引きです。</p>
                    <p>
                        もし，このページをご覧になっているあなたがまだカバディをプレイしたことがなければ，一度私たちの練習に参加してみませんか？
                    </p>
                </div>
            </div>
            <div className={recruitStyle.recruitItem}>
                <h2 className={recruitStyle.subTitle}>募集要項</h2>
                <table className={recruitStyle.conditions}>
                    <tbody>
                        <tr className={recruitStyle.conditionsCol}>
                            <th className={recruitStyle.conditionsRowTop}>ご年齢</th>
                            <td className={recruitStyle.conditionsRow}>18&nbsp;歳以上</td>
                        </tr>
                        <tr className={recruitStyle.conditionsCol}>
                            <th className={recruitStyle.conditionsRowTop}>定期練習</th>
                            <td className={recruitStyle.conditionsRow}>月に1&nbsp;回以上の参加が可能な方</td>
                        </tr>
                        <tr className={recruitStyle.conditionsCol}>
                            <th className={recruitStyle.conditionsRowTop}>大会</th>
                            <td className={recruitStyle.conditionsRow}>
                                毎年秋の西日本大会(広島市)へご参加いただける方
                            </td>
                        </tr>
                        <tr className={recruitStyle.conditionsCol}>
                            <th className={recruitStyle.conditionsRowTop}>スポーツ経験</th>
                            <td className={recruitStyle.conditionsRow}>不問</td>
                        </tr>
                        <tr className={recruitStyle.conditionsCol}>
                            <th className={recruitStyle.conditionsRowTop}>体重</th>
                            <td className={recruitStyle.conditionsRow}>85&nbsp;Kg未満</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer className={recruitStyle.footer}>
                <div className={recruitStyle.sns}>
                    <Link href={'https://www.instagram.com/agni.kabaddi/'}>
                        <Image priority src='/sns/insta.svg' width={24} height={24} alt='Follow us on Instagram' />
                    </Link>
                    <Link href={'https://twitter.com/agni_kabaddi'}>
                        <Image priority src='/sns/twitter.svg' width={24} height={24} alt='Follow us on Twitter' />
                    </Link>
                    <Link href={'https://t.co/vyqsuQ4nuk'}>
                        <Image priority src='/sns/line.svg' width={24} height={24} alt='Add our Line' />
                    </Link>
                </div>
                <div className={recruitStyle.buttonContainer}>
                    <span className={recruitStyle.aura} />
                    <button
                        type='submit'
                        className={`${recruitStyle.joinUsButton} ${righteous.className}`}
                        onClick={toggleModal}
                    >
                        Join Agni
                        <BsFillLightningChargeFill />
                    </button>
                </div>
                {isOpenModal && (
                    <Modal close={toggleModal}>
                        <SendMailPanel />
                    </Modal>
                )}
            </footer>
        </div>
    )
}

export default RecruitPage
