'use client'
import recruitStyle from '@/styles/components/recruit.module.scss'
import { NextPage } from 'next'
import { Righteous } from 'next/font/google'

const righteous = Righteous({
    subsets: ['latin'],
    weight: '400',
})

//TODO:ボタンクリック時に挙動欲しい
const RecruitPage: NextPage = () => {
    return (
        <section>
            <h1>プレイヤー公募</h1>
            <p>
                幼少期からカバディに打ち込んできたプレイヤーという存在は極めてまれであり，新規に競技を始められる方のほとんどは大学生以上です．身体が自由に動くのであれば，年齢は重要な要素ではなく，誰でも始めやすいスポーツです．
            </p>
            <p>
                カバディの起源は野性的な狩猟にあり，極限の緊張下で取り組まれる駆け引きです．攻撃の責務は帰還することであり，守りの責務は帰還させないことであるため，激しく衝突することもあります．このような熱を帯びた局面の連続で試合は構成されています．
            </p>
            <p>
                もし，このページをご覧になっているあなたがまだカバディをプレイしたことがなければ，一度私たちの練習に参加してみませんか？心よりお待ちしております。
            </p>
            <div>
                <span className={recruitStyle.buttonWall} />
                <button type='submit' className={`${recruitStyle.joinUsButton} ${righteous.className}`}>
                    Join Agni
                </button>
            </div>
        </section>
    )
}

export default RecruitPage