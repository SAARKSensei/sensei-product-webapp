"use client";

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';

import Navbar3 from '@/Components/Navbar3'
import Editicon from '@/Components/EditIcon'
import StudentProfileCard from '@/Components/StudentProfileCard'

import ParentProfileIcon from "../../../Images/profileParentIcon.svg"
import BranchLinesMob from "../../../Images/branchlinesmob.svg";



const page = () => {

    // const parentData = useSelector(state => state?.parents?.data)
    // const childData = useSelector(state => state?.children?.data)
    // const dispatch = useDispatch();

    // const id = parentData?.id;

    // useEffect(() => {
    //     dispatch(fetchChildrenRequest({ id }))
    // }, [dispatch, id])

    // let occupation;
    // let kids = childData.length;

    // if (parentData?.occupation && parentData?.spouseOccupation) {
    //     occupation = "Both";
    // } else {
    //     occupation = "Only one";
    // }

    const parentData = [];
    const childData = [];

    let occupation;
    let kids = childData.length;

    const deleteUser = async () => {
        // dispatch(resetChildren())
        // dispatch(resetParents())
        // navigate("/")
    }

    return (
        <div className='w-full h-screen profilebg flex flex-col items-center'>
            <Navbar3 />
            <div className="mt-[150px] w-[353px] flex flex-col items-center">
                <div className="w-[353px] h-[167px] rounded-[20px] bg-white studentprofilecard-shadow shrink-0 p-5 relative flex flex-col justify-between">
                    <div className="flex items-end">
                        <Image src={ParentProfileIcon} alt="Parent Profile icon" />
                        <p className='w-20 text-black font-NunitoSans text-lg font-semibold ml-[10px] leading-5'>{parentData?.name}</p>
                    </div>
                    <Editicon placeAtTop={true} />
                    <div className="flex items-center">
                        <div className="w-1/2 inline-flex items-start flex-col gap-[5px]">
                            <div className="inline-flex items-start gap-[5px]">
                                <p className="text-[#FF8B13] font-NunitoSans text-sm font-semibold leading-[14px]">Location</p>
                                <p className="text-black font-Quicksand text-sm font-normal leading-[14px]">Baner</p>
                            </div>
                            <div className="inline-flex items-start gap-[5px]">
                                <p className="text-[#FF8B13] font-NunitoSans text-sm font-semibold leading-[14px]">Working</p>
                                <p className="text-black font-Quicksand text-sm font-normal leading-[14px]">{occupation}</p>
                                <p className="text-[#FF8B13] font-NunitoSans text-sm font-semibold leading-[14px] ml-[10px]">Kid(s)</p>
                                <p className="text-black font-Quicksand text-sm font-normal leading-[14px]">{kids}</p>
                            </div>
                        </div>
                        <div className="w-1/2 inline-flex items-start flex-col gap-[5px]">
                            <p className="text-black font-NunitoSans text-sm font-light leading-[14px]">{parentData?.email}</p>
                            <p className="text-black font-Quicksand text-sm text-right font-normal leading-[14px]">{parentData?.phone}</p>
                        </div>
                    </div>
                    <Image className='absolute top-[165px] left-[165px]' src={BranchLinesMob} alt="branchlines" />
                </div>
                <div className="w-full grid grid-cols-2 place-items-center gap-[30px] mt-10">
                    {childData.map((child, id) => {
                        return (
                            <StudentProfileCard key={id} child={child} />
                        )
                    })}
                </div>
                <div className="w-full flex py-4 px-[10px] justify-center items-center rounded-[20px] border-2 border-solid border-[#F00] my-[70px] mx-auto cursor-pointer">
                    <p className="text-[#F00] font-Nunito text-base font-semibold leading-normal" onClick={deleteUser}>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default page