import { useState } from "react";

import LeftScroll from "../Images/leftScroll.svg";
import RightScroll from "../Images/rightScroll.svg";

import { activityData } from "../utils";
import ActivityCard from "./ActivityCard";
import Image from "next/image";

const Activities = () => {
  const [value, setValue] = useState("fruit");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const options = [
    { label: "All", value: "all" },
    { label: "New", value: "new" },
    { label: "Completed", value: "completed" },
    { label: "Incomplete", value: "incomplete" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const inSchoolActivities = activityData[0];
  const afterSchoolActivities = activityData[1];

  return (
    <>
      <div className="flex flex-col items-start gap-8 w-full h-80">
        <div className="flex justify-between items-end w-full h-11">
          <p className="text-gray-900 font-nunitoSans text-lg font-bold leading-5 tracking-tighter uppercase">
            In-School Activities
          </p>
          <div className="flex items-center rounded-md">
            <select
              className="w-24 border-none outline-none text-black font-nunitoSans text-base font-normal leading-normal tracking-tighter inline-flex p-2.5 flex-col items-start gap-2.5 rounded-md shadow-lg bg-no-repeat bg-right-center bg-top-3.75 bg-right-3"
              style={{ backgroundImage: `url("../Images/dropdownArrow.svg"})` }}
              value={value}
              onChange={handleChange}
            >
              {options.map((option, index) => (
                <option
                  key={index}
                  className="bg-yellow-300 text-black font-nunitoSans text-base font-normal leading-normal tracking-tighter"
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex w-[353px] items-start gap-5 overflow-x-scroll scrollbar-hide">
          {inSchoolActivities.map((item, i) => (
            <ActivityCard
              key={i}
              unit={item?.unit}
              time={item?.time}
              topic={item?.topic}
            />
          ))}
        </div>
        <div className="w-full h-77 flex flex-col items-start gap-8">
          <div className="flex justify-between items-center w-full h-8">
            <p className="activitiesDivHeading">After-School Activities</p>
            <div className="w-18 h-8 flex items-start gap-2.5">
              <Image sizes="auto" src={LeftScroll} alt="leftscroll" />
              <Image
                sizes="auto"
                className="w-8 h-8 filter drop-shadow-sm transform scale-200"
                src={RightScroll}
                alt="rightscroll"
              />
            </div>
          </div>
          <div className="flex w-[353px] items-start gap-5 overflow-x-scroll scrollbar-hide">
            {afterSchoolActivities.map((item, i) => (
              <ActivityCard
                key={i}
                unit={item?.unit}
                time={item?.time}
                topic={item?.topic}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
