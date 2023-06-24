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
                <p>タッチされた敵はアウトとなり，コート外待機となります。</p>
            </div>
            <div className={kabaddiStyles.ruleContainer}>
                <div className={kabaddiStyles.struggle}>
                    <GiMineExplosion />
                    <h3 className={kabaddiStyles.subsubtitle}>ストラグル</h3>
                    <p>
                        敵に触れた瞬間から帰還するまでの間をストラグルという。
                        ストラグル中のコートはロビーまで含める。
                    </p>
                </div>
                <div className={kabaddiStyles.cant}>
                    <RiUserVoiceLine />
                    <h3 className={kabaddiStyles.subsubtitle}>キャント</h3>
                    <p>
                        敵陣にいる間「カバディ」と発声し続ける。激しく連呼する必要はないが，別の音を発するとアウトになる。
                    </p>
                </div>
                <div className={kabaddiStyles.bonus}>
                    <LuPartyPopper />
                    <h3 className={kabaddiStyles.subsubtitle}>ボーナス</h3>
                    <p>アンティが6人以上のときにボーナスラインの先に入ることで，1点得点できる。</p>
                </div>
                <div className={kabaddiStyles.return}>
                    <GiReturnArrow />
                    <h3 className={kabaddiStyles.subsubtitle}>帰還</h3>
                    <p>
                        体の一部がミッドラインを越えることで自分の陣地に帰還できる。レイド中にボークラインを越えていれば，ストラグル無しでも帰ることができるが（エンプティレイド）、これを3回連続行ったレイダーはアウトになる。
                    </p>
                </div>
            </div>
        </div>
    )
}
export default RaidRule
