import formStyles from 'styles/components/form.module.scss'

const Formpanel = () => {
    return (
        <section className={formStyles.hoge}>
            <h2>お問い合わせ</h2>
            <div className="relative">
                <button type="submit">
                    <span className={formStyles.joinus}>Join Us</span>
                </button>
            </div>
        </section>
    )
}

export default Formpanel
