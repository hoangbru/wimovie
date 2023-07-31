import Image from "next/image";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string,
  image: string
}

const Backdrop:FC<Props> = ({className, image}) => {
  return (
    <Image
      src={image}
      alt="backdrop of film"
      width={1000}
      height={0}
      quality={100}
      className={twMerge(
        `w-[100%] h-[100%] object-cover`,
        className
      )}
    />
  );
};

export default Backdrop;
