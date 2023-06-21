import kabaddiStyles from '@/styles/components/kabaddi.module.scss'
import { CourtModel } from '../models/court'

const CoreRule = () => {
    return (
        <>
            <div className={kabaddiStyles.ruleTitle}>
                <h2>
                    <span className={kabaddiStyles.rulesSubtitle}>Court</span>
                </h2>
                <br />
                <p>以下のコート内で７人ずつ，２０分ハーフで戦います。</p>
                <p>
                    敵陣に１人エントリーすることで攻撃（レイド）が始まります。レイドの制限時間は３０秒以内と定められています。
                </p>
            </div>

            <CourtModel />
        </>
    )
}
export default CoreRule
