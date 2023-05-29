import KabaddiStyle from '@/styles/components/kabaddi.module.scss'
import { Train_One } from 'next/font/google'

const trainOne = Train_One({
    subsets: ['latin'],
    weight: '400',
})

//コート内で7人ずつのチームに分かれて戦う.15分ハーフで攻守を繰り返し, 点数の高いチームが勝利.
//レイド：敵に触れて自陣に戻ることで点数を獲得.触られたアンティはアウト.
//1.敵陣に単独で侵入し, 30秒以内に自陣に戻らなければアウト.ミッドラインを体の一部が越えると戻ったことになる.レイド中は「カバディ」と発声し続ける（キャント）.
//2.【サードレイド】ボークラインを越えていれば, 誰に触れずとも帰れる（エンプティレイド）.3回連続でエンプティレイドすると3回目のレイダーがアウトし, 失点する.
//3.【ストラグルとロビー】敵アンティに触れた瞬間から自陣に戻るまでの時間をストラグルといい, ストラグル中のコートはロビーを含める.
//4.【ボーナス】アンティが6人以上でボーナスラインを超えていれば, 得点時にプラス1点加算.

//アンティ：レイダーのタッチを避けつつ捕獲or場外のチャンスを探り, レイドを失敗させる.
//1.レイドを失敗させると1点獲得.
//2.アンティが3人以下で得点するとプラス1点加算（スーパータックル）.

//アウト：アウトになった順番でコート外で待機する.味方が得点すると, 得点分の人数がコート内に復活する.ボーナスとスーパータックルの追加点は対象外.

const KabaddiPanel = () => {
    return (
        <section className={KabaddiStyle.formSection}>
            <div className={trainOne.className}>kabaddi</div>
        </section>
    )
}

export default KabaddiPanel
