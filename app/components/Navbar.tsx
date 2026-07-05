import Link from 'next/link'
import styles from './styles/navbar.module.css'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['nav-inner']}>
                <div className={styles.imageContainer}>
                    <Image src="/full-logo.png" alt="Exameow" width={0}
                        height={0}
                        style={{ width: "100%", height: "auto" }} />
                </div>
                <div className={styles['nav-links']}>
                    <a href='#'>Home</a>
                    <a href="#features">Features</a>
                    <a href="#values">Values</a>
                    <a href="#waitlist">Waitlist</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
