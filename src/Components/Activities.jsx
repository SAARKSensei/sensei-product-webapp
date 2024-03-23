import { useState } from "react";
import Image from "next/image";

import LeftScroll from "../Images/leftScroll.svg";
import RightScroll from "../Images/rightScroll.svg";

import { activityData } from "../utils";
import ActivityCard from "./ActivityCard";

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
      <div className="w-full flex flex-col items-start gap-[30px]">
        <div className="w-full h-11 flex justify-between items-end">
          <p className="text-[#333] font-NunitoSans text-lg font-bold leading-5 tracking-tighter uppercase">
            In-School Activities
          </p>
          <div className="flex items-center rounded-[5px]">
            <select
              className="w-[100px] h-11 border-none outline-none text-black bg-white font-NunitoSans text-sm font-normal leading-normal tracking-tighter inline-flex py-2.5 px-3 flex-col items-start gap-2.5 rounded-[5px] activitiesDiv1Dropdown-select-shadow cursor-pointer"
              value={value}
              onChange={handleChange}
            >
              {options.map((option, index) => (
                <option
                  key={index}
                  className="bg-[#FCD970] text-black font-NunitoSans text-base font-normal leading-normal tracking-tighter"
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-[353px] flex items-start gap-5 overflow-x-scroll scrollbar-hide">
          {inSchoolActivities.map((item, i) => (
            <ActivityCard
              key={i}
              unit={item?.unit}
              time={item?.time}
              topic={item?.topic}
            />
          ))}
        </div>
        <div className="w-full flex flex-col items-start gap-[30px]">
          <div className="w-full h-8 flex justify-between items-center self-stretch">
            <p className="text-[#333] font-NunitoSans text-lg font-bold leading-5 tracking-tighter uppercase">After-School Activities</p>
            <div className="w-[74px] h-8 flex items-start gap-2.5">
              <Image src={LeftScroll} alt="leftscroll" />
              <Image
                className="w-8 h-8 drop-filter-shadow scale-[200%]"
                src={RightScroll}
                alt="rightscroll"
              />
            </div>
          </div>
          <div className="w-[353px] flex items-start gap-5 overflow-x-scroll scrollbar-hide">
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
