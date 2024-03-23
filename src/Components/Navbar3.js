"use client"

import React from 'react'

import mainLogo from "../Images/mainlogo.svg"
import studentProfPic from "../Images/studentProfPic.svg"
import NavbarRectangle from "../Images/Rectangle 719.svg"
import Bell from "../Images/bell.svg"
import Image from 'next/image'


const Navbar3 = () => {

    let idName;

    if (window.location.pathname === "/Routes/userdashboard") {
        idName = "Student 1 name"
    } else {
        idName = "#sensei_Stu_Id";
    }


    return (
        <div className='fixed flex z-50 w-full h-[120px] shrink-0 rounded-b-[20px] navbar3-bg'>
            <div className="flex justify-between items-center w-full h-20 mt-auto pt-[10px] px-5">
                <Image className='h-[50px]' src={mainLogo} alt="sensei logo" />
                <div className="h-full flex items-center pb-5">
                    <div className=" w-40 h-[50px] shrink-0 flex items-center">
                        <div className="relative z-10 w-[110px] h-5 translate-x-[10px]">
                            <Image className='absolute w-[110px]' src={NavbarRectangle} alt="slate" />
                            <p className="absolute text-black font-NunitoSans text-xs font-bold bottom-0 right-[10px]">{idName}</p>
                        </div>
                        <Image className='z-20' src={studentProfPic} alt="profilepicture" />
                    </div>
                    <div className="relative ml-5">
                        <Image src={Bell} alt="bellicon" />
                        <p className='bg-[#FF8B13] rounded-[50%] absolute top-[-2px] right-1 w-2 h-2'></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar3