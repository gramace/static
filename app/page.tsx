import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'

function page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <SignUp />
      <Footer />
      <Link href="/waitlist">Join Waitlist Preview</Link>
    </main>
  )
}

export default page