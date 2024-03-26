"use client";

import React from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

import Danger from '@/Images/danger.svg'
import Navbar from '@/Components/Navbar'
import LeftSide from '@/Components/LeftSide'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react';
import { fetchParentsRequest } from '@/Redux/slice/parentSlice';
import { fetchChildrenRequest } from '@/Redux/slice/childrenSlice';


const Page = () => {

  //Fetching Parent and child data
  const parentData = useSelector(state => state?.parents?.data);
  const childData = useSelector(state => state?.children?.data);

  //Getting phone nuomber from search params
  const searchParams = useSearchParams()
  const phone = searchParams.get('phone');

  //Dispatching actions to get parent and children data from provided details
  const dispatch = useDispatch();
  const id = parentData?.id;

  useEffect(() => {
    dispatch(fetchChildrenRequest({ id }))
    dispatch(fetchParentsRequest({ phone }))
  }, [id, phone, dispatch])

  //otp input functionality
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    };
  }

  //Conditional routing by checking available data
  const router = useRouter();

  const detailsHandler = () => {
    if (id === undefined && childData.length === 0) {
      router.push('/Routes/parentdetails')
    } else if (childData.length === 0) {
      router.push('/Routes/childdetails')
    } else {
      router.push('/Routes/userprofile')
    }
  }

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
        <div className="w-full sm:w-1/2 h-[355px] sm:h-screen absolute bottom-0 left-0 sm:relative px-7 py-10 sm:p-0 sm:bg-[#fff] bg-[#FFEFDE] rounded-3xl flex flex-col justify-end sm:justify-center">
          <div className="h-full sm:h-[382px] sm:w-[300px] text-center sm:text-start sm:ml-24 w-full sm:top-4 mr-auto flex flex-col justify-center">
            <div className="path hidden sm:block h-7 w-60 text-xs bg-[#FFF0DE] ml-2 rounded-tl-2xl">
              <div className="sm:block z-50 hidden absolute">
                <Image src={Danger} alt='Danger' className="h-8 w-8 z-50" />
              </div>
              <h6 className="ml-9 pt-1.5 text-blue-900 font-medium">
                Please enter the correct OTP
              </h6>
            </div>
            <h6 className="text-xs sm:mt-8">Enter the OTP received to</h6>
            <h1 className="mt-3 text-3xl font-semibold">+91 {phone}</h1>
            <p className="mt-2.5 mx-auto sm:mx-0 text-xs w-[300px]">
              A 4 digit OTP will be sent via SMS to verify your mobile number.
            </p>
            <div className='flex justify-center sm:justify-start gap-4 mt-4'>
              {otp.map((digit, index) => (
                <input
                  className="sm:w-12 w-16 sm:h-12 h-16 border-2 border-slate-500 rounded-md	text-center"
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              ))}
            </div>
            <div className="w-[300px] mx-auto mt-3 flex justify-between">
              <h4 className="text-[#F58720] font-semibold text-sm">
                Resend OTP
              </h4>
              <h4 className="text-xs">0:50 sec</h4>
            </div>
            <button className="backgroud-button w-28 h-10 mt-5 px-5 py-2 text-white rounded-full self-center sm:self-start" onClick={detailsHandler}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page