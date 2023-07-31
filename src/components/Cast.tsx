'use client'
import Image from 'next/image';
import React from 'react'
import { useSnapCarousel } from "react-snap-carousel";

type Props = {}

const Cast = (props: Props) => {
    const { scrollRef } = useSnapCarousel();
  return (
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
            className="flex flex-col flex-shrink-0 justify-center items-center text-white"
          >
            <Image
                src={"/images/placeholder.jpg"}
                alt="cast"
                width={1000}
                height={0}
                className='w-[70px] h-[85px] pr-2 object-cover'
            />
            <p className='text-sm font-light pt-2'>Name</p>
          </li>
        ))}
      </ul>
  )
}

export default Cast