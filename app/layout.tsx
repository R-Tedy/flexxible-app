import Nav from '@/components/Nav'
import './globals.css'
import { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata= {
  title: 'flexxible',
  description: 'A Clone of the dribble app under the guidance of Javascript mastery.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
