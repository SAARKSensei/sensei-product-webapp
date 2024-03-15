"use client"

import React from 'react'
import Navbar from '@/Components/Navbar'
import LeftSide from '@/Components/LeftSide'
import Link from 'next/link'

const page = () => {
  return (
    <div className="h-screen w-screen ">
      <Navbar />
      <div className="flex">
        <LeftSide />


        <div className="w-2/4	h-screen relative">
          <div className="h-2/3	w-3/5	mt-52 ml-24  mr-auto">
            <div className="flex flex-col  mt-6">
              <label htmlFor="number  ">Phone number</label>
              <div className="flex mt-1.5 w-4/6 px-3 py-0.5 border rounded-md border-gray-300 shadow-lg">
                <span className="text-gray-600 mr-2 py-2 px-2 font-bold ">
                  +91
                </span>
                <input type="text" className="w-full outline-none	" />
              </div>
              <p className="text-xs w-56 mt-2">
                A 4 digit OTP will be sent via SMS to verify your mobile number.
              </p>
            </div>
           <Link  href="/Routes/OTP-verification"> <button className="backgroud-button px-6 py-2 rounded-full text-white	mt-7">
              Login
            </button></Link>
            <p className="text-xs pr-28 mt-8">
              By signing in, you agree to the{" "}
              <span className="font-semibold	">Terms of Service</span> and{" "}
              <span className="font-semibold	">Privacy Policy</span>. You also
              agree that you have parental consent (if child). We use WhatsApp
              for important updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page