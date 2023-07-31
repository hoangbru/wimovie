import Image from "next/image";
import React from "react";
import Overview from "./Overview";
import EpisodeItem from "./EpisodeItem";

const EpisodeList = () => {
  
  return (
    <div>
      <div className="flex justify-center items-center border-2 border-white rounded-full px-3 py-2">Episode</div>
      <div className="flex flex-col gap-3 h-[500px] overflow-y-auto">
        <EpisodeItem/>
        <EpisodeItem/>
        <EpisodeItem/>
        <EpisodeItem/>
        <EpisodeItem/>
        <EpisodeItem/>
        <EpisodeItem/>
        <EpisodeItem/>
        <EpisodeItem/>
        <EpisodeItem/>
      </div>
    </div>
  );
};

export default EpisodeList;
