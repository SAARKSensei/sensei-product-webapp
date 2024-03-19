"use client"
import React from 'react'
import Image from 'next/image'
import Navbar from '@/Components/Navbar1'
import Cartoon from '@/Images/parent-page.svg'
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
          <div className="flex ">
            <div className="w-1/2 h-screen ">
              <h1 className="mt-48 ml-56 text-[#2C3D68] text-5xl font-extrabold	">
                Hello Parent!
              </h1>
              <h6 className="mt-2 ml-56 text-gray-600	">
                Please fill the details to create the profile
              </h6>
              <Image className="h-3/5	mt-2  absolute z-50" src={Cartoon} />
            </div>
            <div className="w-1/2 h-screen">
              <div className="continer ">
                <div className="mt-32">
                  <form onSubmit={SubmitForm}>
                    <div className=" flex flex-col mx-10">
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
                        className="w-1/2 px-2 py-2 border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>

                    <div className=" flex flex-col mx-10 mt-3">
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
                        className="w-1/2 px-2 py-2  border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>

                    <div className=" flex flex-col mx-10 mt-3">
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
                        className="w-1/2 px-2 py-2  border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>

                    <div className=" flex flex-row mx-10 mt-5 gap-10">
                      <div className="flex flex-col">
                        <label htmlFor="loaction" className="mb-2">
                          Loaction
                        </label>
                        <select
                          id="city"
                          name="city"
                          required
                          className="block w-36 px-2 py-2 border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
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
                          className="block w-36 px-2 py-2 border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
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

                    <div className=" flex flex-col mx-10 mt-3">
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
                        className="w-1/2 px-2 py-2  border-2 shadow-md rounded-md focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>
                    <div className="ml-11 mr-auto mt-5 ">
                      <button
                        type="submit"
                        className="backgroud-button  px-32 text-white py-3 rounded-full "
                      >
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