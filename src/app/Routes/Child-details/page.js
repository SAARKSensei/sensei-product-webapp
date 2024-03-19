"use client"
import React from 'react'
import Navbar from '@/Components/Navbar1'
import Image from 'next/image'
import DeleteIcon from '@/Images/delete-icon.svg'
import AddChild from '@/Images/Addchild.svg'
import Background from '@/Components/Background1.js'

const page = () => {
  return (
    <div className="h-screen w-screen">
      <Background />
      <div>
        <Navbar />
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[#2C3D68] text-3xl font-bold  mt-28">
              Add child’s details
            </h1>
            <h6 className=" text-gray-600">
              Please fill in the correct details
            </h6>
          </div>
          <div className="flex justify-center item-center gap-12 mt-5">
            <div className="continer h-96 w-4/12 bg-[#FFF8F1] rounded-lg  ">
              <div className="flex rounded-ss-lg rounded-se-lg	justify-around h-12 bg-[#F58720]">
                <h1 className="font-bold text-xl text-white mt-2 ml-6">
                  1. Child
                </h1>
                <Image className="ml-80" src={DeleteIcon} />
                <div></div>
              </div>
              <form action="">
                <div className="flex gap-6 px-5 mt-5">
                  <div className="flex flex-col">
                    <label htmlFor="" className="mb-2">
                      Child Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="px-9 py-2 border-2 rounded-md outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="mb-2">
                      Grade
                    </label>
                    <select
                      required
                      className="block  px-9 py-2 border-2 rounded-md outline-none"
                    >
                      <option value="Select">Select</option>
                      <option value="New York">New York</option>
                      <option value="Los Angeles">Los Angeles</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
                <div className="flex gap-6 px-5 mt-5">
                  <div className="flex flex-col ">
                    <label htmlFor="" className="mb-2">
                      School Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="px-9 py-2 border-2 rounded-md outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="mb-2">
                      DOB
                    </label>
                    <input
                      type="date"
                      className="px-5 py-2 border-2 rounded-md outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-6 px-5 mt-5">
                  <div>
                    <label htmlFor="">Choose Plan</label>
                    <select
                      required
                      className="block mt-2 px-20 py-2 border-2 rounded-md outline-none"
                    >
                      <option value="Select">Select</option>
                      <option value="New York">Rs. 299/-</option>
                      <option value="Los Angeles">Rs. 1299/-</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex whitespace-nowrap gap-1">
                      <h4 className="text-sm ">Visiting any counsellor:</h4>
                      <label className="switch  mb-2">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="flex whitespace-nowrap gap-6">
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
            <div className="h-80 w-64  mt-8 border-4	border-[#F58720] rounded-lg">
              <h1 className="text-2xl mt-14 text-[#F58720] px-8 text-center font-semibold	">
                Add another child
              </h1>
              <Image className="ml-24 mt-14" src={AddChild} />
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button
              type="Submit"
              className="backgroud-button py-2.5 rounded-full text-center px-32 text-white"
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page