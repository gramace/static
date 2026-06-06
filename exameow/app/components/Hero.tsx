import Link from 'next/link'
import React from 'react'
import styles from './styles/hero.module.css'

const Hero = () => {
    return (
        <section className={styles.hero} id="#">
            <div className={styles.heroTopRow}>
                <div className={styles.tag}>Built for UPSC aspirants across India · MVP stage</div>
                <div className={styles.goalPill}>
                    <h4>Current Goal: <span>UPSC Prelims 2027</span></h4>
                </div>
            </div>
            <div className={styles['contentContainer']}>


                <div className={styles['hero-content']}>


                    <h1 >
                        A score tells you where you stand.
                    </h1>
                    <h2>
                        We show you who you are as an aspirant.
                    </h2>

                    <p>
                        A single mock takes five - six hours of your day and still leaves you guessing.
                        The mentors who could actually help are stretched across thousands of students.
                        Neither problem has been solved. <br />
                        <span style={{
                            color: 'var(--cta-orange)',
                            letterSpacing: '0.16rem', fontWeight: '900'

                        }}>ExaMeow is built to change that.</span>
                    </p>

                    <div className={styles['hero-buttons']}>
                        <Link href="/waitlist" className={styles['btn']}>Join Waitlist</Link>
                        <Link href="/features" className={styles['btn']}>Explore Features</Link>
                    </div>
                </div>
                <div className={styles.cardSection}>

                    <div className={styles.stats}>
                        <div>
                            <h3>5–6 hrs</h3>
                            <p>Saved per mock cycle</p>
                        </div>

                        <div>
                            <h3>Tier 2/3/4</h3>
                            <p>Who we're building for</p>
                        </div>

                        <div>
                            <h3>₹300</h3>
                            <p>Monthly access</p>
                        </div>
                    </div>
                    <div className={styles.keyPoints}>
                        <div>
                            <h3>Personalized Feedback</h3>
                            <p>Get detailed insights on your performance, strengths, and areas for improvement.</p>
                        </div>
                        <div>
                            <h3>Weak Area Detection</h3>
                            <p>AI-based recommendations and focus on the topics you need to improve.</p>
                        </div>
                        <div>
                            <h3>Mentor AI</h3>
                            <p>For all your quick questions and guidance.</p>
                        </div>
                        <div>
                            <h3>Preparation Consistency</h3>
                            <p>4 weeks of consistent preparation to keep you on track.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero
