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
      <div className="flex sm:flex-row flex-col">
      <div className="whitespace-nowrap gap-3 mt-36 ml-24 sm:hidden flex">
            <h4 className="text-sm text-[#2C3D68] font-semibold	">Monthly</h4>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider1 round"></span>
            </label>
            <h4 className="text-sm text-[#2C3D68] font-semibold	">Annually</h4>
          </div>

        <div className="sm:mt-36 mt-5 sm:ml-56 w-1/2 px-[20px]">
          <h1 className="font-semibold	text-2xl text-[#2C3D68]">
            Order Summary
          </h1>
          <div className="sm:h-40 sm:w-10/12 h-[128px] w-[353px] border-2 border-slate-300	mt-5 rounded-lg flex felx-row justify-between sm:pr-5 pr-2">
           <div className="flex gap-4">
           <div>
              <Image src={Book} alt="book" className="sm:h-32 sm:w-50 h-[78px] w-[66px] sm:mt-3 my-[20px] sm:my-0 ml-2 pl-2 sm:pl-0" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="sm:text-lg text-base font-semibold tracking-wide text-[#2C3D68]">
                Student Name
              </h3>
              <div className="flex flex-row gap-4 text-sm	">
                <h6>Age: 7 years </h6>
                <h6> Grade:1</h6>
              </div>
              <h4 className="mt-2 sm:px-1 px-0.6 rounded-md border-2 border-blue-600 whitespace-nowrap	bg-blue-200">
                Foundational Course
              </h4>
            </div>
           </div>
            <div>
             <div className="h-full flex flex-col justify-around">
             <div className="flex sm:gap-3 gap-1">
                <Image src={LikeIcon} />
                <Image className="" src={DeletIcon} />
              </div>
              <h4 className="text-lg font-semibold text-[#2C3D68]">
                ₹2999
              </h4>
             </div>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col">
          <div className="whitespace-nowrap gap-3 mt-36 mb-7 ml-24 hidden sm:flex">
            <h4 className="text-sm text-[#2C3D68] font-semibold	">Monthly</h4>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider1 round"></span>
            </label>
            <h4 className="text-sm text-[#2C3D68] font-semibold	">Annually</h4>
          </div>
          <div className="sm:h-96 sm:w-72 h-10 sm:mt-0 mt-16 sm:border-2 border-0 rounded-md	border-slate-300">
            <h1 className="text-lg text-[#F58720] font-semibold	ml-5 sm:mt-48	mt-0">
              I have Refferal code
            </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="sm:px-8 py-2 border-2 w-[353px] text-start sm:w-[250px] 	rounded-md shadow-lg mt-3	ml-5"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between sm:hidden w-[353px] px-5 font-bold text-lg text-[#2C3D68] mt-16 border-b-2 border-slate-200">
        <h1>Total</h1>
        <h1>₹5998</h1>
      </div>
      <div className="flex sm:justify-center sm:text-center px-[20px] sm:px-0 ">
        <button
          type="Submit"
          className="backgroud-button py-2.5 rounded-full sm:text-center px-32 text-white mt-8 sm:mt-0 "
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default page;
