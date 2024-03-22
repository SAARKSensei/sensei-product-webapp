import React from 'react'
import Image from 'next/image'
import Star from '@/Images/star.svg'
import Heart from '@/Images/heart.svg'
import Thumb from '@/Images/thumb.svg'
import Bulb from '@/Images/bulb.svg'
import Puzzle from '@/Images/puzzle.svg'
import SmileStar from '@/Images/smileStar.svg'

const pages = () => {
  return (
    <div className="h-screen w-screen absolute opacity-15	z-0">
      <Image src={Star} className="absolute left-1/3" />
      <Image src={Heart} className="absolute top-1/4" />
      <Image src={Thumb} className="absolute top-1/4 left-1/4 ml-40" />
      <Image src={Bulb} className="absolute left-3/4 ml-60 top-20" />

      <Image src={Puzzle} className="absolute left-3/4 ml-28 top-2/3" />
      <Image src={SmileStar} className="absolute top-1/2 mt-28 z-0" />
    </div>
  );
}

export default pages