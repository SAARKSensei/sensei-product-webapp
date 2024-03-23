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
      <div className="flex flex-col sm:flex-row px-7 sm:px-0">
      <div className="flex whitespace-nowrap gap-3 ml-16 mt-28 sm:hidden block">
            <h4 className="text-sm text-[#2C3D68] font-semibold	">Monthly</h4>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider1 round"></span>
            </label>
            <h4 className="text-sm text-[#2C3D68] font-semibold	">Annually</h4>
          </div>
        <div className="mt-5 sm:ml-56 w-1/2 sm:mt-28">
          <h1 className="font-semibold	text-2xl text-[#2C3D68]">
            Order Summary
          </h1>
          <div className="sm:h-40 sm:w-[648px] h-[128px] w-[359px] border-2 border-slate-300	mt-5 rounded-lg flex felx-row">
            <div>
              <Image src={Book} className="sm:h-[140px] sm:w-[140px] sm:mt-3 mt-5 w-[66px] h-[78px]" />
            </div>
            <div className="ml-4 sm:m-l0">
              <h3 className="text-lg font-semibold mt-3	sm:mt-8 tracking-wide text-[#2C3D68]">
                Student Name
              </h3>
              <div className="flex flex-row gap-4 text-sm	">
                <h6>Age: 7 years </h6>
                <h6> Grade:1</h6>
              </div>
              <h4 className="sm:mt-2 mt-3 sm:px-1 px-0.5 rounded-md border-2 border-blue-600 whitespace-nowrap	bg-blue-200">
                Foundational Course
              </h4>
            </div>
            <div>
              <div className="flex gap-3 mt-5 sm:ml-64 ml-5">
                <Image src={LikeIcon} />
                <Image className="" src={DeletIcon} />
              </div>
              <h4 className="text-lg font-semibold sm:ml-64 sm:mt-16 ml-8 mt-5 text-[#2C3D68]">
                ₹2999
              </h4>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col">
          <div className=" mb-7 mt-28 flex gap-2 flex-row hidden sm:flex">
            <h4 className="text-sm text-[#2C3D68] font-semibold	">Monthly</h4>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider1 round"></span>
            </label>
            <h4 className="text-sm text-[#2C3D68] font-semibold	">Annually</h4>
          </div>
          <div className="sm:h-96 sm:w-72 sm:border-2 border-0 rounded-md ml-5 sm:ml-0 mt-20 sm:mt-0	sm:border-slate-300">
            <h1 className="text-lg text-[#F58720] font-semibold	sm:ml-5 sm:mt-48 ">
              I have Refferal code
            </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="sm:w-[250px] w-[318px] py-2 border-2	rounded-md shadow-lg mt-3	sm:ml-5"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-10 sm:mt-0 sm:px-0 gap-5 sm:gap-0">
        <div className="sm:hidden block flex gap-[250px] border-t-2">
               <h6 className="font-bold	text-[#2C3D68]">Total</h6>
               <h5 className="font-bold	text-[#2C3D68]">₹2999</h5>
        </div>
        <button
          type="Submit"
          className="backgroud-button py-2.5 rounded-full text-center w-[353px] px-10 text-white hidden sm:block"
        > Save & Next
        </button>
        <button
          type="Submit"
          className="backgroud-button w-[338px]  py-2 rounded-full text-center text-white sm:hidden block"
        > Checkout
        </button>
      </div>
    </div>
  );
};

export default page;
