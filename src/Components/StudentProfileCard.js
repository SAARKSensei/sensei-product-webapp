"use client"

import Image from "next/image"
import Link from "next/link"

import Editicon from "./EditIcon"
import ParentProfileIcon from "../Images/profileParentIcon.svg"

import StudentReactangle from "../Images/studentrectangle.svg"
import StudentImageIcon from "../Images/studentimageicon.svg"

const StudentProfileCard = ({ child }) => {

    return (
        <Link
            href={`/user/${child?.childName}/userdashboard`}
            className='relative w-[164px] h-[273px] sm:w-[330px] sm:h-[169px] flex flex-col shrink-0 rounded-[10px] p-[10px] sm:p-5 gap-[10px] bg-white cursor-pointer studentprofilecard-shadow'>
            <div className="absolute top-[19px] left-0 sm:left-[101px] z-30">
                <Image src={StudentReactangle} alt="studentReactangle" />
                <p className='absolute text-black font-NunitoSans text-xs font-semibold ml-2 top-[1px]'>#sensei_Stu_Id</p>
            </div>
            <div className="relative flex sm:flex-row">
                <Image src={StudentImageIcon} alt="studentimage icon" className="sm:hidden" />
                <Image src={ParentProfileIcon} alt="studentimage icon" className="hidden sm:block" />
                <Editicon placeAtTop={false} />
                <div className="w-[120px] h-10 hidden sm:flex flex-col items-start mt-auto ml-5 gap-[5px]">
                    <p className="text-[#333] font-NunitoSans text-base font-semibold leading-5">Avatar Name</p>
                    <p className="text-[#333] font-NunitoSans text-sm font-normal leading-[14px]">{child?.childName ? child?.childName : "Child name"}</p>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex sm:hidden flex-col gap-[5px]">
                    <p className="text-[#333] font-NunitoSans text-base font-semibold leading-5">Avatar Name</p>
                    <p className="text-[#333] font-NunitoSans text-sm font-normal leading-[14px]">{child?.childName ? child?.childName : "Child name"}</p>
                </div>
                <div className="flex flex-col items-start gap-[10px]">
                    <div className="flex gap-[5px]">
                        <p className="text-[#FF8B13] font-NunitoSans text-sm font-semibold leading-[14px]">Grade</p>
                        <p className="text-black font-Quicksand text-sm font-normal leading-[14px]">{child?.grade}</p>
                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-[#FF8B13] font-NunitoSans text-sm font-semibold leading-[14px]">School</p>
                        <p className="text-black font-Quicksand text-sm font-normal leading-[14px]">{child?.schoolId}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default StudentProfileCard