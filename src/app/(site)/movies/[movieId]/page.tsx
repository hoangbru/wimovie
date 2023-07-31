import {
  Backdrop,
  Cast,
  EpisodeList,
  FrameWatchFilm,
  InfoFilm,
  Overview,
  Poster,
} from "@/components";
import Image from "next/image";
import { LuPlay } from "react-icons/lu";

export const metadata = {
  title: `Wimovie | Movie - `,
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
      <div className="w-full h-[700px] bg-gradient-to-r from-indigo-500">
        <Backdrop
          image="/images/luca-backdrop.jpeg"
          className="w-[100%] "
        />
      </div>
      <div className="flex flex-col gap-5 absolute top-20 left-6">
        <div className="flex gap-5 pb-10">
          <Image
            src={"/images/luca-poster.jpeg"}
            alt="poster film"
            width={1000}
            height={0}
            className="relative w-[350px] h-[500px] object-cover rounded-md"
          />
          <LuPlay size={28} className="absolute flex items-center justify-center"/>
          <div className="flex flex-col justify-start gap-1">
            <InfoFilm />
          </div>
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
