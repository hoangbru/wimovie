import React from "react";
import Overview from "./Overview";
import Cast from "./Cast";

type Props = {};

const InfoFilm = (props: Props) => {
  const content =
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolor enim sed voluptates consectetur, explicabo cum repellendus, perspiciatis ipsa nihil nam assumenda autem debitis pariatur voluptate delectus repellat, provident voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolor enim sed voluptates consectetur, explicabo cum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolor enim sed voluptates consectetur, explicabo cum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolor enim sed voluptates consectetur, explicabo cum repellendus, perspiciatis ipsa nihil nam assumenda autem debitis pariatur voluptate delectus repellat, provident voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolor enim sed voluptates consectetur, explicabo cum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolor enim sed voluptates consectetur, explicabo cum";
  return (
    <div>
      <h3 className="text-white font-semibold text-5xl pb-3">Luca</h3>
      <p className="text-base font-light">
        <span className="font-semibold">Time:</span> 1h 35min
      </p>
      <p className="text-base font-light">
        <span className="font-semibold">Release Date:</span> June 18, 2021
      </p>
      <p className="text-base font-light">
        <span className="font-semibold">Genres:</span> Action, Comedy, Animation
      </p>
      <div className="w-[60%] h-[145px] overflow-y-auto">
        <Overview content={content} />
      </div>
      <p className="text-base font-light">
        <span className="font-semibold">Directed By:</span> hehe
      </p>
      <p className="text-base font-light">
        <span className="font-semibold">Produced By:</span> hehe
      </p>
      <div className="w-[60%]">
        <p className="text-base font-light">
          <span className="font-semibold">Cast:</span> hehe, hola, batman, lowg,
          mck, tlinh, wrxdie, migu, mugi, wtf bro, sdkjfskjf, them cai nua
        </p>
      </div>
      <div className="w-[60%] pt-4">
        <Cast />
      </div>
    </div>
  );
};

export default InfoFilm;
