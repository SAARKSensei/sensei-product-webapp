import React from 'react'
import EditIcon from "../Images/editicon.svg"
import Image from 'next/image'

const Editicon = ({ placeAtTop }) => {

    return (
        <div className={`bg-[#F8BF3B] w-8 h-8 rounded-[50%] flex items-center justify-center absolute ${placeAtTop ? "top-5 right-5" : " right-[10px] bottom-[10px]"}`}>
            <Image src={EditIcon} alt="editicon" />
        </div>
    )
}

export default Editicon