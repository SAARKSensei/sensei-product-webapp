"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/Images/logo1.png'
import ProfileImage from '@/Images/DefultProfile.svg'
import Phoneicon from '@/Images/Phoneicon.png'
import DownArrow from "../Images/downarrow.svg"

const Navbar = ({ parentName }) => {

  return (
    <div className="flex justify-between items-center w-full h-auto mt-8 px-5 sm:px-24 z-20 absolute">
      <Image src={Logo} alt='main logo' className="w-[102px] h-12" />
      <div className="flex items-center gap-10">
        <div className='hidden sm:flex items-center gap-2'>
          <Link href="" className="text-[#F58720] font-Nunito font-bold italic text-base">
            For support
          </Link>
          <Image src={Phoneicon} alt='phone icon' className="w-6 h-6" />
          <Link href="" className="font-Nunito font-bold italic text-base text-[#FF8B13]">
            {" "}
            96659 52556
          </Link>
        </div>
        <div className="flex flex-row w-28 justify-center items-center text-center gap-2">
          <h2 className="text-[#2C3D68] font-bold font-Nunito text-lg">{parentName ? parentName : "parent"}</h2>
          <Image
            className="w-11 h-11"
            alt='profile image'
            src={ProfileImage}
          />
          <Image
            src={DownArrow}
            alt='down arrow'
            className='sm:hidden'
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar