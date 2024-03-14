"use client"

import React from 'react'
import Navbar from '@/Components/Navbar'
import Background from '@/Images/bg.png'
import Fram from '@/Images/bg-phone.png'
import Doctor from '@/Images/dr.png'
import Image from 'next/image'

const page = () => {
  return (
      <div  className='h-screen w-screen '>
   <Navbar />
<div  className='flex'>
      <div className='w-2/4	h-screen relative	'>
          <Image
          src={Background}
          alt="background served with static path of image folder in src directory"
          className='h-screen		'
          />
         <div  className='absolute top-36 left-44 h-3/5 border-8 rounded-md	 border-cyan-400 bg-slate-200 w-80'>
           {/* <Image
           src={Fram}
           className='h-1/4	 w-72' 
           /> */}
          </div> 
      <div className='backgroud-color absolute h-72 w-52 top-52 right-28'>
         <h5  className='font-semibold	text-white	px-7 pt-7'>Lorem ipsum dolor sit amet consectetur. Nisi lectus eget elit montes turpis velit.</h5>
       <Image 
       src={Doctor}
       className='h-28 w-28 absolute top-48 right-28'
       />
       <div  className='h-28 w-40 absolute 	left-24 top-48 bg-[#FFF0DE]'>
             <h5 className='font-sans  px-2 font-bold'>Dr. Aprajita Dixit</h5>
             <p  className='text-xs	px-2 pt-1 '>Consultant Clinical Psychologist (RCI) | Mental Health Expert at MANODARPAN | Min of Education (MoE)</p>
       </div>
      </div>

      </div>
      <div  className='w-2/4	h-screen relative'>
         <div className='h-2/3	w-3/5		absolute top-44 left-24'>
         <div  className='flex flex-col  mt-6'>

          <label htmlFor="number  ">Phone number</label>
          <div  className='flex mt-1.5 w-4/6 px-2 py-1 border rounded-md border-gray-300 shadow-lg'>
          <span className="text-gray-600 mr-2 py-2 px-2 font-bold ">+91</span>
      <input 
        type="text"
        className="w-full"
     />
     </div>
     <p className='text-xs w-56 mt-2'>A 4 digit OTP will be sent via SMS to verify your mobile number.</p>
              </div> 
              <button className='backgroud-button px-6 py-2 rounded-full text-white	mt-7'>Login</button>
<p className='text-xs pr-28 mt-8'>By signing in, you agree to the <span className='font-semibold	'>Terms of Service</span> and <span className='font-semibold	'>Privacy Policy</span>. You also agree that you have parental consent (if child). We use WhatsApp for important updates</p>
            
          </div>     
            
      </div>
      </div>

    
  </div>
 
  )
}

export default page