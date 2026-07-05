import styles from './styles/values.module.css'

const Values = () => {
    return (
        <section id="values" className={styles.valuesContainer}>
            <div className={styles.header}>
                <h5>Values</h5>
                <h2>What we build against.</h2>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h3>Access over exclusivity</h3>
                    <p>
                        Pricing, language, platform, and design all bend toward reaching more aspirants — never toward protecting a premium.
                    </p>
                </div>

                <div className={styles.card}>
                    <h3>The individual over the average</h3>
                    <p>
                        A score tells you where you stand. It never tells you who you are. Preparation here is built around you, not the aggregate.
                    </p>
                </div>

                <div className={styles.card}>
                    <h3>Affordability as a constraint, not an afterthought</h3>
                    <p>
                        Built lean, on low-cost infrastructure, so the price stays honest and access stays real.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Values
