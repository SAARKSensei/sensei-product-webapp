"use client"
import React from 'react'
import Navbar1 from '@/Components/Navbar1'
import Image from 'next/image'
import DeleteIcon from '@/Images/delete-icon.svg'
import AddChild from '@/Images/Addchild.svg'
import Background from '@/Components/Background1.js'
import PlusIcon from "@/Images/plusIcon.svg"

const page = () => {
  return (
    <div className="h-screen w-screen">
      <Background />
      <Navbar1 />
      <div className='flex justify-center items-center sm:block flex-col sm:items-start sm:justify-center'>
        <div className="flex flex-col justify-center items-center mt-24 sm:mt-0 font-Nunito">
          <h1 className=" text-[#2C3D68] sm:text-3xl text-2xl font-bold sm:mt-28">
            Add child’s details
          </h1>
          <h6 className="font-Nunito font-normal text-sm text-gray-600">
            Please fill in the correct details
          </h6>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-12 gap-2 mt-5">
          <div className="w-[353px] h-[569px] sm:w-[562px] sm:h-[388px]  bg-[#FFF8F1] rounded-lg">
            <div className="flex justify-between items-center rounded-ss-lg rounded-se-lg sm:px-5	sm:justify-between px-5 w-full h-14 bg-[#F58720]">
              <h1 className="font-bold font-Nunito text-xl text-white">
                1. Child
              </h1>
              <Image className="" src={DeleteIcon} alt='Delete-Icon' />
            </div>
            <form action="">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 px-5 mt-3 sm:mt-5 font-NunitoSans">
                <div className="flex flex-col sm:w-[279px] sm:h-[75px]">
                  <label htmlFor="" className="mb-2">
                    Child Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="px-6 py-3 sm:border-2 rounded-md outline-none"
                  />
                </div>
                <div className="flex flex-col sm:w-[230px] sm:h-[75px] justify-between">
                  <label htmlFor="" className="">
                    Grade
                  </label>
                  <select
                    required
                    className="block w-full h-[46px] px-6 py-2 sm:border-2 rounded-md outline-none bg-white"
                  >
                    <option value="Select">Select</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 px-5 mt-2 sm:mt-5">
                <div className="flex flex-col sm:w-[279px] sm:h-[75px]">
                  <label htmlFor="" className="mb-2">
                    School Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="px-6 py-3 sm:border-2 rounded-md outline-none"
                  />
                </div>
                <div className="flex flex-col sm:w-[230px] sm:h-[75px]">
                  <label htmlFor="" className="mb-2">
                    DOB
                  </label>
                  <input
                    type="date"
                    className="px-5 py-2 sm:border-2 rounded-md outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 px-5 mt-2 sm:mt-5 ">
                <div className='flex flex-col justify-center w-full sm:w-[279px] h-[75px]'>
                  <label htmlFor="">Choose Plan</label>
                  <select
                    required
                    className="block mt-2 sm:w-[272px] px-6 py-2 sm:border-2 rounded-md outline-none bg-white"
                  >
                    <option value="Select">Select</option>
                    <option value="New York">Rs. 299/-</option>
                    <option value="Los Angeles">Rs. 1299/-</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="flex flex-col sm:gap-4 gap-2 mt-2 sm:mt-0 sm:w-[230px] h-[88px]">
                  <div className="w-full flex justify-between whitespace-nowrap gap-1">
                    <h4 className="text-sm ">Visiting any counsellor:</h4>
                    <label className="switch  mb-2">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="w-full flex justify-between whitespace-nowrap gap-6">
                    <h4 className="text-sm ">Any Medical History</h4>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex sm:flex-col justify-between sm:justify-center items-center px-2 sm:px-6 sm:py-20 w-[353px] h-12 sm:w-[283px] sm:h-[344px] border-2 sm:border-4	border-[#F58720] rounded-lg sm:flex sm:gap-10 cursor-pointer mt-8 sm:mt-0">
            <h1 className="sm:text-2xl w-[140px] sm:h-16 text-[#F58720] text-center font-semibold	font-Nunito">
              Add another child
            </h1>
            <Image className="w-[77px] h-[77px] hidden sm:block" src={AddChild} alt='AddChild-Icon' />
            <Image className='sm:hidden block h-5 w-5' src={PlusIcon} alt='AddChild-Icon' />
          </div>
        </div>
        <div className="flex justify-center items-center mt-12">
          <button
            type="Submit"
            className="backgroud-button py-2.5 rounded-full text-center px-32 text-white font-Nunito font-extrabold text-lg"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
