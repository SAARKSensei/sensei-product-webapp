"use client"
import React from 'react'
import Image from 'next/image'
import Navbar from '@/Components/Navbar1'
import Cartoon from '@/Images/parent-page.svg'
import Parent from '@/Images/parentDetiles.svg'
import { useState, useEffect } from 'react'
import Background from '@/Components/Background.js'

const page = () => {

  const [formData, setformData]= useState({
    FullName:'',
    Emailid:'',
    PhoneNumber:'',
    City:'',
    SocietyName:'',
  });

  // Form to handle input changes
  const InputChange = (e) => {
   setformData({
    ...formData, [e.target.name]: e.target.value,
   })
  };

  //Submit handle

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-screen w-screen overflow-hidden	">
      <Background />
      <div>
        <div className="z-50	">
          <Navbar />
          <div className="flex">
            <div className="w-1/2 h-screen ">
            <div  className='w-full h-screen gap-2 text-center items-center flex flex-col justify-center sm:mt-0 mt-10'>
            <h1 className="sm:w-full w-[214px] h-[45px] ml-52 font-Nunito text-[#2C3D68] sm:text-5xl text-3xl font-extrabold sm:mt-32 ">
                Hello Parent!
              </h1>
              <h6 className="text-gray-600 w-[204px] ml-28	whitespace-nowrap	font-Nunito">
                Please fill the details to create the profile
              </h6>
              <Image className="sm:h-3/5 mt-2 sm:mt-16 z-50 sm:block hidden" src={Cartoon} alt='Parent-Image'/>
              <Image src={Parent} alt='Parent-Images' className='sm:hidden h-1/2	mt-2 ml-36 z-50'/>
              <button className='backgroud-button py-2.5 rounded-full text-center px-32 text-white sm:hidden ml-48'>Countinue</button>
            </div>
            </div>
            <div className="w-1/2 h-screen sm:block">
              <div className="continer ">
                <div className="mt-28">
                <h1 className='text-3xl tracking-wide ml-36 sm:hidden whitespace-nowrap font-extrabold font-Nunito text-[#2C3D68]'>Hello Parent!</h1>
                <h6 className="text-gray-600 sm:hidden w-[204px] ml-28	whitespace-nowrap	font-Nunito">
                Please fill the details to create the profile
              </h6>
                  <form onSubmit={SubmitForm} className='mt-8'>
                    <div className="flex flex-col mx-12 sm:mx-10">
                      <label htmlFor="Full Name" className="mb-2">
                        Parent Name
                      </label>
                      <input
                        type="text"
                        id="FullName"
                        name="FullName"
                        value={formData.FullName}
                        onChange={InputChange}
                        placeholder="Enter full name"
                        className="sm:w-1/2 w-96 px-2 py-2 border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>

                    <div className=" flex flex-col sm:mx-10 mx-12 mt-3">
                      <label htmlFor="Email" className="mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="Emailid"
                        name="Emailid"
                        value={formData.Emailid}
                        onChange={InputChange}
                        placeholder="Enter email ID"
                        className="sm:w-1/2 w-96 px-2 py-2  border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>

                    <div className=" flex flex-col sm:mx-10 mx-12 mt-3">
                      <label htmlFor="Phone number" className="mb-2">
                        Phone no.
                      </label>
                      <input
                        type="number"
                        id="PhoneNumber"
                        name="PhoneNumber"
                        value={formData.PhoneNumber}
                        onChange={InputChange}
                        placeholder="Enter phone number"
                        className="sm:w-1/2 w-96 px-2 py-2  border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>

                    <div className=" flex flex-row sm:mx-10 mx-12 mt-5 gap-8">
                      <div className="flex flex-col">
                        <label htmlFor="loaction" className="mb-2">
                          Loaction
                        </label>
                        <select
                          id="city"
                          name="city"
                          required
                          className="block sm:w-36 w-44 px-2 py-2 border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
                        >
                          <option value="Select">Select</option>
                          <option value="New York">New York</option>
                          <option value="Los Angeles">Los Angeles</option>
                          <option value="Chicago">Chicago</option>
                          <option value="Houston">Houston</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="working" className="mb-2">
                          Both working
                        </label>
                        <select
                          id="city"
                          name="city"
                          className="block sm:w-36 w-44 px-2 py-2 border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
                        >
                          <option value="Select">Select</option>
                          <option value="New York">New York</option>
                          <option value="Los Angeles">Los Angeles</option>
                          <option value="Chicago">Chicago</option>
                          <option value="Houston">Houston</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                    </div>

                    <div className=" flex flex-col sm:mx-10 mx-12 mt-3">
                      <label htmlFor="SocietyName" className="mb-2">
                        Society Name
                      </label>
                      <input
                        type="text"
                        id="SocietyName"
                        name="SocietyName"
                        value={formData.SocietyName}
                        onChange={InputChange}
                        placeholder="Enter name"
                        className="sm:w-1/2 w-96 px-2 py-2  border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>
                    <div className="ml-11 mr-auto mt-5 ">
                      <button
                        type="submit"
                        className="backgroud-button sm:w-1/2 w-96 sm: sm:px-32 text-white py-3  rounded-full whitespace-nowrap">
                        Save & Next
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page