"use client";
import React from "react";
// import Navbar from "../Components/Navbar";

import Subject from "../../../Components/Subject";

import { subjectData, counsellorData } from "../../../utils";
import CounsellorCard from "../../../Components/CounsellorCard";
import Link from "next/link";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const parentData = useSelector((state) => state?.parents?.data);
  let address = `/user/${parentData?.name}`;

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-200 to-white flex flex-col items-center">
      {/* <Navbar /> */}
      <div className="mt-50 flex items-center flex-col gap-5 w-full px-5">
        <div className="inline-flex flex-col items-start gap-1 m-auto ml-4">
          <p className="text-gray-800 font-quicksand text-sm font-semibold tracking-tighter uppercase">
            Hello!
          </p>
          <Link className="no-underline" href={address}>
            <p className="text-black font-quicksand text-6xl font-semibold tracking-tighter">
              Avatar name
            </p>
          </Link>
          <p className="w-59 text-gray-800 font-quicksand text-sm font-medium tracking-tighter">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>
        {subjectData.map((item, i) => (
          <Subject
            key={i}
            subjectName={item?.subjectName}
            percentage={item?.percentage}
            innerSubjectDivColor={item?.innerSubjectDivColor}
            innerBarColor={item?.innerBarColor}
          />
        ))}

        <div className="w-88 mt-5 h-auto flex flex-col items-center gap-2.5">
          <h2 className="text-gray-800 text-center font-nunitoSans text-lg font-bold leading-5 tracking-tighter uppercase mb-5">
            Trending Counsellors
          </h2>
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
        <div className="inline-flex flex-col items-start gap-5 mb-6">
          <h2 className="text-black font-nunito text-lg font-semibold tracking-tighter">
            School Details
          </h2>
          <div className="w-88 h-35 flex-shrink-0 rounded-xl bg-blue-800 p-2.5 flex items-center justify-between">
            <div className="flex flex-col gap-2.5">
              <p className="text-white font-nunito text-xs font-medium tracking-tighter">
                School Name:
              </p>
              <p className="text-white font-nunito text-xs font-medium tracking-tighter">
                Location:
              </p>
              <p className="text-white font-nunito text-xs font-medium tracking-tighter">
                Email ID:
              </p>
              <p className="text-white font-nunito text-xs font-medium tracking-tighter">
                Phone No.:
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-yellow-300 text-right font-nunito text-sm leading-normal tracking-tighter">
                Spring Dale Public School
              </p>
              <p className="text-yellow-300 text-right font-nunito text-sm leading-normal tracking-tighter">
                Vadgaon Bk, Pune
              </p>
              <p className="text-yellow-300 text-right font-nunito text-sm leading-normal tracking-tighter">
                abcdef@xyz.com
              </p>
              <p className="text-yellow-300 text-right font-nunito text-sm leading-normal tracking-tighter">
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
