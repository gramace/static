"use client"; // if using App Router

import React, { useState } from "react";
import styles from "./styles/signup.module.css";
import { toast } from "sonner";
import Link from "next/link";

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("https://node.exameow.com/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            console.log("Response status:", res.json);

            if (res.ok) {
                toast("You’ve been added to the waitlist!");
                setEmail("");
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

            <div style={{
                marginTop: "auto",
                marginBottom: '0px',
                display: "flex", gap: "30px",
                fontSize: '12px', textAlign: 'center', letterSpacing: '1px',
                fontFamily: 'inherit', textTransform: 'uppercase',
                color: 'var(--text-muted)', justifyContent: "center",
            }}>
                <Link href="/account-deletion">Account deletion</Link>
                <Link href="/privacy-policy">Privacy policy</Link>
            </div >

        </section>
    );
};

export default SignUp;
