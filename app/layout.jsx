import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { NextAuthProvider } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin',
  description: 'MongoDB, Tailwind CSS, Next-Auth',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
        <div className='max-w-full mx-auto'>
          <Navbar />
          <div className='mt-5 pl-4 pr-1'>
            {children}
          </div>
        </div>
      </NextAuthProvider>
      </body>
    </html>
  )
}
