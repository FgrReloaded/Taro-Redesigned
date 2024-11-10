"use client"

import  { useState } from 'react'
import taroLogo from "@/app/images/taro_logo.png"
import Image from 'next/image'
import { Open_Sans, Raleway } from "next/font/google"
import ModeToggle from '../ModeToggle'
import { DockContainer } from './DockContainer'
import Link from 'next/link'


const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})




const Navbar = () => {
  const [showDock] = useState(false);

  if (showDock) {
    return (
      <DockContainer />
    )
  }

  return (
    <header className="fixed right-0 left-0 w-11/12 mx-auto rounded-full top-0 py-4 px-16 bg-transparent  z-[100] flex items-center border-b-[1px] border-transparent justify-between">
      <aside className="flex justify-center items-center gap-2 text-black rounded-full bg-gradient-to-br from-fuchsia-100 to-white border border-fuchsia-200 px-4 py-2" style={raleway.style}>
        <Image src={taroLogo} alt="Taro Logo" width={30} height={30} />
        <h1 className="text-2xl font-bold text-fuchsia-700">Taro</h1>
      </aside>
      <aside className='flex items-center gap-8 bg-fuchsia-50/50 rounded-full py-4 px-8 backdrop-blur-lg'>
        <nav className="flex items-center gap-8" style={openSans.style}>
          <Link href="/" className="text-purple-950 uppercase">Home</Link>
          <Link href="/courses" className="text-purple-950 uppercase">Courses</Link>
          <a href="#" className="text-purple-950 uppercase">Jobs</a>
          <a href="#" className="text-purple-950 uppercase">Events</a>
          <a href="#" className="text-purple-950 uppercase">Discussions</a>
        </nav>
        <ModeToggle />
      </aside>
    </header>
  )
}


export default Navbar