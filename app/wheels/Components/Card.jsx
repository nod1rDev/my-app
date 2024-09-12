"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Card({ img, title, type, size, id }) {
  const navigation = useRouter();
  return (
    <div
      onClick={() => navigation.push("/wheels/" + id)}
      className="p-[30px] border border-[#dcdcdc] flex flex-col hover:border-[#ff5200] transition-all duration-700 mx-auto lg:mx-0 w-[355px] lg:w-[278.5px] cursor-pointer"
    >
      <div className="flex justify-center items-center min-h-[250px] overflow-hidden">
        <img
          src={img}
          alt=""
          className="transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
      </div>
      <span className="text-[13px] text-[#404040] font-bold">{title}</span>
      <span className="text-[13px] text-[#808080]">{type}</span>
      <span className="text-[13px] text-[#404040]">{size}</span>
    </div>
  );
}

export default Card;
