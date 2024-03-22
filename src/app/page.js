"use client"

import React from 'react'
import Navbar from '@/Components/Navbar'
import LeftSide from '@/Components/LeftSide'
import Link from 'next/link'

const page = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex flex-col sm:flex-row">
        <div className='hidden sm:flex w-1/2'>
          <LeftSide />
        </div>
        <div className='flex flex-col sm:hidden absolute bottom-[364px] left-7'>
          <p className='font-Nunito font-bold text-[33px]'>Welcome</p>
          <p className=' font-Nunito font-normal text-base'>Sign in to continue</p>
        </div>
        <div className="w-full absolute sm:relative sm:w-1/2 h-[355px] sm:h-screen bottom-0 left-0 px-7 py-11 bg-[#FFEFDE] rounded-3xl flex flex-col justify-end">
          <div className="w-full h-[253px] flex flex-col gap-4 items-center">
            <div className="w-full flex flex-col mt-6 items-center">
              <label htmlFor="number" className='font-Nunito font-normal text-base'>Phone number</label>
              <div className="flex mt-1.5 w-full px-3 py-0.5 border rounded-md bg-white border-gray-300 shadow-lg">
                <span className="text-gray-600 mr-2 py-2 px-2 font-bold ">
                  +91
                </span>
                <input type="text" className="w-full outline-none" />
              </div>
            </div>
            <p className="text-xs mx-7 font-Nunito font-light">
              A 4 digit OTP will be sent via SMS to verify your mobile number.
            </p>
            <Link href="/Routes/OTP-verification">
              <button className="backgroud-button px-6 py-3 rounded-full text-white">
                Login
              </button>
            </Link>
            <p className="hidden sm:block text-xs pr-28 mt-8">
              By signing in, you agree to the{" "}
              <span className="font-semibold	">Terms of Service</span> and{" "}
              <span className="font-semibold">Privacy Policy</span>. You also
              agree that you have parental consent (if child). We use WhatsApp
              for important updates
            </p>
            <p className='sm:hidden font-Nunito font-bold text-xs'>Terms of Service | Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page