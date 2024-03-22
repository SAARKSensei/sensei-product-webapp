import React from 'react'
import Image from 'next/image'
import Danger from '@/Images/danger.svg'
import Navbar from '@/Components/Navbar'
import LeftSide from '@/Components/LeftSide'

const Page = () => {
    
  return (
    <div className="h-screen w-screen ">
      <Navbar />
      <div className="flex flex-col sm:flex-row ">
        <div className='w-1/2 h-screen hidden sm:flex'>
        <LeftSide />
        </div>
        <div className='flex flex-col sm:hidden absolute bottom-[364px] left-7'>
          <p className='font-Nunito font-bold text-[33px]'>Welcome</p>
          <p className=' font-Nunito font-normal text-base'>Sign in to continue</p>
        </div>
        <div className="sm:w-1/2	h-screen relative w-full z-10 ">
          <div className="sm:h-2/3	sm:w-3/5	h-[355px] text-center sm:text-start sm:bg-[#fff] bg-[#FFEFDE] mt-32 sm:ml-24 absolute w-full bottom-0 sm:top-4 mr-auto">
           <div className="sm:block z-50  hidden absolute"> 
              <Image src={Danger} alt='Danger' className="h-8 w-8 z-50" />
            </div>
            <div className="path hidden sm:block h-7 w-60 text-xs bg-[#FFF0DE] ml-2 rounded-tl-2xl">
              <h6 className="ml-9 pt-1.5 text-blue-900 font-medium">
                Please enter the correct OTP
              </h6>
           </div>
            <h6 className="text-xs mt-8 ">Enter the OTP received to</h6>
            <h1 className="mt-3 text-3xl font-semibold">+91 XXXX050500</h1>
            <p className="mt-2.5 text-xs ">
              A 4 digit OTP will be sent via SMS to verify your mobile number.
            </p>
            <div className="flex gap-4 mt-4 px-36 sm:px-0">
              <input
                type="text"
                className="sm:w-12 w-16 sm:h-12 h-16 border-2 border-slate-500 rounded-md	"
              />
              <input
                type="text"
                className="sm:w-12 w-16 sm:h-12 h-16 border-2 border-slate-500 rounded-md	"
              />
              <input
                type="text"
                className="sm:w-12 w-16 sm:h-12 h-16 border-2 border-slate-500 rounded-md	"
              />
              <input
                type="text"
                className="sm:w-12 w-16 sm:h-12 h-16 border-2 border-slate-500 rounded-md	"
              />
            </div>
            <div className="mt-3 flex gap-48 justify-center sm:justify-normal	sm:gap-28">
              <h4 className="text-[#F58720] font-semibold text-sm">
                Resend OTP
              </h4>
              <h4 className="text-xs">0:50 sec</h4>
            </div>
            <button className="backgroud-button mt-5 px-5 py-2 text-white rounded-full">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page