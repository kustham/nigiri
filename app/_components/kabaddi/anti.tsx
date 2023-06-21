import kabaddiStyles from '@/styles/components/kabaddi.module.scss'

const AntiRule = () => {
    return (
        <>
            <div className={kabaddiStyles.ruleTitle}>
                <h2>Anti</h2>
                <br />
                <p>キャッチングやタックル等により，敵レイドを失敗させることで１点得点できます。</p>
                <p>アンティが３人以下の時にレイドを失敗させた場合，追加で１点得点できます．（スーパータックル）</p>
            </div>
        </>
    )
}
export default AntiRule
