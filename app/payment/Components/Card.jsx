import React from "react";

function Card({ icon, title, p }) {
  return (
    <div className="p-[40px] border lg:w-[355px] w-[395px] border-[#e6e6e6]">
      <img className=" mb-[40px]" src={icon} alt="" />

      <h1 className="text-[18px] font-bold mb-[30px] text-[#1A1A1A]">
        {title}
      </h1>

      <p className="text-[13px] text-[#404040] ">{p}</p>
    </div>
  );
}

export default Card;
