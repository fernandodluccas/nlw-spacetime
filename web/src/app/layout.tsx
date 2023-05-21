import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Signin from '@/components/Signin'
import Copyright from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma capsúla do tempo construioda com React, Next.js e TailwindCSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baijamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <div className="grid min-h-screen grid-cols-2">
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>

            {isAuthenticated ? <Profile /> : <Signin />}

            <Hero />

            <Copyright />
          </div>
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
