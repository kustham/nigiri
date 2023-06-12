import kabaddiStyles from '@/styles/components/kabaddi.module.scss'

const MatchRule = () => {
    return (
        <>
            <div className={kabaddiStyles.ruleTitle}>
                <h2>試合の流れ</h2>
                <br />
                <p>15分ハーフで攻守を繰り返し, 点数の高いチームが勝利.</p>
            </div>

            <h3>アウト - OUT</h3>
            アウトになった順番でコート外で待機する.味方が得点すると,
            得点分の人数がコート内に復活する.ボーナスとスーパータックルの追加点は対象外.
        </>
    )
}
export default MatchRule
