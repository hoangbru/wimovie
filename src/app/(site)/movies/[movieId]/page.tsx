/* eslint-disable @next/next/no-img-element */
import {
  Backdrop,
  Button,
  Cast,
  EpisodeList,
  FrameWatchFilm,
  InfoFilm,
  Overview,
  Poster,
  Search,
} from "@/components";
import Image from "next/image";
import { LuPlay } from "react-icons/lu";

export const metadata = {
  title: `Wimovie | Movie -`,
};

const page = () => {
  return (
    <div
      className="
      relative
      flex
      flex-col
      justify-center 
      items-center 
    "
    >
      <div className="w-full h-[700px] bg-gradient-to-r from-gray-500">
        <Backdrop image="/images/luca-backdrop.jpeg" className="w-[100%]" />
      </div>
      <div className="absolute top-2 right-8">
        <Search />
      </div>
      <div className="flex gap-5 absolute top-20 left-6">
        <button className="relative min-w-[350px] min-h-[500px] group flex gap-5 pb-10">
          <Image
            src={"/images/luca-poster.jpeg"}
            alt="poster film"
            fill
            className="object-cover rounded-md w-[350px] h-[500px] transition ease-in-out cursor-pointer"
          />
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
            p-5
            drop-shadow-md 
            top-[45%]
            left-[40%]
            group-hover:opacity-80
          "
          >
            <LuPlay size={28} />
          </div>
        </button>
        <div className="flex flex-col justify-start gap-1">
          <InfoFilm />
        </div>
      </div>

      {/* <FrameWatchFilm /> */}
      <div className="px-6 pt-6">
        <EpisodeList />
      </div>
    </div>
  );
};

export default page;
