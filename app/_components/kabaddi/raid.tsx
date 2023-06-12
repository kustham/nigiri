import kabaddiStyles from '@/styles/components/kabaddi.module.scss'

const RaidRule = () => {
    return (
        <>
            <div className={kabaddiStyles.ruleTitle}>
                <h2>Raid</h2>
                <br />
                <p>敵陣で敵にタッチして自陣に帰還することで，タッチした人数分を得点</p>
            </div>
            <div className={kabaddiStyles.ruleContainer}>
                <div className={kabaddiStyles.raidRule}>
                    <h3>キャント - CANT</h3>
                    <p>
                        敵陣にいる間は「カバディ」と発声し続ける。激しく連呼する必要はないが，タックルされて呻き声があがってしまったり，くしゃみ等の別の音を発するとアウトになる．
                    </p>
                </div>
                <div className={kabaddiStyles.raidRule}>
                    <h3>ストラグル - STRUGGLE</h3>
                    <p>
                        敵アンティに触れた瞬間から自陣に戻るまでの時間をストラグルという。
                        ストラグル中のコートはロビーまでを含める。
                    </p>
                </div>
                <div className={kabaddiStyles.raidRule}>
                    <h3>リターン - RETURN</h3>
                    <p>
                        体の一部がミッドラインを越えることで自分の陣地に帰ったことになる。
                        レイド中にボークラインを越えていれば，ストラグル無しでも帰ることができ、これをエンプティレイドという。
                        エンプティレイドは連続2回まで認められ，次のサードレイド（Do-or-Die）でエンプティレイドをしてしまうとアウトになる。
                    </p>
                </div>
                <div className={kabaddiStyles.raidRule}>
                    <h3>ボーナス - BONUS</h3>
                    <p>アンティが6人以上のときにボーナスラインの先に入ることで，1点得点できる。</p>
                </div>
            </div>
        </>
    )
}
export default RaidRule
