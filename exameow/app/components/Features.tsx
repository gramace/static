import styles from './styles/features.module.css'
const Features = () => {
    return (
        <div id="features">
            <section className={styles.featureContainer}>
                <div className={styles.header}>
                    <h5>Features</h5>
                    <h2>
                        Not a replacement for hard work.
                    </h2>
                    <h1>A mirror for it.</h1>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h3>Adaptive Test Generation</h3>
                        <p>
                            Every mock learns from your last one. Weak areas get harder. Strong areas move forward. Nothing repeats without reason.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>AI Strategy Mentor</h3>
                        <p>
                            Not generic advice. A mentor that knows your specific patterns, your recurring mistakes, and your preparation identity.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Continuous Revision Loops</h3>
                        <p>
                            Spaced repetition and recurring exposure to weak topics for retention.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Mobile First Experience</h3>
                        <p>
                            Designed for aspirants across Tier 2, 3 and 4 India with smartphone access.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.container}>
                <div className={styles.mission}>
                    <h5>Mission</h5>
                    <h2>
                        The gap between data and understanding is where most dreams quietly end.
                    </h2>
                    <div className={styles.quote}>
                        <p>
                            Most aspirants don't fail for lack of effort. They fail in the dark — unable to decode their own results, drowning in contradictory advice, with no system that actually knows them. Built for the cities and the students the system was never designed around.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Features
