import Image from "next/image";
import React from "react";
import Overview from "./Overview";
import { LuPlay } from "react-icons/lu";

type Props = {};

const EpisodeItem = (props: Props) => {
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui beatae temporibus quisquam hic quis cupiditate! Odit, dignissimos? Quisquam, alias voluptatibus autem odit minus harum modi! Quibusdam veniam saepe explicabo?";
  return (
    <div className="relative group flex justify-center items-center gap-5 bg-[#4B4B4B]/[46%] w-[100%] h-[150px] px-5 py-3 hover:opacity-75 cursor-pointer">
      <span>1</span>
      <button className="relative min-w-[125px] min-h-[75px]">
        <Image
          src={"/images/poster.jpg"}
          alt="episode"
          fill
          className="object-cover"
        />
      </button>
      <div
        className="
          absolute 
          transition 
          opacity-0 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-[#DB9100]
          p-3
          drop-shadow-md 
          bottom-2
          right-5
          group-hover:opacity-100 
        "
      >
        <LuPlay size={20}/>
      </div>
      <div className="flex flex-col gap-3 justify-start">
        <div className="flex justify-between">
          <p className="font-bold text-xl">Tap 1</p>
          <p className="font-bold text-xl">95 min</p>
        </div>
        <div className="w-[95%]">
          <Overview content={content} />
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
