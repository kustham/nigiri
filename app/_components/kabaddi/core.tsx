import CourtModel from "../models/court"

const CoreRule = () => {
    return (
        <>
            <p>コート内で7人ずつのチームに分かれて戦う.15分ハーフで攻守を繰り返し, 点数の高いチームが勝利.</p>
            <CourtModel />
        </>
    )
}
export default CoreRule
