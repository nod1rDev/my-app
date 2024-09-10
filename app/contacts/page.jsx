import React from "react";

function page() {
  return (
    <div className="h-full py-[40px]  lg:py-[80px] mx-auto w-[95%] lg:w-[75%] flex flex-col lg:flex-row lg:justify-between">
      <div className="flex flex-col">
        <div className="w-[55px] h-[2px] bg-[#1A1A1A]"></div>
        <div className="py-[20px] lg:py-[50px]  text-start text-[#1A1A1A] text-[22px] lg:text-[30px] font-bold">
          Контакты
        </div>
      </div>

      <div className="lg:pt-[60px] lg:px-[15px] lg:w-[635px] flex  flex-col">
        <span className="text-[13px] text-[#808080]">Единая справочная</span>
        <a
          href="tel:88007751050"
          className="font-bold text-[30px] mb-[17px] lg:mb-[25px] text-[#404040]"
        >
          8 800 775 1050
        </a>
        <a
          href="tel:+73833885532"
          className=" mb-[20px] lg:mb-[45px] text-[#808080] text-[13px] "
        >
          +7 (383) <span className="text-[#404040]"> 388-55-32 </span>
        </a>

        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@sibirkoleso.ru"
          className="text-[18px] mb-[20px] lg:mb-[45px] font-bold"
        >
          info@sibirkoleso.ru
        </a>

        <div className="text-[13px] mb-[17px] lg:mb-[24px] text-[#404040]">
          Сибирь-Колесо, головной офис
          <br />
          630088, Россия, г. Новосибирск, ул. Петухова, 35, корпус 8
        </div>

        <div className="flex flex-col pb-[17px] lg:mb-[25px] ">
          <span className="text-[#808080] text-[13px]">Реквизиты</span>
          <div className="text-[13px] text-[#404040]">
            Индивидуальный предприниматель Панфилов Александр Александрович
            <br />
            Почтовый адрес: 630098, г. Новосибирск, ул. Приморская, д. 26, кв.
            62.
            <br />
            Фактический адрес: 630098, г. Новосибирск, ул. Приморская, д. 26,
            кв. 62.
            <br />
            ИНН 540809560848
            <br />
            ОГРНИП 305547305300045 (от 22 Февраля 2005 г.)
            <br />
            Расчетный счет №40802810532020000230
            <br />
            в филиал ПАО «БАНК УРАЛСИБ» в г. Новосибирске.
            <br />
            БИК 045004725
            <br />
            Кор. счет №30101810400000000725
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
