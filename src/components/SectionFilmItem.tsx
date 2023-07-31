import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: string;
};

const SectionFilmItem: FC<Props> = ({ href }) => {
  return (
    <Link
      href={href}
      className="
      hover:rounded-lg 
      hover:opacity-75 
      hover:ring-2 ring-zinc-50 ring-offset-2
      transition
    "
    >
      <Image
        src={"/images/poster.jpg"}
        alt="poster of film"
        width={300}
        height={0}
        className="rounded-lg w-[300px] h-[150px] object-cover p-1"
      />
    </Link>
  );
};

export default SectionFilmItem;
