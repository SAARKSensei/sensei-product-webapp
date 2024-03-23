import React from 'react'
import Image from 'next/image'
import Danger from '@/Images/danger.svg'
import Navbar from '@/Components/Navbar'
import LeftSide from '@/Components/LeftSide'

const Page = () => {
    
  return (
    <div className="h-screen w-screen ">
      <Navbar />
      <div className="flex">
        <LeftSide />

        <div className="w-2/4	h-screen relative z-10">
          <div className="h-2/3	w-3/5	mt-32 ml-24  mr-auto">
            <div className=" absolute z-50 -ml-3 ">
              <Image src={Danger} className="h-8 w-8 z-50 " />
            </div>
            <div className="path h-7 w-60 text-xs bg-[#FFF0DE] rounded-tl-lg">
              <h6 className="ml-8 pt-1.5 text-blue-900 font-medium">
                Please enter the correct OTP
              </h6>
            </div>
            <h6 className="text-xs mt-8">Enter the OTP received to</h6>
            <h1 className="mt-3 text-3xl font-semibold">+91 XXXX050500</h1>
            <p className="mt-2.5 text-xs w-56">
              A 4 digit OTP will be sent via SMS to verify your mobile number.
            </p>
            <div className="flex gap-4 mt-4">
              <input
                type="text"
                className="w-12 h-12 border-2 border-slate-500 rounded-md	"
              />
              <input
                type="text"
                className="w-12 h-12 border-2 border-slate-500 rounded-md	"
              />
              <input
                type="text"
                className="w-12 h-12 border-2 border-slate-500 rounded-md	"
              />
              <input
                type="text"
                className="w-12 h-12 border-2 border-slate-500 rounded-md	"
              />
            </div>
            <div className="mt-3 flex gap-32 ">
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