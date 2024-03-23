"use client"
import React from 'react'
import Image from 'next/image'
import LoadingPageLogo from '@/Images/LoadingPageLogo.svg'
import Logo from '@/Images/logo.svg'
import Srvs from '@/Images/srvs.svg'
import Bottom from '@/Images/buttom.svg'
import Bottom1 from '@/Images/buttom1.svg'
import Bottom2 from '@/Images/buttom2.svg'
import ResponsiveBottom from '@/Images/responsivebottom.svg'
import ResponsiveBottom1 from '@/Images/responsivebottom1.svg'
import ResponsiveBottom2 from '@/Images/responsivebottom2.svg'


const page = () => {

  
  return (
    <div className="overflow-hidden	h-screen w-screen bg-[#FFEFDE] sm:bg-white">
   
   <div  className='flex flex-col justify-center items-center text-center'>
   <Image src={LoadingPageLogo} alt='LoadingPageLogo' className='mt-40' />
    <div className='flex flex-row gap-2'>
    <p className='text-xs	'>A product by </p>
    <Image src={Srvs} alt='font' className='' />
    <p className='text-xs	'>Edu. Pvt. Ltd.</p>
    </div>
   </div>
      <div className="flex justify-center items-center">
        <Image className=" mt-5" src={Logo} alt='Main-LOgo'/>
      </div>

      <div className="flex justify-center items-center mt-14">
        <div className="sm:w-1/3 w-[282px] sm:h-2 h-[6px] bg-gray-200 rounded-full">
          <div className="sm:w-96 w-[182px] h-full bg-[#F58720] rounded-full animate-slide"></div>
        </div>
      </div>

      <div className="w-full absolute sm:bottom-[0%] mt-[66px] sm:overflow-hidden ">
        <Image className="w-full absolute hidden sm:block" src={Bottom} alt='buttonImage' />
        <Image className="w-full absolute hidden sm:block" src={Bottom1} alt='buttonImage' />
        <Image className="w-full hidden sm:block" src={Bottom2} alt='buttonImage' />
        <Image className='w-full absolute sm:hidden block' src={ResponsiveBottom} alt='ResponsiveBottom' />
        <Image className='w-full absolute sm:hidden block' src={ResponsiveBottom1} alt='ResponsiveBottom' />
        <Image className='w-full absolute sm:hidden block' src={ResponsiveBottom2} alt='ResponsiveBottom' />
      </div>
    </div>
  );
}

export default page