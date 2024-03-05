import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thayan Sivathavan - Software Engineer',
  description: 'I am a dedicated and passionate software engineer with over 2 years of experience in the industry. I have a strong foundation in computer science and software engineering principles. I am a quick learner and a team player who is passionate about creating impactful solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
