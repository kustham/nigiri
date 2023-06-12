import kabaddiStyles from '@/styles/components/kabaddi.module.scss'

const RaidRule = () => {
    return (
        <>
            <h2>Raid</h2>
            <br />
            <h3>敵陣で敵にタッチして自陣に帰還することで，タッチした人数分を得点</h3>
            <div className={kabaddiStyles.ruleContainer}>
                <div className={kabaddiStyles.rule}>
                    <h4>キャント - CANT</h4>
                    <p>
                        30秒以内に自陣に戻らなければアウト.体の一部が自陣に入ると帰還したとみなされる.レイド中は「カバディ」と発声し続ける（キャント）.
                    </p>
                </div>
                <div className={kabaddiStyles.rule}>
                    <h4>ストラグル - STRUGGLE</h4>
                    敵アンティに触れた瞬間から自陣に戻るまでの時間をストラグルといい,
                    ストラグル中のコートはロビーを含める.
                </div>
                <div className={kabaddiStyles.rule}>
                    <h4>リターン - RETURN</h4>
                    ボークラインを越えていれば, 誰に触れずとも帰れる（エンプティレイド）.
                    エンプティレイドの連続は２回まで認められる．
                </div>
                <div className={kabaddiStyles.rule}>
                    <h4>ボーナス - BONUS</h4>
                    アンティが6人以上でボーナスラインを超えていれば, 1点加算.
                </div>
            </div>
        </>
    )
}
export default RaidRule
