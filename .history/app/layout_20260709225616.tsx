import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from 'next/font/google';
import { Toaster } from "sonner";

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: 'ExaMeow',
  description: 'AI powered mock-testing platform'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className} suppressHydrationWarning>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}