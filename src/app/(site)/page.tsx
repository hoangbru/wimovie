"use client";

// Component
import {
  Backdrop,
  Button,
  LikeButton,
  Overview,
  Search,
  SectionFilm,
  Trailer,
} from "@/components";
import Link from "next/link";

// hooks
import { useState } from "react";

// icons
import { HiPlayCircle } from "react-icons/hi2";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const watchTrailer = () => {
    setIsLoading(true);
  };
  const content =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolor enim sed voluptates consectetur, explicabo cum repellendus, perspiciatis ipsa nihil nam assumenda autem debitis pariatur voluptate delectus repellat, provident voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere placeat fugiat fugit officia, ipsum architecto minima. Ad aliquam neque sint quasi ipsum? Deleniti, laboriosam ex commodi architecto nemo cupiditate earum?";
  return (
    <div
      className="
      relative
      flex
      flex-col
      justify-center 
      items-center 
      h-full 
      overflow-y-auto
      "
    >
      <Backdrop image="/images/backdrop.jpeg" />
      {/* <div className="bg-gradient-to-l from-gray-950"> */}
      <div className="absolute top-2 right-8">
        <Search />
      </div>
      <div className="absolute right-4 top-20 w-[40%] flex flex-col px-3 gap-5 text-right">
        <h2 className="text-white font-semibold text-7xl">Luca</h2>
        <div className="flex gap-5 justify-end items-center">
          <LikeButton filmId="1" />
          <Button disabled={isLoading} onClick={() => watchTrailer()}>
            Trailer
          </Button>
        </div>
        <div className="h-14 overflow-y-auto">
          <Overview content={content} />
        </div>
        <div className="flex gap-2 justify-end">
          <Trailer href={"hee"} />
          <Trailer href={"hee"} />
          <Trailer href={"hee"} />
        </div>
        <div className="flex justify-end">
          <Link href={`/movies/1`}>
            <Button className="flex gap-3 bg-[#DB9100] justify-between items-center">
              Play
              <HiPlayCircle size={32} color="#fff" />
            </Button>
          </Link>
        </div>
      </div>
      {/* </div> */}
      <div className="absolute bottom-6 left-8 right-8 ">
        <div className="w-full ">
          <SectionFilm sectionTitle="Continue Watching" />
        </div>
      </div>
    </div>
  );
}
