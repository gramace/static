import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Exameow',
  description: 'Privacy Policy for Exameow',
}

export default function PrivacyPolicy() {
  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100vh', color: 'var(--text-white)' }}>
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px', maxWidth: '800px' }}>
        <Link href="/" style={{ color: 'var(--primary-soft)', fontSize: '14px' }}>← Back to Home</Link>

        <h1 style={{ marginTop: '32px', marginBottom: '8px', fontSize: '2rem', fontWeight: 700 }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '40px' }}>
          Last updated: June 10, 2026
        </p>

        <Section title="1. Introduction">
          <p>
            Welcome to Exameow, operated by <strong>Exameow Edventures Private Limited</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our mobile application and related services (collectively, the &ldquo;Service&rdquo;).
          </p>
          <p>
            By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect only the minimum information necessary to provide the Service:</p>
          <ul>
            <li><strong>Account information:</strong> When you sign in, we receive a unique user identifier and basic profile data (name, profile picture, email address) from your Google account via Google OAuth. We do not offer email or phone-based authentication.</li>
            <li><strong>Usage data:</strong> We may collect anonymized, aggregated data about how you interact with the app (e.g., features used, session length) to improve the Service. This data cannot be used to identify you individually.</li>
            <li><strong>Content you provide:</strong> Questions you submit for diagnostics, practice, or chat are processed to deliver the Service. We do not permanently store the content of individual interactions beyond what is required for session continuity.</li>
          </ul>
        </Section>

        <Section title="3. Information We Do Not Collect">
          <p>We do <strong>not</strong> collect or store:</p>
          <ul>
            <li>Phone numbers</li>
            <li>Passwords (all authentication is handled by Google and Supabase)</li>
            <li>Payment or financial information</li>
            <li>Precise location data</li>
            <li>Contacts, photos, or other device data beyond what is required to operate the Service</li>
          </ul>
        </Section>

        <Section title="4. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Personalize your experience and track your learning progress</li>
            <li>Communicate with you about updates or changes to the Service</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </Section>

        <Section title="5. Third-Party Services">
          <p>We rely on the following third-party services to operate the Service. Each has its own privacy policy governing its data practices:</p>
          <ul>
            <li>
              <strong>Supabase</strong> — Authentication and database infrastructure. Supabase handles secure storage of your account credentials and session tokens.{' '}
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-soft)' }}>Supabase Privacy Policy</a>
            </li>
            <li>
              <strong>Google Sign-In (Google LLC)</strong> — We use Google OAuth for authentication only. We receive the profile data Google shares with us based on your consent at sign-in.{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-soft)' }}>Google Privacy Policy</a>
            </li>
            <li>
              <strong>Third-party AI providers</strong> — AI-powered features (diagnostics, chat, and analysis) are powered by third-party AI services. Queries submitted to these features are processed by these providers. We do not share your name or account details with these providers.
            </li>
          </ul>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain your account information for as long as your account is active or as needed to provide the Service. If you request account deletion, we will delete or anonymize your personal data within 30 days, except where we are required to retain it by law.
          </p>
        </Section>

        <Section title="7. Data Security">
          <p>
            We implement industry-standard security measures to protect your information. Authentication and credential management are handled by Supabase, which maintains SOC 2 compliance. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            The Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.
          </p>
        </Section>

        <Section title="9. Your Rights">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and associated data</li>
            <li>Object to or restrict processing of your data</li>
          </ul>
          <p>
            To exercise any of these rights, please see our{' '}
            <Link href="/account-deletion" style={{ color: 'var(--primary-soft)' }}>Account Deletion</Link>{' '}
            page or contact us at <a href="mailto:app@exameow.com" style={{ color: 'var(--primary-soft)' }}>app@exameow.com</a>.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the Service after changes constitutes acceptance of the revised policy.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:app@exameow.com" style={{ color: 'var(--primary-soft)' }}>app@exameow.com</a>
          </p>
          <p style={{ marginTop: '8px' }}>
            Exameow Edventures Private Limited
          </p>
        </Section>
      </div>

      <footer>
        © 2026 Exameow Edventures Private Limited. All rights reserved.
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '36px' }}>
      <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-soft)' }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '15px' }}>
        {children}
      </div>
    </section>
  )
}
