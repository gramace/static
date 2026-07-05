"use client"; // if using App Router

import React, { useState } from "react";
import styles from "./styles/signup.module.css";
import { toast } from "sonner";

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                toast("You’ve been added to the waitlist!");
                setEmail(""); // clear input
            } else {
                toast("Something went wrong, please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }

    };

    return (
        <section className={styles.container} id="waitlist">
            <div className={styles.header}>
                <h5>Early Access</h5>
                <h2>Be among the first.</h2>
                <p>
                    Exameow is in active development. Join the waitlist and we'll reach
                    out when early access opens.
                </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" disabled={!email || isSubmitting}>
                    {isSubmitting ? "Sending..." : "Join Waitlist"}
                </button>
            </form>
        </section>
    );
};

export default SignUp;
