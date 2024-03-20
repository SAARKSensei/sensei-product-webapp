import React from "react";
import Navbar from "@/Components/Navbar1.js";
import Background from "@/Components/Background1.js";
import Image from "next/image";
import Book from "@/Images/books.svg";
import LikeIcon from "@/Images/like-icon.svg";
import DeletIcon from "@/Images/Deleteicon.svg";

const page = () => {
  return (
    <div className="h-screen w-screen">
      <Background />
      <div>
        <Navbar />
      </div>
      <div className="flex ">
        <div className="mt-36 ml-56 w-1/2 ">
          <h1 className="font-semibold	text-2xl text-[#2C3D68]">
            Order Summary
          </h1>
          <div className="h-40 w-10/12 border-2 border-slate-300	mt-5 rounded-lg flex felx-row">
            <div>
              <Image src={Book} className="h-32 w-50 mt-3" />
            </div>
            <div className="">
              <h3 className="text-lg font-semibold	mt-8 tracking-wide text-[#2C3D68]">
                Student Name
              </h3>
              <div className="flex flex-row gap-4 text-sm	">
                <h6>Age: 7 years </h6>
                <h6> Grade:1</h6>
              </div>
              <h4 className="mt-2 bg-red-100 px-1 rounded-md border-2 border-blue-600 whitespace-nowrap	bg-blue-200">
                Foundational Course
              </h4>
            </div>
            <div>
              <div className="flex gap-3 mt-5 ml-64">
                <Image src={LikeIcon} />
                <Image className="" src={DeletIcon} />
              </div>
              <h4 className="text-lg font-semibold ml-64 mt-16 text-[#2C3D68]">
                ₹2999
              </h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex whitespace-nowrap gap-3 mt-36 mb-7 ml-24">
            <h4 className="text-sm text-[#2C3D68] font-semibold	">Monthly</h4>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider1 round"></span>
            </label>
            <h4 className="text-sm text-[#2C3D68] font-semibold	">Annually</h4>
          </div>
          <div className="h-96 w-72 border-2 rounded-md	border-slate-300">
            <h1 className="text-lg text-[#F58720] font-semibold	ml-5 mt-48	">
              I have Refferal code
            </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="px-8 py-2 border-2	rounded-md shadow-lg mt-3	ml-5"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <button
          type="Submit"
          className="backgroud-button py-2.5 rounded-full text-center px-32 text-white "
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default page;
