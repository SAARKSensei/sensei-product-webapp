"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/Images/logo1.png'
import Phoneicon from '@/Images/Phoneicon.png'

const Navbar = () => {

  return (
    <div className="h-12 mt-8 w-full px-3 sm:px-24 flex justify-between z-20 absolute">
<<<<<<< HEAD
    <Link href={""} className="w-[102px] h-12">
      <Image src={Logo} alt='main logo' className="h-14 w-32" />
    </Link>
    <div className='flex flex-col sm:flex-row justify-end sm:gap-3 items-center'>
      <div className='w-[206px] h-12 flex items-center'>
        <Link href={""} className='font-Nunito font-semibold text-sm text-[#0764A7] ml-auto'>Are you an Educator?</Link>
      </div>
      <div className='flex ml-auto items-center'>
        <p className='text-[#FF8B13] font-Nunito font-bold italic text-sm'>Enquire Now</p>
        <Image
          src={Phoneicon}
          alt='phone icon'
          className=' w-6 h-6'
        />
        <p className='text-[#FF8B13] font-Nunito font-bold italic text-sm'>96659 52556</p>
=======
      <Link href={""} className="w-[102px] h-12">
        <Image src={Logo} alt='main logo' className="h-14 w-32" />
      </Link>
      <div className='flex flex-col sm:flex-row justify-end sm:gap-3 items-center'>
        <div className='w-[206px] h-12 flex items-center'>
          <Link href={""} className='font-Nunito font-semibold text-sm text-[#0764A7] ml-auto'>Are you an Educator?</Link>
        </div>
        <div className='flex ml-auto items-center'>
          <p className='text-[#FF8B13] font-Nunito font-bold italic text-sm'>Enquire Now</p>
          <Image
            src={Phoneicon}
            alt='phone icon'
            className=' w-6 h-6'
          />
          <p className='text-[#FF8B13] font-Nunito font-bold italic text-sm'>96659 52556</p>
        </div>
>>>>>>> feature/responsive
      </div>
    </div>
  </div>
  );
}

export default Navbar