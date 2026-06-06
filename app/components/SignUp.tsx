import React from 'react'
import styles from './styles/signup.module.css'

const SignUp = () => {
    return (
        <section className={styles.container} id="waitlist">

            <div className={styles.header}>
                <h5>
                    Early Access
                </h5>

                <h2>
                    Be among the first.
                </h2>

                <p>
                    Exameow is in active development. Join the waitlist and we'll reach out when early access opens.
                </p>

            </div>


            <div className={styles.form}>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Join Now</button>
            </div>
        </section>
    )
}

export default SignUp
