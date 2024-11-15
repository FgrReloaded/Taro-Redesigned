import React from 'react'
import NumberTicker from './ui/number-ticker'
import { Open_Sans } from "next/font/google"
const openSans = Open_Sans({
  subsets: ['latin'],
  display: "swap",
  weight: ["400", "600", "800"]
})

const Counter = () => {
  return (
    <div className='flex items-center justify-evenly w-4/5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-50/50 via-fuchsia-100/50 to-fuchsia-50/50 backdrop-blur-lg px-16 py-4 font-semibold gap-4'>
      <div className='flex items-center gap-2'>
        <NumberTicker value={92} size={75} className='text-violet-900' />
        <span className='text-violet-900 text-sm font-semibold uppercase py-2' style={openSans.style}>Users</span>
      </div>
      <div className='flex items-center gap-2'>
        <NumberTicker value={2} size={75} className='text-violet-900' />
        <span className='text-violet-900 text-sm font-semibold uppercase py-2' style={openSans.style}>Questions</span>
      </div>
      <div className='flex items-center gap-2'>
        <NumberTicker value={7} size={75} className='text-violet-900' />
        <span className='text-violet-900 text-sm font-semibold uppercase py-2' style={openSans.style}>Answers</span>
      </div>
      <div className='flex items-center gap-2'>
        <NumberTicker value={300} size={75} className='text-violet-900' />
        <span className='text-violet-900 text-sm font-semibold uppercase py-2' style={openSans.style}>Events</span>
      </div>
    </div>
  )
}

export default Counter