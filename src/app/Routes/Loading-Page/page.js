"use client"
import React from 'react'
import Image from 'next/image'
import Logo from '@/Images/logo.svg'
import Bottom from '@/Images/buttom.svg'
import Bottom1 from '@/Images/buttom1.svg'
import Bottom2 from '@/Images/buttom2.svg'


const page = () => {

  
  return (
    <div className="overflow-hidden	h-screen w-screen">
      <div className="flex justify-center items-center">
        <Image className="mt-32" src={Logo} />
      </div>

      <div className="flex justify-center items-center mt-20">
        <div className="w-1/3 h-2 bg-gray-200 rounded-full">
          <div className="w-96 h-full bg-[#F58720] rounded-full animate-slide"></div>
        </div>
      </div>

      <div className="w-screen relative">
        <Image className="w-screen absolute top-40" src={Bottom} />
        <Image className="w-screen absolute top-36 mt-14" src={Bottom1} />
        <Image className="w-screen absolute top-52" src={Bottom2} />
      </div>
    </div>
  );
}

export default page