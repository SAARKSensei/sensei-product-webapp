import MentalHealthPic from "../Images/mentalhealthpic.svg";
import SexEducationPic from "../Images/sexeducationpic.svg";
import MoralScience from "../Images/moralsciencepic.svg";
import CareerGuidance1 from "../Images/careerguidance1.svg";
import CareerGuidance2 from "../Images/careerguidance2.svg";
import Activities from "./Activities";
import { useState } from "react";

import Image from "next/image";
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
      <div
        className="w-[353px] h-38 flex-shrink-0 relative flex items-end cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {specificSubjectPicture.length === 2 ? (
          <>
            <Image
              sizes="auto"
              className="absolute -top-[33px] right-10"
              src={specificSubjectPicture[0]}
              alt={subjectName}
            />
            <Image
              sizes="auto"
              className="absolute top-0 right-0"
              src={specificSubjectPicture[1]}
              alt={subjectName}
            />
          </>
        ) : (
          <Image
            sizes="auto"
            className="absolute -top-[33px] right-10"
            src={specificSubjectPicture}
            alt={subjectName}
          />
        )}
        <div
          className="w-full h-30 rounded-lg flex flex-col items-start gap-1.5 p-4"
          style={colorforinnerSubjectDiv}
        >
          <p className="text-blue-800 font-quicksand text-7xl font-bold tracking-tighter">
            {percentage}
          </p>
          <p className="text-gray-800 font-quicksand text-lg font-medium tracking-tighter">
            {subjectName}
          </p>
          <div className="w-80 h-4 flex-shrink-0">
            <div className="w-80 h-4 flex-shrink-0 bg-white rounded-full">
              <div
                className="h-4 rounded-full"
                style={sizeAndColorForInnerBar}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className="w-[353px] h-163 inline-flex flex-col items-start gap-7.5 animate-fade-in">
          <Activities />
        </div>
      )}
    </>
  );
};

export default Subject;
