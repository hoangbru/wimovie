import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { LuPlay } from "react-icons/lu";

type Props = {
  href: string;
};

const Trailer: FC<Props> = ({ href }) => {
  return (
    <Link
      href={href}
      className="
      relative
      group
      transition
      hover:scale-110
      hover:ring-1 ring-zinc-50 ring-offset-1 rounded-md
    "
    >
      <button className="relative min-w-[150px] min-h-[75px]">
        <Image
          src={"/images/luca-backdrop.jpeg"}
          alt="trailer image"
          fill
          className="rounded-md object-cover"
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
          p-2
          drop-shadow-md 
          bottom-2
          right-2
          group-hover:opacity-100 
        "
      >
        <LuPlay size={12} />
      </div>
    </Link>
  );
};

export default Trailer;
