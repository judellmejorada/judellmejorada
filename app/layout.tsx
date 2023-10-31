import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Judell Mejorada',
  description: 'My Personal Vault',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* For background color and default color of text*/}
      <body className={`${inter.className}
        bg-pink-25 text-gray-950`}>
          {/* 1st color: For gradient effect -- customized */}
          <div className='bg-[#fbcfe8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#d7bebe]'></div>
          {/* 2st color: For gradient effect -- customized*/}
          <div className='bg-[#fdf2f8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#e8cbe1]'></div>

        {children}
      
      </body>
    </html>
  )
}
