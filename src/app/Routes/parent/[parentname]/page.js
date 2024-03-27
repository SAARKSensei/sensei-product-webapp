/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { resetChildren } from '@/Redux/slice/childrenSlice';
import { resetParents } from '@/Redux/slice/parentSlice';

import Navbar3 from '@/Components/Navbar3'
import Background1 from '@/Components/Background1.js'
import Editicon from '@/Components/EditIcon'
import StudentProfileCard from '@/Components/StudentProfileCard'

import ParentProfileIcon from "@/Images/profileParentIcon.svg"
import BranchLinesMob from "@/Images/branchlinesmob.svg";
import BranchLinesDesk from "@/Images/bigbranches.svg"

const page = () => {

    const parentData = useSelector(state => state?.parents?.data);
    const childData = useSelector(state => state?.children?.data);

    let occupation;
    let kids = childData.length;

    if (parentData?.occupation && parentData?.spouseOccupation) {
        occupation = "Both";
    } else {
        occupation = "Only one";
    }

    const dispatch = useDispatch();
    const router = useRouter();

    const deleteUser = async () => {
        dispatch(resetChildren())
        dispatch(resetParents())
        router.push("/")
    }

    return (
        <div className='w-full h-auto flex flex-col items-center'>
            <Background1 />
            <Navbar3 />
            <div className="mt-[150px] w-[353px] sm:w-[90%] flex flex-col sm:flex-row items-center justify-center mx-auto">
                <div className='w-full sm:w-max'>
                    <div className="w-[353px] h-[167px] rounded-[20px] bg-white studentprofilecard-shadow shrink-0 p-5 relative flex flex-col justify-between">
                        <div className="flex items-end">
                            <Editicon placeAtTop={true} />
                            <Image src={ParentProfileIcon} alt="Parent Profile icon" />
                            <div className="flex items-start flex-col gap-[5px] ml-[10px]">
                                <p className='text-black font-NunitoSans text-lg font-semibold  leading-5'>{parentData?.name}</p>
                                <p className="text-black font-Quicksand text-sm font-normal leading-[14px]">{parentData?.phone}</p>
                                <p className="text-black font-NunitoSans text-sm font-light leading-[14px] text-wrap">{parentData?.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between relative">
                            <div className="w-1/2 inline-flex items-start flex-col gap-[5px]">
                                <div className="inline-flex items-start gap-[5px]">
                                    <p className="text-[#FF8B13] font-NunitoSans text-sm font-semibold leading-[14px]">Location</p>
                                    <p className="text-black font-Quicksand text-sm font-normal leading-[14px]">Baner</p>
                                </div>
                                <div className="inline-flex items-start gap-[5px]">
                                    <p className="text-[#FF8B13] font-NunitoSans text-sm font-semibold leading-[14px]">Working</p>
                                    <p className="text-black font-Quicksand text-sm font-normal leading-[14px]">{occupation}</p>
                                </div>
                            </div>
                            <div className='w-1/2 inline-flex justify-end gap-[5px]'>
                                <p className="text-[#FF8B13] font-NunitoSans text-sm font-semibold leading-[14px] ml-[10px]">Kid(s)</p>
                                <p className="text-black font-Quicksand text-sm font-normal leading-[14px]">{kids}</p>
                            </div>
                        </div>
                        <Image className='absolute block sm:hidden top-[165px] left-[165px]' src={BranchLinesMob} alt="branchlines" />
                    </div>
                </div>
                <div className='sm:w-max hidden sm:flex items-center justify-center'>
                    <Image className='w-[193px] h-[176px]' src={BranchLinesDesk} alt='branch lines' />
                </div>
                <div className="w-full sm:w-max grid grid-cols-2 place-items-center gap-[30px] mt-10 sm:m-0">
                    {childData.map((child, id) => {
                        return (
                            <StudentProfileCard key={id} child={child} />
                        )
                    })}
                </div>
            </div>
            <div className="my-[70px] mx-auto w-[353px] flex py-4 px-[10px] justify-center items-center rounded-[20px] border-2 border-solid border-[#F00] cursor-pointer z-[200]" onClick={deleteUser}>
                <p className="text-[#F00] font-Nunito text-base font-semibold leading-normal">Logout</p>
            </div>
        </div>
    )
}

export default page