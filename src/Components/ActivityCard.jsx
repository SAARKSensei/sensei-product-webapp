import React from "react";

import SelfIdentity from "../Images/selfIdentity.jpeg";
import StrengthsAndChallenges from "../Images/strengthsAndChallenges.jpeg";
import StrengthsAndChallenges2 from "../Images/strengthsAndChallenges2.jpeg";
import MyBodyAndEmotions from "../Images/myBodyAndEmotions.jpeg";

import YellowArrow from "../Images/yellowArrow.png";
import Lock from "../Images/lock-50.png";

import MyFavouriteThings from "../Images/myFavouriteThings.jpeg";
import MyProudMomentsAndRest from "../Images/myProudMoments.jpeg";
import Image from "next/image";

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
    <div className="w-68 h-61 flex flex-col items-start gap-2">
      <div className="w-68 h-46 rounded-xl relative bg-gradient-to-b from-blue-900 to-blue-900 bg-opacity-40 bg-lightgray">
        {time === "30mins" && (
          <div className="w-68 h-46 rounded-xl absolute top-0 left-0 bg-blue-900 bg-opacity-40"></div>
        )}
        {specificTopicPicture.length === 2 ? (
          <>
            <Image
              fill
              className="w-68 h-46 rounded-xl object-cover"
              src={specificTopicPicture[0]}
              alt={topic}
            />
            {time === "5mins" && (
              <div className="w-68 h-46 rounded-xl absolute top-0 left-0 bg-blue-900 bg-opacity-90"></div>
            )}
            <Image
              fill
              className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={specificTopicPicture[1]}
              alt={topic}
            />
          </>
        ) : (
          <Image
            fill
            className="w-68 h-46 rounded-xl object-cover"
            src={specificTopicPicture}
            alt={topic}
          />
        )}
      </div>
      <div className="flex justify-between items-start w-full">
        <p className="text-orange-500 font-nunitoSans text-base font-bold leading-5 tracking-tighter uppercase">
          {unit}
        </p>
        <p className="text-orange-500 text-right font-nunitoSans text-base font-bold leading-5 tracking-tighter uppercase">
          {time}
        </p>
      </div>
      <p className="text-blue-900 font-nunitoSans text-lg font-bold leading-5 tracking-tighter">
        {topic}
      </p>
    </div>
  );
};

export default ActivityCard;
