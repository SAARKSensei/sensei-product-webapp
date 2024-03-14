"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/Images/logo1.png'
import Phoneicon from '@/Images/Phoneicon.png'

const Navbar = () => {

  return (
    <div  className='h-20 mt-8 w-full px-24 flex justify-between z-20 absolute top-0.5'>
            <div  className=''>
               <Image 
               src={Logo}
               className='h-14 w-32'
               />
            </div>
          <div  className='flex'>
                <div className='flex gap-3'>
               <Link href="" className='text-blue-600' >Are you an Educator?</Link>
               <Link href="" className='text'>Enquire now</Link>
              <div  className='flex gap-1'>
              <Image
               src={Phoneicon}
               className='h-5 w-5'
               />
               <Link href="" className='text font-bold'> 96659 52556</Link>
              </div>
                </div>
            </div>  
    </div>
  )
}

export default Navbar