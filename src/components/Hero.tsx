import React from 'react'
import { Alex_Brush, Open_Sans } from "next/font/google"
import { LogoCloud } from './LogoCloud'
import ShinyButton from './ui/shiny-button'
import Link from 'next/link'

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  display: "swap",
  weight: ["400"]
})

const openSans = Open_Sans({
  subsets: ['latin'],
  display: "swap",
  weight: ["400", "600", "800"]
})

const Hero = () => {
  return (
    <>
      <div className='p-10 flex items-center w-full h-screen'>
        <div className="w-3/5">
          <div className='px-20'>
            <p style={openSans.style} className='text-7xl text-transparent font-bold bg-clip-text bg-gradient-to-bl to-violet-500 from-fuchsia-200'>Unlock Your Tech Career</p>
            <p className='text-6xl font-semibold text-fuchsia-900' style={alexBrush.style}>With</p>
            <p style={openSans.style} className='text-7xl font-bold text-violet-500 bg-clip-text  via-violet-500 '>Expert Courses</p>
          </div>
          <div className='px-20 mt-8 flex items-center gap-6'>
            <ShinyButton className='py-4 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-white font-semibold text-lg'>Explore Courses</ShinyButton>
            <Link href="/plans">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-1 text-sm text-violet-900 font-bold uppercase backdrop-blur-3xl">
                  View Pricing
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <LogoCloud />
        </div>
      </div>

    </>
  )
}

export default Hero