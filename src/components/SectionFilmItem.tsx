import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { LuPlay } from "react-icons/lu";

type Props = {
  href: string;
};

const SectionFilmItem: FC<Props> = ({ href }) => {
  return (
    <Link
      href={href}
      className="
      relative
      group
      hover:rounded-lg 
      hover:opacity-75 
      hover:ring-2 ring-zinc-50 ring-offset-2
      transition
    "
    >
      <button className="relative min-w-[300px] min-h-[150px]">
        <Image
          src={"/images/poster.jpg"}
          alt="poster of film"
          fill
          className="rounded-lg object-cover p-1"
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
          top-[35%]
          left-[45%]
          group-hover:opacity-100 
        "
      >
        <LuPlay size={20}/>
      </div>
    </Link>
  );
};

export default SectionFilmItem;
