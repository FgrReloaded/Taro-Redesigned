import { SunMoon } from 'lucide-react'
import React from 'react'

const ModeToggle = () => {
  return (
    <div className='border border-purple-950 p-1 rounded-full cursor-pointer'>
    <SunMoon className='text-purple-950' size={25} />
  </div>  )
}

export default ModeToggle