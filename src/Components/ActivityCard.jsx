"use client";

import React from "react";
import Image from "next/image";

import SelfIdentity from "../Images/selfIdentity.jpeg";
import StrengthsAndChallenges from "../Images/strengthsAndChallenges.jpeg";
import StrengthsAndChallenges2 from "../Images/strengthsAndChallenges2.jpeg";
import MyBodyAndEmotions from "../Images/myBodyAndEmotions.jpeg";

import YellowArrow from "../Images/yellowArrow.png";
import Lock from "../Images/lock-50.png";

import MyFavouriteThings from "../Images/myFavouriteThings.jpeg";
import MyProudMomentsAndRest from "../Images/myProudMoments.jpeg";

const ActivityCard = ({ unit, time, topic }) => {

  let specificTopicPicture;

  switch (unit) {
    case 1.1:
      specificTopicPicture = SelfIdentity;
      break;
    case 1.2:
      specificTopicPicture = [StrengthsAndChallenges, YellowArrow];
      break;
    case 2.1:
      specificTopicPicture = [MyBodyAndEmotions, YellowArrow];
      break;
    case 2.2:
      specificTopicPicture = [StrengthsAndChallenges2, YellowArrow];
      break;
    case "ASA 1":
      specificTopicPicture = MyFavouriteThings;
      break;
    case "ASA 2":
      specificTopicPicture = [MyProudMomentsAndRest, Lock];
      break;
    case "ASA 3":
      specificTopicPicture = [MyProudMomentsAndRest, Lock];
      break;
    case "ASA 4":
      specificTopicPicture = [MyProudMomentsAndRest, Lock];
      break;
    default:
      break;
  }
  return (
    <div className="w-[272px] h-[244px] flex flex-col items-start gap-2 mb-3">
      <div className="w-[272px] h-[184px] rounded-[20px] relative activities-bg">
        {time === "30mins" ? (
          <div className="w-[272px] h-[184px] rounded-[20px] absolute top-0 left-0 bg-[#2c3d68] bg-opacity-40"></div>
        ) : ""}
        {specificTopicPicture.length === 2 ? (
          <>
            <Image
              className="w-[272px] h-[184px] rounded-[20px] object-cover"
              src={specificTopicPicture[0]}
              alt={topic}
            />
            {time === "5mins" ?
              <p className="w-[272px] h-[184px] rounded-[20px] absolute top-0 left-0 bg-[#2c3d68] bg-opacity-90"></p> : ""}
            <Image
              className="w-[44px] h-[44px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={specificTopicPicture[1]}
              alt={topic}
            />
          </>
        ) : (
          <Image
            className="w-[272px] h-[184px] rounded-[20px] object-cover"
            src={specificTopicPicture}
            alt={topic}
          />
        )}
      </div>
      <div className="flex justify-between items-start self-stretch">
        <p className="text-[#FF8B13] font-NunitoSans text-sm font-bold leading-5 tracking-tighter uppercase">
          {unit}
        </p>
        <p className="text-[#FF8B13] text-right font-NunitoSans text-sm font-bold leading-5 tracking-tighter uppercase">
          {time}
        </p>
      </div>
      <p className="text-[#2C3D68] font-NunitoSans text-lg font-bold leading-5 tracking-tighter">
        {topic}
      </p>
    </div>
  );
};

export default ActivityCard;
