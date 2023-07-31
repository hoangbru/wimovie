import Image from "next/image";
import React from "react";
import Overview from "./Overview";
type Props = {};

const EpisodeItem = (props: Props) => {
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad qui beatae temporibus quisquam hic quis cupiditate! Odit, dignissimos? Quisquam, alias voluptatibus autem odit minus harum modi! Quibusdam veniam saepe explicabo?";
  return (
    <div className="flex justify-center items-center gap-5 bg-[#4B4B4B]/[46%] w-[100%] h-[150px] px-5 py-3 hover:opacity-75 cursor-pointer">
      <span>1</span>
      <Image
        src={"/images/poster.jpg"}
        alt="episode"
        width={1000}
        height={0}
        className="object-cover w-[125px] h-[75px]"
      />
      <div className="flex flex-col gap-3 justify-start">
        <div className="flex justify-between">
          <p className="font-bold text-xl">Tap 1</p>
          <p className="font-bold text-xl">95 min</p>
        </div>
        <Overview content={content} />
      </div>
    </div>
  );
};

export default EpisodeItem;
