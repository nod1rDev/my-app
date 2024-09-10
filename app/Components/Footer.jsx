import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#282828] py-[55px] text-gray-400 flex  items-end">
      <div className="w-[75%] mx-auto">
        <div className="flex flex-col md:flex-row  items-center ">
          <div className="flex flex-col  ">
            <span className="font-bold text-[20px] inline duration-400 hover:text-[#ff5200] cursor-pointer">
              Шины
            </span>
            <span className="font-bold text-[20px] inline duration-400 hover:text-[#ff5200] cursor-pointer">
              Диски
            </span>
          </div>
          <div className="flex flex-col mt-[100px] md:mt-[0px] md:ml-[200px] md:flex-row gap-[100px]">
            <div className="flex flex-col ">
              <span className="  inline duration-400 hover:text-[#ff5200] cursor-pointer">
                О компании
              </span>
              <span className="  inline duration-400 hover:text-[#ff5200] cursor-pointer">
                Контакты
              </span>
            </div>

            <div className="flex flex-col ">
              <span className="  inline duration-400 hover:text-[#ff5200] cursor-pointer">
                Оплата
              </span>
              <span className="  inline duration-400 hover:text-[#ff5200] cursor-pointer">
                Доставка
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
