import Link from 'next/link'
import styles from './styles/navbar.module.css'
import React from 'react'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['nav-inner']}>
                <div className={styles.logo}>ExaMeow</div>
                <div className={styles['nav-links']}>
                    <a href='#'>Home</a>
                    <a href="#features">Features</a>
                    <a href="#waitlist">Waitlist</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
