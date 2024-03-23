"use client";

import React from 'react'
import EditIcon from "../Images/editicon.svg"
import Image from 'next/image'

const Editicon = ({ placeAtTop }) => {

    return (
        <div className={`w-8 h-8 rounded-[50%] flex items-center justify-center absolute ${placeAtTop ? "top-5 right-5" : "right-[10px] bottom-[10px] sm:top-0 sm:right-0"}`}>
            <Image src={EditIcon} alt="editicon" />
        </div>
    )
}

export default Editicon