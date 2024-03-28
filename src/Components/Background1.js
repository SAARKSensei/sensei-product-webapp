import React from "react";
import Image from "next/image";
import Star from "@/Images/star.svg";
import Heart from "@/Images/heart.svg";
import Thumb from "@/Images/thumb.svg";
import Bulb from "@/Images/bulb.svg";
import Puzzle from "@/Images/puzzle.svg";
import SmileStar from "@/Images/smileStar.svg";

const pages = () => {
  return (
    <div className="h-screen w-screen absolute hidden sm:block opacity-15	z-[-10]">
      <Image src={Star} alt="star" className="absolute left-1/3" />
      <Image
        src={Heart}
        alt="heart"
        className="absolute top-1/4 left-3/4 ml-32 mt-10"
      />
      <Image src={Thumb} alt="thumb" className="absolute top-20 ml-10" />
      <Image src={Bulb} alt="bulb" className="absolute left-3/4 ml-60 top-20" />

      <Image
        src={Puzzle}
        alt="puzzle"
        className="absolute left-3/4 ml-28 top-2/3"
      />
      <Image
        src={SmileStar}
        alt="smilestar"
        className="absolute top-1/2 mt-28 z-0"
      />
    </div>
  );
};

export default pages;
