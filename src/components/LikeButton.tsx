"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";

type LikeButtonProps = {
  filmId: string;
};

const LikeButton: React.FC<LikeButtonProps> = ({ filmId }) => {
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
  }, []);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;
  const handleLike = async () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
        setIsLiked(true);
    }

    router.refresh()
  };
  return (
    <button
      className="
        cursor-pointer 
        hover:opacity-75 
        transition
        text-red-500
      "
      onClick={handleLike}
    >
      <Icon color={isLiked ? "#EF4444" : "white"} size={32} />
    </button>
  );
};

export default LikeButton;
