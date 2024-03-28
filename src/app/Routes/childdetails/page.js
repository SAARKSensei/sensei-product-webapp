/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import Navbar1 from "@/Components/Navbar1";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import axios from "axios";

import DeleteIcon from "@/Images/delete-icon.svg";
import AddChild from "@/Images/Addchild.svg";
import Background from "@/Components/Background1.js";
import PlusIcon from "@/Images/plusIcon.svg";

const page = () => {
  const currentUserData = useSelector((state) => state?.currentUser?.data);

  const router = useRouter();
  const [visitingCounsellor, setVisitingCounsellor] = useState(false);
  const [medicalHistory, setMedicalHistory] = useState(false);

  const [persons, setPersons] = useState({
    childNo: 1,
    details: [{ childName: "", grade: "", schoolName: "", plan: "", date: "" }],
  });

  const handleChange = (key, value) => {
    setPersons((prevState) => {
      const updatedDetails = prevState.details.map((detail, index) => {
        if (index === prevState.childNo - 1) {
          return { ...detail, [key]: value };
        }
        return detail;
      });
      return { ...prevState, details: updatedDetails };
    });
  };

  const postChildData = async () => {
    try {
      const data = {
        parentUserId: currentUserData?.parentId,
        childName: persons.details[persons.childNo - 1].childName,
        schoolId: persons.details[persons.childNo - 1].schoolName,
        dateOfBirth: persons.details[persons.childNo - 1].date,
        visitingCounsellor: visitingCounsellor,
        anyMedicalHistory: medicalHistory,
        medicalHistoryDescription: null,
        bloodGroup: "B+",
        grade: persons.details[persons.childNo - 1].grade,
      };
      console.log("data to be sent", data);
      const res = await axios.post(
        `https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/create/child`,
        data
      );
      // console.log(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addPerson = () => {
    postChildData();
    setPersons({
      childNo: persons.childNo + 1,
      details: [
        ...persons.details,
        { childName: "", grade: "", schoolName: "", plan: "", date: "" },
      ],
    });
    setVisitingCounsellor(false);
    setMedicalHistory(false);
    console.log("add new child", persons);
  };

  const saveData = async (e) => {
    e.preventDefault();
    postChildData();
    router.push(`/Routes/ordersummary`);
  };

  return (
    <div className="h-screen w-screen">
      <Background />
      <Navbar1 parentName={currentUserData.name} />
      <div className="flex justify-center items-center sm:block flex-col sm:items-start sm:justify-center">
        <div className="flex flex-col justify-center items-center mt-24 sm:mt-0 font-Nunito">
          <h1 className=" text-[#2C3D68] sm:text-3xl text-2xl font-bold sm:mt-28">
            Add child’s details
          </h1>
          <h6 className="font-Nunito font-normal text-sm text-gray-600">
            Please fill in the correct details
          </h6>
        </div>
        <div key={persons.childNo}>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-12 gap-2 mt-5">
            <div className="w-[353px] h-[569px] sm:w-[562px] sm:h-[388px]  bg-[#FFF8F1] rounded-lg  z-50">
              <div className="flex justify-between items-center rounded-ss-lg rounded-se-lg sm:px-5  sm:justify-between px-5 w-full h-14 bg-[#F58720]  z-50">
                <h1 className="font-bold font-Nunito text-xl text-white">
                  {persons.childNo}. Child
                </h1>
                <Image className="" src={DeleteIcon} alt="Delete-Icon" />
              </div>
              <form>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 px-5 mt-3 sm:mt-5 font-NunitoSans">
                  <div className="flex flex-col sm:w-[279px] sm:h-[75px]">
                    <label htmlFor="" className="mb-2">
                      Child Name
                    </label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={persons.details[persons.childNo - 1].childName}
                      onChange={(e) =>
                        handleChange("childName", e.target.value)
                      }
                      placeholder="Enter full name"
                      className="px-6 py-3 sm:border-2 rounded-md outline-none"
                    />
                  </div>
                  <div className="flex flex-col sm:w-[230px] sm:h-[75px] justify-between">
                    <label htmlFor="" className="">
                      Grade
                    </label>
                    <select
                      required
                      id="grade"
                      name="grade"
                      value={persons.details[persons.childNo - 1].grade}
                      onChange={(e) => handleChange("grade", e.target.value)}
                      className="block w-full h-[46px] px-6 py-2 sm:border-2 rounded-md outline-none bg-white"
                    >
                      <option value="Select">Select</option>
                      <option value="New York">1</option>
                      <option value="Los Angeles">2</option>
                      <option value="Los Angeles">3</option>
                      <option value="Los Angeles">4</option>
                      <option value="Los Angeles">5</option>
                      <option value="Los Angeles">6</option>
                      <option value="Los Angeles">7</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 px-5 mt-2 sm:mt-5">
                  <div className="flex flex-col sm:w-[279px] sm:h-[75px]">
                    <label htmlFor="" className="mb-2">
                      School Name
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      value={persons.details[persons.childNo - 1].schoolName}
                      onChange={(e) =>
                        handleChange("schoolName", e.target.value)
                      }
                      placeholder="Enter full name"
                      className="px-6 py-3 sm:border-2 rounded-md outline-none"
                    />
                  </div>
                  <div className="flex flex-col sm:w-[230px] sm:h-[75px]">
                    <label htmlFor="" className="mb-2">
                      DOB
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={persons.details[persons.childNo - 1].date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="px-5 py-2 sm:border-2 rounded-md outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 px-5 mt-2 sm:mt-5 ">
                  <div className="flex flex-col justify-center w-full sm:w-[279px] h-[75px]">
                    <label htmlFor="">Choose Plan</label>
                    <select
                      required
                      id="plan"
                      name="plan"
                      className="block mt-2 sm:w-[272px] px-6 py-2 sm:border-2 rounded-md outline-none bg-white"
                    >
                      <option value="Select">Select</option>
                      <option value="New York">Rs. 299/-</option>
                      <option value="Los Angeles">Rs. 1299/-</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="flex flex-col sm:gap-4 gap-2 mt-2 sm:mt-0 sm:w-[230px] h-[88px]">
                    <div className="w-full flex justify-between whitespace-nowrap gap-1">
                      <h4 className="text-sm ">Visiting any counsellor:</h4>
                      <label
                        className="switch  mb-2"
                        onClick={() => setVisitingCounsellor(true)}
                      >
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="w-full flex justify-between whitespace-nowrap gap-6">
                      <h4 className="text-sm ">Any Medical History</h4>
                      <label
                        className="switch"
                        onClick={() => setMedicalHistory(true)}
                      >
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div
              onClick={addPerson}
              className="flex sm:flex-col z-50 justify-between sm:justify-center items-center px-2 sm:px-6 sm:py-20 w-[353px] h-12 sm:w-[283px] sm:h-[344px] border-2 sm:border-4 border-[#F58720] rounded-lg sm:flex sm:gap-10 cursor-pointer mt-8 sm:mt-0"
            >
              <h1 className="sm:text-2xl w-[140px] sm:h-16 text-[#F58720] text-center font-semibold  font-Nunito">
                Add another child
              </h1>{" "}
              <Image
                className="w-[77px] h-[77px] hidden sm:block z-50"
                src={AddChild}
                alt="AddChild-Icon"
              />{" "}
              <Image
                className="sm:hidden block h-5 w-5  z-50"
                src={PlusIcon}
                alt="AddChild-Icon"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-12">
            <button
              onClick={saveData}
              className="backgroud-button z-50 py-2.5 rounded-full text-center px-32 text-white font-Nunito font-extrabold text-lg"
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
