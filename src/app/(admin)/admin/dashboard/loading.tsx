"use client";

import { BounceLoader } from "react-spinners";

import {Box} from "@/components";

const Loading = () => {
  return ( 
    <Box className="h-full flex items-center justify-center">
      <BounceLoader color="#EF4444" size={40} />
    </Box>
  );
}
 
export default Loading;