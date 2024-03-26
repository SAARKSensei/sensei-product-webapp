"use client";

import Image from "next/image";
import { useState } from "react";

import Activities from "./Activities";

import MentalHealthPic from "../Images/mentalhealthpic.svg";
import SexEducationPic from "../Images/sexeducationpic.svg";
import MoralScience from "../Images/moralsciencepic.svg";
import CareerGuidance1 from "../Images/careerguidance1.svg";
import CareerGuidance2 from "../Images/careerguidance2.svg";

const Subject = ({
  subjectName,
  percentage,
  innerSubjectDivColor,
  innerBarColor,
}) => {

  const [show, setShow] = useState(false);

  const colorforinnerSubjectDiv = {
    background: innerSubjectDivColor,
  };

  const sizeAndColorForInnerBar = {
    background: innerBarColor,
    width: percentage,
  };

  let specificSubjectPicture;

  switch (subjectName) {
    case "Mental health":
      specificSubjectPicture = MentalHealthPic;
      break;
    case "Sex Education":
      specificSubjectPicture = SexEducationPic;
      break;
    case "Moral Science":
      specificSubjectPicture = MoralScience;
      break;
    case "Career Guidance":
      specificSubjectPicture = [CareerGuidance1, CareerGuidance2];
      break;
    default:
      break;
  }

  return (
    <>
      <div className="w-[353px] h-[153px] flex-shrink-0 relative flex items-end">
        {specificSubjectPicture.length === 2 ? (
          <>
            <Image
              sizes="auto"
              className="absolute top-0 right-[41px]"
              src={specificSubjectPicture[0]}
              alt={subjectName}
            />
            <Image
              sizes="auto"
              className="absolute top-[33px] right-0"
              src={specificSubjectPicture[1]}
              alt={subjectName}
            />
          </>
        ) : (
          <Image
            sizes="auto"
            className="absolute top-0 right-[41px]"
            src={specificSubjectPicture}
            alt={subjectName}
          />
        )}
        <div
          className="w-full h-[120px] rounded-lg flex flex-col items-start gap-1.5 py-4 px-[10px] cursor-pointer"
          style={colorforinnerSubjectDiv}
          onClick={() => setShow(!show)}
        >
          <p className="text-[#2C3D68] font-Quicksand text-3xl font-normal leading-6 tracking-tighter">
            {percentage}
          </p>
          <p className="text-[#333] font-Quicksand text-lg font-medium tracking-tighter">
            {subjectName}
          </p>
          <div className="w-full h-4 flex-shrink-0">
            <div className="w-full h-4 flex-shrink-0 bg-white rounded-[18px]">
              <div
                className="h-4 rounded-[18px]"
                style={sizeAndColorForInnerBar}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className="w-[353px] h-[653px] sm:bg-[#E8ECF0] inline-flex sm:hidden flex-col items-start gap-[30px] animate-fade-in">
          <Activities />
        </div>
      )}
    </>
  );
};

export default Subject;
