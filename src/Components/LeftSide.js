import React from 'react'
import Doctor from '@/Images/dr.png'
import Image from 'next/image'
import Backgroud from '@/Images/background.svg'
import Link from 'next/link'

const LeftSide = () => {

  return (
    <div className="  w-2/4	h-screen relative	">
      <Image
        src={Backgroud}
        alt="background served with static path of image folder in src directory"
        className="h-screen	w-screen"
      />
      <div>
        <div className="absolute top-36 left-44 h-3/5 border-8 rounded-md	 border-cyan-400 bg-slate-200 w-80">
          {/* <Image
     src={Fram}
     className='h-1/4	 w-72' 
     /> */}
        </div>
        <div className="backgroud-color absolute h-72 w-52 top-52 right-28">
          <h5 className="font-semibold	text-white	px-7 pt-7">
            Lorem ipsum dolor sit amet consectetur. Nisi lectus eget elit montes
            turpis velit.
          </h5>
          <Image src={Doctor} className="h-28 w-28 stikey mt-16 -ml-9" />
          <div className="h-28 w-40 absolute left-20 top-40 mt-5 bg-[#FFF0DE]">
            <h5 className="font-sans  px-2 font-bold">Dr. Aprajita Dixit</h5>
            <p className="text-xs	px-2 pt-1 ">
              Consultant Clinical Psychologist (RCI) | Mental Health Expert at
              MANODARPAN | Min of Education (MoE)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide