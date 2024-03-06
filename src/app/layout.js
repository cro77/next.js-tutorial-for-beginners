import { Inter } from 'next/font/google'

import './globals.css'
import NavigacijskaTraka from '@/components/navigacijska-traka/NavigacijskaTraka';
import Podnozje from '@/components/podnozje/Podnozje';
// import KlijentskaStranaProviderTest from '@/components/KlijentskaStranaProviderTest';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Next.js 14 - Početna",
    template: "Next.js 14 - %s"
  },
  description: 'Next.js Fullstack aplikacija',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<KlijentskaStranaProviderTest>*/}
          <div className="spremnik">
            <NavigacijskaTraka />
            {children}
            <Podnozje />
          </div>
        {/*</KlijentskaStranaProviderTest>*/}
      </body>
    </html>
  )
}
