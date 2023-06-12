const AntiRule = () => {
    return (
        <>
            <h2>Anti</h2>
            <br />
            <h3>レイダーのタッチを避けつつ捕獲or場外のチャンスを探り, レイドを失敗させる</h3>
            <div>
                <h4>躱し - PARRY</h4>
                レイダーからのタッチを避ける．
            </div>
            <div>
                <h4>タックル - TACKLE</h4>
                コート外へ押し出してレイダーをアウトにする．または，捕獲することで行動不能状態にすることで帰還阻止する．
            </div>
            <div>
                <h4>スーパータックル - SUPER TACKLE</h4>
                アンティが3人以下の時にタックル成功した場合，追加で1点得点できる．
            </div>
        </>
    )
}
export default AntiRule
