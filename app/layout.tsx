import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Nunito } from 'next/font/google'
import { Toaster } from "sonner";

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className} suppressHydrationWarning>{children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
