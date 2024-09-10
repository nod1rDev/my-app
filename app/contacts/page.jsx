import React from "react";

function page() {
  return (
    <div className="h-full py-[80px] mx-auto w-[75%] flex justify-between">
      <div className="flex flex-col">
        <div className="w-[55px] h-[2px] bg-[#1A1A1A]"></div>
        <div className="py-[50px]  text-start text-[#1A1A1A] text-[30px] font-bold">
          Контакты
        </div>
      </div>

      <div className="pt-[60px] px-[15px] lg:w-[635px] flex flex-col">
        <span className="text-[13px] text-[#808080]">Единая справочная</span>
        <a
          href="tel:88007751050"
          className="font-bold text-[30px] mb-[25px] text-[#404040]"
        >
          8 800 775 1050
        </a>
        <a
          href="tel:+73833885532"
          className=" mb-[45px] text-[#808080] text-[13px] "
        >
          +7 (383) <span className="text-[#404040]"> 388-55-32 </span>
        </a>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@sibirkoleso.ru"
          className="text-[18px] mb-[45px] font-bold"
        >
          info@sibirkoleso.ru
        </a>

        <div className="text-[13px] mb-[24px] text-[#404040]">
          Сибирь-Колесо, головной офис
          <br />
          630088, Россия, г. Новосибирск, ул. Петухова, 35, корпус 8
        </div>

        <div className="flex flex-col ">
            <span className="text-[#808080]"></span>
        </div>
      </div>
    </div>
  );
}

export default page;
