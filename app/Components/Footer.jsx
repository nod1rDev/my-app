import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#282828] py-[55px] text-gray-400 flex  items-end">
      <div className="w-[75%] mx-auto">
        <div className="flex flex-col md:flex-row  items-center ">
          <div className="flex flex-col  ">
            <span className="font-bold text-[20px] inline duration-400 hover:text-[#ff5200] cursor-pointer">
              <Link href={"/wheels"}>Шины</Link>
            </span>
            <span className="font-bold text-[20px] inline duration-400 hover:text-[#ff5200] cursor-pointer">
              <Link href={"/Disks"}>Диски</Link>
            </span>
          </div>
          <div className="flex flex-col mt-[100px] md:mt-[0px] md:ml-[200px] md:flex-row gap-[100px]">
            <div className="flex flex-col ">
              <span className="  inline duration-400 hover:text-[#ff5200] cursor-pointer">
                <Link href={"/about"}>О компании</Link>
              </span>
              <span className="  inline duration-400 hover:text-[#ff5200] cursor-pointer">
                <Link href={"/contacts"}>Контакты</Link>
              </span>
            </div>

            <div className="flex flex-col ">
              <span className="  inline duration-400 hover:text-[#ff5200] cursor-pointer">
                <Link href={"/payment"}>Оплата</Link>
              </span>
              <span className="  inline duration-400 hover:text-[#ff5200] cursor-pointer">
                <Link href={"/delevry"}>Доставка</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
