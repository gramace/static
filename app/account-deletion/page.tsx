import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account Deletion — Exameow',
  description: 'How to request deletion of your Exameow account and data',
}

export default function AccountDeletion() {
  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100vh', color: 'var(--text-white)' }}>
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px', maxWidth: '700px' }}>
        <Link href="/" style={{ color: 'var(--primary-soft)', fontSize: '14px' }}>← Back to Home</Link>

        <h1 style={{ marginTop: '32px', marginBottom: '8px', fontSize: '2rem', fontWeight: 700 }}>Account Deletion</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '40px' }}>
          Last updated: June 10, 2026
        </p>

        <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '15px', marginBottom: '36px' }}>
          You have the right to request deletion of your Exameow account and all associated personal data at any time. Once deleted, your account cannot be recovered.
        </p>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-soft)' }}>
            What gets deleted
          </h2>
          <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.9, fontSize: '15px', paddingLeft: '20px' }}>
            <li>Your account profile (name, email, profile picture received from Google)</li>
            <li>Your learning progress and history</li>
            <li>Any other personal data associated with your account</li>
          </ul>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-soft)' }}>
            How to request deletion
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '15px', marginBottom: '16px' }}>
            Send an email to us from the email address associated with your account:
          </p>

          <div style={{
            background: 'var(--bg-elevated)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '24px',
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08rem', marginBottom: '8px' }}>
              Email
            </p>
            <a
              href="mailto:app@exameow.com?subject=Account%20Deletion%20Request"
              style={{ color: 'var(--primary-soft)', fontSize: '1.1rem', fontWeight: 600 }}
            >
              app@exameow.com
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '12px' }}>
              Subject: <em>Account Deletion Request</em>
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>
              Please include the email address linked to your Exameow account so we can locate and delete your data.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-soft)' }}>
            Processing time
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '15px' }}>
            We will process your request and delete your data within <strong>30 days</strong> of receiving your email. You will receive a confirmation once deletion is complete.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-soft)' }}>
            Data retained after deletion
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '15px' }}>
            In some cases we may retain certain anonymized or aggregated data that cannot be linked back to you, or data we are legally required to retain. We will not retain any data that personally identifies you.
          </p>
        </section>

        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
          For more information, see our{' '}
          <Link href="/privacy-policy" style={{ color: 'var(--primary-soft)' }}>Privacy Policy</Link>.
        </p>
      </div>

      <footer>
        © 2026 Exameow Edventures Private Limited. All rights reserved.
      </footer>
    </div>
  )
}
