"use client"; // if using App Router

import React, { useState } from "react";
import styles from "./styles/signup.module.css";
import { toast } from "sonner";
import Link from "next/link";

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getDeviceInfo = () => {
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const language = navigator.language;
        
        // Parse device info from user agent
        let deviceType = "Unknown";
        let browser = "Unknown";
        let os = "Unknown";
        
        if (/Mobile|Android|iPhone|iPad|iPod/.test(userAgent)) {
            deviceType = "Mobile";
        } else if (/Tablet|iPad/.test(userAgent)) {
            deviceType = "Tablet";
        } else {
            deviceType = "Desktop";
        }
        
        if (/Chrome/.test(userAgent) && !/Chromium/.test(userAgent)) {
            browser = "Chrome";
        } else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
            browser = "Safari";
        } else if (/Firefox/.test(userAgent)) {
            browser = "Firefox";
        } else if (/Edge/.test(userAgent)) {
            browser = "Edge";
        }
        
        if (/Windows/.test(userAgent)) {
            os = "Windows";
        } else if (/Mac/.test(userAgent)) {
            os = "macOS";
        } else if (/Linux/.test(userAgent)) {
            os = "Linux";
        } else if (/iPhone|iPad|iPod/.test(userAgent)) {
            os = "iOS";
        } else if (/Android/.test(userAgent)) {
            os = "Android";
        }
        
        return {
            userAgent,
            deviceType,
            browser,
            os,
            platform,
            language,
            screenResolution: `${window.innerWidth}x${window.innerHeight}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
    };

    const getIpAddress = async () => {
        try {
            const response = await fetch("https://api.ipify.org?format=json");
            const data = await response.json();
            return data.ip;
        } catch (error) {
            console.error("Failed to fetch IP:", error);
            return "Unknown";
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const deviceInfo = getDeviceInfo();
            const ipAddress = await getIpAddress();
            
            const payload = {
                email,
                ip_address: ipAddress,
                device_type: deviceInfo.deviceType,
                browser: deviceInfo.browser,
                os: deviceInfo.os,
                user_agent: deviceInfo.userAgent,
                screen_resolution: deviceInfo.screenResolution,
                language: deviceInfo.language,
                timezone: deviceInfo.timezone
            };

            const res = await fetch("https://node.exameow.com/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            console.log("Response status:", res.status);

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
