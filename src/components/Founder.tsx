import React from 'react'
import HeroVideoDialog from './ui/hero-video-dialog'
import { Open_Sans } from "next/font/google"
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["400", "600", "800"]
})


const Founder = () => {
  return (
    <div className="relative mt-20 w-full flex justify-center items-center rounded-3xl py-10 flex-col gap-8">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-200 to-violet-400 dark:from-secondary dark:to-primary" style={openSans.style}>
        Meet the Founder
      </h1>

      <HeroVideoDialog
        className="dark:hidden block rounded-3xl"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/QnpGMnwDbho?si=Vd4k2VZ26sLX28TX"
        thumbnailSrc="../images/founder.jpg"
        thumbnailAlt="Join Taro"
      />
      <HeroVideoDialog
        className="hidden dark:block rounded-3xl"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/QnpGMnwDbho?si=Vd4k2VZ26sLX28TX"
        thumbnailSrc="../images/founder.jpg"
        thumbnailAlt="Join Taro"
      />
    </div>
  )
}

export default Founder