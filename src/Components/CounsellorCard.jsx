"use client";

import React from "react";
import Image from "next/image";

import Star from "../Images/star2.svg";
import MaskGroup1 from "../Images/maskgroup1.svg";

const CouncellorCard = ({ counsellorName, speciality, rating, price }) => {
  return (
    <div className="w-[350px] h-[150px] flex items-center justify-end relative">
      <Image
        size="auto"
        className="absolute left-0 z-50"
        src={MaskGroup1}
        alt="maskgroup"
      />
      <div className="w-[278px] h-[124px] py-[17px] px-2.5 rounded-[10px] flex items-center justify-end gap-[25px] bg-white counsellordontentdiv-shadow">
        <div className="flex flex-col items-center gap-[5px]">
          <p className="text-black font-NunitoSans text-base font-semibold tracking-tighter leading-normal">
            {counsellorName}
          </p>
          <p className="text-black font-NunitoSans text-sm font-light leading-4 tracking-tighter uppercase">
            {speciality}
          </p>
          <p className="inline-flex px-5 py-2.5 justify-center items-center gap-2.5 rounded-[10px] bg-[#FF8B13] text-white font-NunitoSans text-base font-bold leading-[18px] tracking-tighter">
            &#8377; {price}
          </p>
        </div>
        <div className="w-[51px] h-[51px] relative flex items-center justify-center mb-auto">
          <Image size="auto" src={Star} alt="star" />
          <p className="absolute text-[#2C3D68] font-NunitoSans text-sm font-extrabold leading-normal tracking-tighter top-[19px] left-[15px">
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouncellorCard;
