import React from "react";
import Image from "next/image";
import Star from "../Images/star2.svg";
import MaskGroup1 from "../Images/maskgroup1.svg";

const CouncellorCard = ({ counsellorName, speciality, rating, price }) => {
  return (
    <div className="w-[350px] h-38 flex items-center justify-end relative">
      <Image
        size="auto"
        className="absolute left-0 z-50"
        src={MaskGroup1}
        alt="maskgroup"
      />
      <div className="w-[278px] h-31 p-4 rounded-lg flex items-center justify-end gap-6 bg-white shadow-md">
        <div className="flex flex-col items-center gap-1">
          <p className="text-black font-nunitoSans text-base font-semibold tracking-tighter">
            {counsellorName}
          </p>
          <p className="text-black font-nunitoSans text-sm font-light leading-4 tracking-tighter uppercase">
            {speciality}
          </p>
          <p className="inline-flex px-5 py-2.5 justify-center items-center gap-2.5 rounded-lg bg-orange-500 text-white font-nunitoSans text-base font-bold leading-4.5 tracking-tighter">
            &#8377; {price}
          </p>
        </div>
        <div className="w-13 h-13 relative flex items-center justify-center mb-auto">
          <Image size="auto" src={Star} alt="star" />
          <p className="absolute text-blue-800 font-nunitoSans text-sm font-extrabold tracking-tighter top-[14px] left-3.75">
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouncellorCard;
