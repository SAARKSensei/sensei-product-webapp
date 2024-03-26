"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Subject from "@/Components/Subject";
import Navbar3 from '@/Components/Navbar3';
import CounsellorCard from "@/Components/CounsellorCard";
import Background1 from '@/Components/Background1.js'
import Activities from "@/Components/Activities";

import { subjectData, counsellorData } from "@/utils";

const UserDashboard = () => {

  const [show, setShow] = useState(false);

  const parentData = useSelector((state) => state?.parents?.data);
  let address = `/Routes/parent/${parentData?.name}`;

  return (
    <div className="w-full h-screen flex flex-col items-center  from-gray-200 to-white ">
      <Background1 />
      <Navbar3 />
      <div className="w-full mt-[200px] flex flex-col items-center gap-5 px-5">
        <div className="w-[353px] sm:w-[1015px] inline-flex flex-col items-start gap-1">
          <p className="text-[#333] font-Quicksand text-sm sm:text-lg font-semibold sm:font-bold tracking-tighter uppercase">
            Hello!
          </p>
          <Link className="no-underline" href={address}>
            <p className="text-black font-Quicksand text-2xl sm:text-4xl font-semibold tracking-tighter">
              Avatar name
            </p>
          </Link>
          <p className="text-[#333] font-Quicksand text-sm sm:text-lg font-normal tracking-tighter">
            Let’s start your journey to a brighter future.
          </p>
        </div>
        <div className="w-full sm:w-[1015px] flex justify-center items-center sm:items-end sm:gap-[26px]">
          {show && (
            <div className="w-[632px] h-[703px] hidden sm:flex items-center justify-center rounded-[10px] p-5 sm:bg-[#CEE2E5] animate-fade-in">
              <Activities />
            </div>
          )}
          <div className="w-full flex flex-col items-center gap-5 sm:gap-10" onClick={() => setShow(!show)}>
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
          <h2 className="text-[#333] text-center font-NunitoSans text-lg font-normal leading-5 tracking-tighter uppercase mb-5">
            Trending Counsellors
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
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
        <div className=" w-[353px] sm:w-1/2 inline-flex flex-col items-start gap-5 mb-6">
          <h2 className="text-black font-Nunito text-lg font-semibold tracking-tighter leading-normal">
            School Details
          </h2>
          <div className="w-full h-[140px] shrink-0 rounded-[20px] bg-[#2C3D68] py-2.5 px-[15px] flex items-center justify-between">
            <div className="flex flex-col gap-2.5">
              <p className="text-white font-Nunito text-xs font-normal tracking-tighter leading-normal">
                School Name:
              </p>
              <p className="text-white font-Nunito text-xs font-normal tracking-tighter leading-normal">
                Location:
              </p>
              <p className="text-white font-Nunito text-xs font-normal tracking-tighter leading-normal">
                Email ID:
              </p>
              <p className="text-white font-Nunito text-xs font-normal tracking-tighter leading-normal">
                Phone No.:
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[#FCD97D] text-right font-Nunito text-sm leading-normal tracking-tighter">
                Spring Dale Public School
              </p>
              <p className="text-[#FCD97D] text-right font-Nunito text-sm leading-normal tracking-tighter">
                Vadgaon Bk, Pune
              </p>
              <p className="text-[#FCD97D] text-right font-Nunito text-sm leading-normal tracking-tighter">
                abcdef@xyz.com
              </p>
              <p className="text-[#FCD97D] text-right font-Nunito text-sm leading-normal tracking-tighter">
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
