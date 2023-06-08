'use client'
import KabaddiStyle from '@/styles/components/kabaddi.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from 'swiper' //使いたい機能をインポート
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Pagination, Navigation])

const KabaddiBoard = () => {
    return (
        <section className={KabaddiStyle.kbdSection}>
            <Swiper
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                navigation
                loop={true}
            >
                <SwiperSlide className={KabaddiStyle.rulePanel}>
                    コート内で7人ずつのチームに分かれて戦う.15分ハーフで攻守を繰り返し, 点数の高いチームが勝利.
                </SwiperSlide>
                <SwiperSlide className={KabaddiStyle.rulePanel}>
                    攻撃:敵陣で敵にタッチして自陣に帰還することで，タッチした人数分を得点できる．
                    <ul>
                        <li>
                            敵陣に単独で侵入し,
                            30秒以内に自陣に戻らなければアウト.体の一部が自陣に入ると帰還したとみなされる.レイド中は「カバディ」と発声し続ける（キャント）.
                        </li>
                        <li>
                            【サードレイド】ボークラインを越えていれば, 誰に触れずとも帰れる（エンプティレイド）.
                            エンプティレイドの連続は２回まで認められる．
                        </li>
                        <li>
                            【ストラグルとロビー】敵アンティに触れた瞬間から自陣に戻るまでの時間をストラグルといい,
                            ストラグル中のコートはロビーを含める.
                        </li>
                        <li>【ボーナス】アンティが6人以上でボーナスラインを超えていれば, 得点時にプラス1点加算.</li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide className={KabaddiStyle.rulePanel}>
                    守り:レイダーのタッチを避けつつ捕獲or場外のチャンスを探り, レイドを失敗させる
                    <ul>
                        <li>レイドを失敗させると1点獲得.</li>
                        <li>アンティが3人以下で得点するとプラス1点加算（スーパータックル）.</li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide className={KabaddiStyle.rulePanel}>
                    アウトになった順番でコート外で待機する.味方が得点すると,
                    得点分の人数がコート内に復活する.ボーナスとスーパータックルの追加点は対象外.
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default KabaddiBoard
