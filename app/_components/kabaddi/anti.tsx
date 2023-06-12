import kabaddiStyles from '@/styles/components/kabaddi.module.scss'

const AntiRule = () => {
    return (
        <>
            <div className={kabaddiStyles.ruleTitle}>
                <h2>Anti</h2>
                <br />
                <p>レイダーのタッチを避けつつ捕獲or場外のチャンスを探り, レイドを失敗させる</p>
            </div>
            <div className={kabaddiStyles.ruleContainer}>
                <div className={kabaddiStyles.raidRule}>
                    <h3>躱し - PARRY</h3>
                    レイダーからのタッチを避ける．
                </div>
                <div className={kabaddiStyles.raidRule}>
                    <h3>タックル - TACKLE</h3>
                    コート外へ押し出してレイダーをアウトにする．または，捕獲することで行動不能状態にすることで帰還阻止する．
                </div>
                <div className={kabaddiStyles.raidRule}>
                    <h3>スーパータックル - SUPER TACKLE</h3>
                    アンティが3人以下の時にタックル成功した場合，追加で1点得点できる．
                </div>
            </div>
        </>
    )
}
export default AntiRule
