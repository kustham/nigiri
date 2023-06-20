import kabaddiStyles from '@/styles/components/kabaddi.module.scss'
import { CourtModel } from '../models/court'

const CoreRule = () => {
    return (
        <>
            <div className={kabaddiStyles.ruleTitle}>
                <h2>Court</h2>
                <br />
                <p>以下のコート内で7人ずつに分かれて戦います。</p>
            </div>

            <CourtModel />
        </>
    )
}
export default CoreRule
