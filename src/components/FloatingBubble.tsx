"use client";

import React, { useEffect, useState } from 'react'
import { Oswald, Open_Sans, Poppins } from "next/font/google"
import { cn } from '@/lib/utils'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ["400", "600","700"]
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["400", "600", "800"]
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "600", "800", "900"]
})

interface TestimonialProps {
  name: string;
  username: string;
  body: string;
  img: string;
}

interface BubbleProps extends TestimonialProps {
  left?: number;
  org?: string;
}

const details: BubbleProps[] = [
  {
    name: "Rashmi",
    username: "Senior Software Engineer",
    org: "Google",
    body: '"Taro Premium was a no-brainer investment for me because mentorship is something that I have really lacked in my initial years as a software engineer. It has all the resources you need to excel, from how to onboard to how to ace your 1:1s to building a growth plan."',
    img: "https://www.jointaro.com/faces/rashmik.webp",
    left: 10,
  },
  {
    name: "Hari",
    username: "Senior Software Engineer",
    body: `"I'm being trusted by my team and manager so much more because I followed a lot of tactics from effective communication series. Rahul mentioned in a video that 'Promotion is about behavior, not output'. That sentence completely changed the way I look at career development."`,
    img: "https://www.jointaro.com/faces/harin.webp",
    left: 24,
  },
  {
    name: "Rashmi", left: 38, username: "Senior Software Engineer",
    body: '"Taro Premium was a no-brainer investment for me because mentorship is something that I have really lacked in my initial years as a software engineer. It has all the resources you need to excel, from how to onboard to how to ace your 1:1s to building a growth plan."',
    img: "https://www.jointaro.com/faces/rashmik.webp",
  },
  {
    name: "Hari", left: 48, username: "Senior Software Engineer",
    body: `"I'm being trusted by my team and manager so much more because I followed a lot of tactics from effective communication series. Rahul mentioned in a video that 'Promotion is about behavior, not output'. That sentence completely changed the way I look at career development."`,
    img: "https://www.jointaro.com/faces/harin.webp",
  },
  {
    name: "Rashmi", left: 76, username: "Senior Software Engineer",
    body: '"Taro Premium was a no-brainer investment for me because mentorship is something that I have really lacked in my initial years as a software engineer. It has all the resources you need to excel, from how to onboard to how to ace your 1:1s to building a growth plan."',
    img: "https://www.jointaro.com/faces/rashmik.webp",
  },
  {
    name: "Hari", left: 32, username: "Senior Software Engineer",
    body: `"I'm being trusted by my team and manager so much more because I followed a lot of tactics from effective communication series. Rahul mentioned in a video that 'Promotion is about behavior, not output'. That sentence completely changed the way I look at career development."`,
    img: "https://www.jointaro.com/faces/harin.webp",
  },
  {
    name: "Rashmi", left: 59, username: "Senior Software Engineer",
    body: '"Taro Premium was a no-brainer investment for me because mentorship is something that I have really lacked in my initial years as a software engineer. It has all the resources you need to excel, from how to onboard to how to ace your 1:1s to building a growth plan."',
    img: "https://www.jointaro.com/faces/rashmik.webp",
  },
  {
    name: "Hari", left: 18, username: "Senior Software Engineer",
    body: `"I'm being trusted by my team and manager so much more because I followed a lot of tactics from effective communication series. Rahul mentioned in a video that 'Promotion is about behavior, not output'. That sentence completely changed the way I look at career development."`,
    img: "https://www.jointaro.com/faces/harin.webp",
  },
  {
    name: "Rashmi", left: 2, username: "Senior Software Engineer",
    body: '"Taro Premium was a no-brainer investment for me because mentorship is something that I have really lacked in my initial years as a software engineer. It has all the resources you need to excel, from how to onboard to how to ace your 1:1s to building a growth plan."',
    img: "https://www.jointaro.com/faces/rashmik.webp",
  },
  {
    name: "Hari", left: 83, username: "Senior Software Engineer",
    body: `"I'm being trusted by my team and manager so much more because I followed a lot of tactics from effective communication series. Rahul mentioned in a video that 'Promotion is about behavior, not output'. That sentence completely changed the way I look at career development."`,
    img: "https://www.jointaro.com/faces/harin.webp",
  },
  {
    name: "Rashmi", left: 67, username: "Senior Software Engineer",
    body: '"Taro Premium was a no-brainer investment for me because mentorship is something that I have really lacked in my initial years as a software engineer. It has all the resources you need to excel, from how to onboard to how to ace your 1:1s to building a growth plan."',
    img: "https://www.jointaro.com/faces/rashmik.webp",
  },
  {
    name: "Hari", left: 91, username: "Senior Software Engineer",
    body: `"I'm being trusted by my team and manager so much more because I followed a lot of tactics from effective communication series. Rahul mentioned in a video that 'Promotion is about behavior, not output'. That sentence completely changed the way I look at career development."`,
    img: "https://www.jointaro.com/faces/harin.webp",
  },
]

const FloatingBubble = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <h1 className="absolute top-1/2 left-0 -translate-y-1/2 right-0 text-center text-8xl text-transparent bg-clip-text bg-gradient-to-tr from-fuchsia-900 via-fuchsia-600 to-fuchsia-100 font-bold uppercase mt-4" style={poppins.style}>
        From The Community
      </h1>

      {details.map((detail, index) => (
        <Bubble key={index} {...detail} />
      ))}
    </div>
  )
}

const Bubble = (props: BubbleProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimationControls()

  const randomDuration = Math.random() * 5 + 10
  const randomDelay = Math.random() * 3
  const randomX = Math.random() * 50 - 25

  useEffect(() => {
    if (isHovered) {
      controls.stop()
    } else {
      controls.start({
        y: "0vh",
        x: randomX,
        transition: {
          y: { duration: randomDuration, repeat: Infinity, ease: "linear", delay: randomDelay },
          x: { duration: randomDuration / 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: randomDelay }
        }
      })
    }
  }, [isHovered, controls, randomDuration, randomDelay, randomX])

  return (
    <motion.div
      className={cn(
        "absolute p-16 bg-gradient-to-br from-fuchsia-100 to-fuchsia-200 flex justify-center items-center",
        isHovered ? "w-64 h-96 rounded-lg shadow-lg px-4 py-8 items-start" : "w-20 h-20 rounded-full"
      )}
      style={{ left: props.left + "%" }}
      initial={{ y: "100vh" }}
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <TestimonialCard {...props} />
      ) : (
        <p className='text-xl bg-clip-text text-transparent bg-gradient-to-br from-violet-800 to-fuchsia-700' style={oswald.style}>
          {props.name}
        </p>
      )}
    </motion.div>
  )
}

const TestimonialCard = ({ name, username, body, img }: TestimonialProps) => (
  <div className="flex flex-col justify-start text-center px-2 py-2">
    <div className='flex gap-4 items-center'>
      <Image src={img} alt={name} width={60} height={60} className="rounded-full mb-4" />
      <div className='flex flex-col  text-left'>
        <h3 className="text-lg text-violet-950 font-semibold uppercase mb-1" style={oswald.style}>{name}</h3>
        <p className="text-xs text-left text-fuchsia-900 mb-4" style={oswald.style}>{username}</p>
      </div>
    </div>
    <p className="text-sm text-violet-950 font-semibold" style={openSans.style}>{body}</p>
  </div>
)

export default FloatingBubble