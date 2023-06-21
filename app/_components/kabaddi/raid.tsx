import kabaddiStyles from '@/styles/components/kabaddi.module.scss'
import { RiUserVoiceLine } from 'react-icons/ri'
import { GiMineExplosion, GiReturnArrow } from 'react-icons/gi'
import { LuPartyPopper } from 'react-icons/lu'

const RaidRule = () => {
    return (
        <div>
            <div className={kabaddiStyles.ruleTitle}>
                <h2>
                    <span className={kabaddiStyles.rulesSubtitle}>How to Raid</span>
                </h2>
                <br />
                <p>レイダーが敵にタッチして自陣に帰還することで，タッチした人数分を得点できます。</p>
                <p>タッチされた敵はアウトとなり，コート外待機します。</p>
            </div>
            <div className={kabaddiStyles.ruleContainer}>
                <div className={kabaddiStyles.struggle}>
                    <GiMineExplosion />
                    <h3>ストラグル - STRUGGLE</h3>
                    <p>
                        敵に触れた瞬間から自陣に戻るまでの時間をストラグルという。
                        ストラグル中のコートはロビーまでを含める。
                    </p>
                </div>
                <div className={kabaddiStyles.cant}>
                    <RiUserVoiceLine />
                    <h3>キャント - CANT</h3>
                    <p>
                        敵陣にいる間は「カバディ」と発声し続ける。激しく連呼する必要はないが，タックルされて呻き声があがってしまった等の別の音を発するとアウトになる。
                    </p>
                </div>
                <div className={kabaddiStyles.bonus}>
                    <LuPartyPopper />
                    <h3>ボーナス - BONUS</h3>
                    <p>アンティが6人以上のときにボーナスラインの先に入ることで，1点得点できる。</p>
                </div>
                <div className={kabaddiStyles.return}>
                    <GiReturnArrow />
                    <h3>帰還 - RETURN</h3>
                    <p>
                        体の一部がミッドラインを越えることで自分の陣地に帰還することができる。ストラグルが発生した場合はこのとき得点する。
                        レイド中にボークラインを越えていれば，ストラグル無しでも帰ることができ、これをエンプティレイドという。
                        ただし，エンプティレイドを3回連続行うとRaiderがアウトになる。また，アウトにした敵の人数分，アウトになっている味方がコートに復活する。
                    </p>
                </div>
            </div>
        </div>
    )
}
export default RaidRule
