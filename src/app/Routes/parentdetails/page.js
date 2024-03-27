"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/Components/Navbar1";
import Cartoon from "@/Images/parent-page.svg";
import Parent from "@/Images/parentDetiles.svg";
import { useState, useEffect } from "react";
import Background from "@/Components/Background.js";
import DownArrow from "../../../Images/downarrow.svg";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    FullName: "",
    Emailid: "",
    PhoneNumber: "",
    City: "",
    SocietyName: "",
  });
  // Form to handle input changes
  const InputChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //Submit handle

  const SubmitForm = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      const data = {
        name: formData.FullName,
        email: formData.Emailid,
        phone: formData.PhoneNumber,
        password: "ananta@123",
        userName: formData.Emailid,
        maritalStatus: "Unmarried",
        kids: "0",
        location: formData.City,
        occupation: "IAS",
        dateOfBirth: "1998-02-27",
        relationWithChildren: "Father",
        spouseName: "Kaali",
        spouseGender: "Female",
        spouseEmail: "Kaali@gmail.com",
        spousePhone: null,
        spouseOccupation: "Writer",
        spouseDateOfBirth: null,
        spouseRelationWithChild: null,
      };
      const res = await axios.post(
        `https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/create/parent`,
        data
      );
      if (res?.data) {
        router.push("/Routes/childdetails");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-max w-screen overflow-hidden flex flex-col sm:flex-row z-50">
      <Background />
      <Navbar />
      <div className="w-full sm:w-1/2 h-screen flex flex-col justify-center items-center text-center">
        <div className="flex flex-col items-center justify-center gap-1 sm:translate-y-44 sm:translate-x-8">
          <h1 className="font-Nunito text-[#2C3D68] text-3xl sm:text-5xl font-extrabold">
            Hello Parent!
          </h1>
          <h6 className="text-gray-600 whitespace-nowrap text-xs sm:text-lg font-Nunito">
            Please fill the details to create the profile
          </h6>
        </div>
        <Image
          src={Parent}
          alt="parent"
          className="sm:w-[618px] sm:h-[689px] sm:translate-y-48 mt-9 sm:mt-11"
        />
      </div>

      <div className="w-full sm:w-1/2 h-screen flex items-center justify-center -translate-y-80 sm:translate-y-0">
        <div className="w-[333px] sm:w-[353px] h-[528px] flex flex-col justify-center items-center gap-8 mx-auto">
          <form
            id="myForm"
            onSubmit={SubmitForm}
            className="w-full h-[439px] flex flex-col gap-4"
          >
            <div className="flex flex-col gap-[10px] w-full h-[75px]">
              <label
                htmlFor="Full Name"
                className="font-NunitoSans font-normal text-sm"
              >
                Parent Name
              </label>
              <input
                type="text"
                id="FullName"
                name="FullName"
                value={formData.FullName}
                onChange={InputChange}
                placeholder="Enter full name"
                className="w-full h-[46px] px-6 py-3 border-2 shadow-md rounded-[10px] bg-white focus:outline-none focus:border-blue-400 font-NunitoSans font-semibold text-base"
                required
              />
            </div>
            <div className="flex flex-col gap-[10px] w-full h-[75px]">
              <label
                htmlFor="Email"
                className="font-NunitoSans font-normal text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="Emailid"
                name="Emailid"
                value={formData.Emailid}
                onChange={InputChange}
                placeholder="Enter email ID"
                className="w-full h-[46px] px-6 py-3 border-2 shadow-md rounded-[10px] bg-white focus:outline-none focus:border-blue-400 font-NunitoSans font-semibold text-base"
                required
              />
            </div>
            <div className="flex flex-col gap-[10px] w-full h-[75px]">
              <label
                htmlFor="Phone number"
                className="font-NunitoSans font-normal text-sm"
              >
                Phone no.
              </label>
              <input
                type="tel"
                id="PhoneNumber"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                maxLength={10}
                onChange={InputChange}
                placeholder="Enter phone number"
                className="w-full h-[46px] px-6 py-3 border-2 shadow-md rounded-[10px] bg-white focus:outline-none focus:border-blue-400 font-NunitoSans font-semibold text-base"
                required
              />
            </div>
            <div className="grid place-content-between grid-cols-2 w-full h-[75px]">
              <div className="w-full h-[75px] flex flex-col gap-[10px] relative ">
                <label
                  htmlFor="loaction"
                  className="font-NunitoSans font-normal text-sm"
                >
                  Loaction
                </label>
                <select
                  id="city"
                  name="city"
                  required
                  className="w-[95%] h-[46px] px-6 py-3 border-2 shadow-md rounded-[10px] bg-white focus:outline-none focus:border-blue-400 font-NunitoSans font-semibold text-base appearance-none cursor-pointer"
                >
                  <option value="Select">Select</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Houston">Houston</option>
                  {/* Add more options as needed */}
                </select>
                <Image
                  src={DownArrow}
                  alt="arrow"
                  className="absolute left-32 top-[50px] cursor-pointer"
                />
              </div>
              <div className="w-full h-[75px] flex flex-col gap-[10px] relative">
                <label
                  htmlFor="working"
                  className="font-NunitoSans font-normal text-sm"
                >
                  Both working
                </label>
                <select
                  id="city"
                  name="city"
                  className="w-[95%] h-[46px] px-6 py-3 border-2 shadow-md rounded-[10px] bg-white focus:outline-none focus:border-blue-400 font-NunitoSans font-semibold text-base appearance-none cursor-pointer"
                >
                  <option value="Select">Select</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Houston">Houston</option>
                  {/* Add more options as needed */}
                </select>
                <Image
                  src={DownArrow}
                  alt="arrow"
                  className="absolute left-32 top-[50px] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[10px] w-full h-[75px]">
              <label
                htmlFor="SocietyName"
                className="font-NunitoSans font-normal text-sm"
              >
                Society Name
              </label>
              <input
                type="text"
                id="SocietyName"
                name="SocietyName"
                value={formData.SocietyName}
                onChange={InputChange}
                placeholder="Enter name"
                className="w-full h-[46px] px-6 py-3 border-2 shadow-md rounded-[10px] bg-white focus:outline-none focus:border-blue-400 font-NunitoSans font-semibold text-base"
                required
              />
            </div>
            <div className="ml-11 mr-auto"></div>
          </form>
          <button
            type="submit"
            form="myForm"
            className="backgroud-button w-full px-6 py-4 text-white rounded-[40px] whitespace-nowrap font-Nunito font-extrabold text-lg"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
