'use client'
import React, { FC } from "react";

import { useSnapCarousel } from "react-snap-carousel";
import SectionFilmItem from "./SectionFilmItem";

type Props = {
  sectionTitle: string;
};

const SectionFilm: FC<Props> = ({ sectionTitle }) => {
  const { scrollRef } = useSnapCarousel();

  return (
    <div>
      <h1 className="text-lg py-2">{sectionTitle}</h1>
      <ul
        ref={scrollRef}
        style={{
          display: "flex",
          overflow: "auto",
          scrollSnapType: "x mandatory",
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className="flex flex-shrink-0 justify-center items-center text-white"
          >
            <SectionFilmItem href={"/movies/1"} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionFilm;
