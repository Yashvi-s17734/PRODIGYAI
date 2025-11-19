import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'

function Nav() {
  return (
    <div className='fixed top-0 bg-white h-[60px] w-full flex items-center justify-between font-bold px-2 shadow-lg'>
        <div className='text-blue-600 text-2xl'>SmartLife </div>

        <div className='bg-blue-600 px-4 py-2 rounded-lg'>
            <button className='text-white'>Login</button>
        </div>
    </div>
  )
}

export default Nav