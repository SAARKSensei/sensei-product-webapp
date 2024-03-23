"use client";
import React from "react";
// import Navbar from "../Components/Navbar";

import Subject from "../../../Components/Subject";

import { subjectData, counsellorData } from "../../../utils";
import CounsellorCard from "../../../Components/CounsellorCard";
import Link from "next/link";
import { useSelector } from "react-redux";
import Activities from "@/Components/Activities";

const UserDashboard = () => {
  const parentData = useSelector((state) => state?.parents?.data);
  let address = `/user/${parentData?.name}`;

  return (
    <div
      style={{ background: "linear-gradient(180deg, #EDE6DA 5.2%, #FFF 100%)" }}
      className=" lg:px-20 w-full h-screen from-gray-200 to-white flex flex-col items-center"
    >
      {/* <Navbar /> */}
      <div className=" mt-[200px] flex items-center flex-col gap-5 w-full px-5">
        <div className="w-[353px] md:w-full inline-flex flex-col items-start gap-1 m-auto md:ml-4">
          <p className="text-gray-800 font-quicksand text-sm font-semibold tracking-tighter uppercase">
            Hello!
          </p>
          <Link className="no-underline" href={address}>
            <p className="text-black font-quicksand text-6xl font-semibold tracking-tighter">
              Avatar name
            </p>
          </Link>
          <p className="w-[236px] text-gray-800 font-quicksand text-sm  font-normal tracking-tighter">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>
        <div className=" md:w-full md:flex gap-5 justify-around">
          <div className="hidden md:block bg-[#e8ecf0] flex-grow  rounded-lg p-5 mt-8">
            <Activities />
          </div>
          <div>
            {subjectData.map((item, i) => (
              <Subject
                key={i}
                subjectName={item?.subjectName}
                percentage={item?.percentage}
                innerSubjectDivColor={item?.innerSubjectDivColor}
                innerBarColor={item?.innerBarColor}
              />
            ))}
          </div>
        </div>
        <div className="w-[353px] mt-5 h-auto flex flex-col items-center gap-2.5">
          <h2 className="text-gray-800 text-center font-nunitoSans text-lg font-bold leading-5 tracking-tighter uppercase mb-5">
            Trending Counsellors
          </h2>
          <div className="flex md:flex-row flex-col gap-5">
            {counsellorData.map((item, i) => (
              <CounsellorCard
                key={i}
                counsellorName={item?.counsellorName}
                speciality={item?.speciality}
                rating={item?.rating}
                price={item?.price}
              />
            ))}
          </div>
        </div>
        <div className="inline-flex flex-col md:items-center items-start gap-5 mb-6">
          <h2 className="text-black font-nunito text-lg font-semibold tracking-tighter">
            School Details
          </h2>
          <div className="w-[353px] h-[140px] flex-shrink-0 rounded-[20px] bg-[#2C3D68] p-2.5 px-[15px] flex items-center justify-between">
            <div className="flex flex-col gap-2.5">
              <p className="text-white font-nunito text-xs font-normal tracking-tighter">
                School Name:
              </p>
              <p className="text-white font-nunito text-xs font-normal tracking-tighter">
                Location:
              </p>
              <p className="text-white font-nunito text-xs font-normal tracking-tighter">
                Email ID:
              </p>
              <p className="text-white font-nunito text-xs font-normal tracking-tighter">
                Phone No.:
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[#FCD97D] text-right font-nunito text-sm leading-normal tracking-tighter">
                Spring Dale Public School
              </p>
              <p className="text-[#FCD97D] text-right font-nunito text-sm leading-normal tracking-tighter">
                Vadgaon Bk, Pune
              </p>
              <p className="text-[#FCD97D] text-right font-nunito text-sm leading-normal tracking-tighter">
                abcdef@xyz.com
              </p>
              <p className="text-[#FCD97D] text-right font-nunito text-sm leading-normal tracking-tighter">
                020-45478203
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
