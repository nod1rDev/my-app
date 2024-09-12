"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../Redux/CartSlice";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const count = useSelector((s) => s.cart.selected);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const dispatch = useDispatch();
  return (
    <div className="w-full py-4 lg:py-[30px] border-b border-b-gray-200 flex justify-center text-[#1a1a1a] items-center bg-white relative">
      <div className="px-4 lg:px-[15px] flex flex-col md:flex-row justify-between items-center w-full lg:w-[75%]">
        <div className="flex items-center   justify-between w-[100%] lg:hidden ">
          <Link href={"/"}>
            <div className="flex items-center gap-2 lg:gap-[10px]">
              <img
                className="w-8 h-8 lg:w-[34px] lg:h-[34px]"
                src="https://sibirkoleso.ru/local/templates/sk/dist/images/logo.svg?id=0b29b7b1edfbdf44dadd0fb3651222cd"
                alt="Logo"
              />
              <div className="text-lg lg:text-[20px] font-bold">
                Сибирь Колесо
              </div>
            </div>
          </Link>

          <div className="w-[1px] h-[30px] bg-[#e5e5e5] mx-6 lg:mx-[50px] hidden lg:block"></div>

          <button
            onClick={toggleMenu}
            className="my-1 flex items-center cursor-pointer"
          >
            {!isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="svg-icon"
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(2,0,0,1)"
                className="svg-icon"
              >
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            )}

            <div className="text-sm lg:text-[13px] ml-3 lg:ml-[13px] transition-all duration-400 hover:text-[#ff5200]">
              Меню
            </div>
          </button>
        </div>

        <div className="hidden items-center    lg:flex ">
          <Link href={"/"}>
            <div className="flex items-center gap-2 lg:gap-[10px]">
              <img
                className="w-8 h-8 lg:w-[34px] lg:h-[34px]"
                src="https://sibirkoleso.ru/local/templates/sk/dist/images/logo.svg?id=0b29b7b1edfbdf44dadd0fb3651222cd"
                alt="Logo"
              />
              <div className="text-lg lg:text-[20px] font-bold">
                Сибирь Колесо
              </div>
            </div>
          </Link>

          <div className="w-[1px] h-[30px] bg-[#e5e5e5] mx-6 lg:mx-[50px] hidden lg:block"></div>

          <button
            onClick={toggleMenu}
            className="my-1 flex items-center cursor-pointer"
          >
            {!isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="svg-icon"
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(2,0,0,1)"
                className="svg-icon"
              >
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            )}

            <div className="text-sm lg:text-[13px] ml-3 lg:ml-[13px] transition-all duration-400 hover:text-[#ff5200]">
              Меню
            </div>
          </button>
        </div>

        <button
          className="relative"
          onClick={() => dispatch(changeModal(true))}
        >
          <img
            className="w-4 h-4 hidden lg:block lg:w-[16px] lg:h-[16px]"
            src="https://krasnoyarsk.sibirkoleso.ru/local/templates/sk/dist/images/header-cart-empty.svg"
            alt="Cart"
          />
          {count ? (
            <span className="absolute hidden lg:flex bottom-[-10px] right-[-10px] bg-orange-500 text-white text-xs rounded-full w-4 h-4  items-center justify-center">
              {count && count}
            </span>
          ) : (
            ""
          )}
        </button>

        <button
          onClick={() => dispatch(changeModal(true))}
          className="flex relative justify-end items-center lg:hidden w-[100%] mt-[15px] pt-[15px] "
        >
          <img
            className="w-4 h-4   lg:w-[16px] lg:h-[16px]"
            src="https://krasnoyarsk.sibirkoleso.ru/local/templates/sk/dist/images/header-cart-empty.svg"
            alt="Cart"
          />
          {count ? (
            <span className="absolute bottom-[-10px] right-[-10px] bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {count && count}
            </span>
          ) : (
            ""
          )}
        </button>
      </div>

      {/* Menyu ochiq bo'lsa ko'rinadi */}
      {isMenuOpen && (
        <div className="absolute top-[60px] border-t border-t-gray-200 lg:top-[80px] left-0 w-full bg-white shadow-lg z-10">
          <div className="w-full lg:w-[75%] mx-auto py-5 lg:py-[20px] flex flex-col lg:flex-row  md:items-center justify-between">
            <div className="flex pl-6 md:pl-0 gap-10 lg:gap-[70px]">
              <Link href={"/wheels"}>
                <div
                  onClick={toggleMenu}
                  className=" lg:text-left cursor-pointer"
                >
                  <img className=" lg:mx-0" src="/shina.png" alt="Icon" />
                  <div className="mt-2 lg:mt-[10px] transition-all font-bold duration-400 hover:text-[#ff5200]">
                    Шины
                  </div>
                  <div className="text-sm text-gray-500">36 792 модели</div>
                </div>
              </Link>
              <Link onClick={toggleMenu} href={"/wheels"}>
                <div className=" lg:text-left cursor-pointer">
                  <img className=" lg:mx-0" src="/disk.png" alt="Icon" />
                  <div className="mt-2 lg:mt-[10px] transition-all font-bold duration-400 hover:text-[#ff5200]">
                    Диски
                  </div>
                  <div className="text-sm text-gray-500">16 195 моделей</div>
                </div>
              </Link>
            </div>

            <div className="bg-[#e6e6e6] h-[1px] lg:h-[145px] w-full lg:w-[1px] my-5 lg:my-0"></div>

            <div className="flex flex-row gap-5 lg:gap-[47px]">
              <div className="w-full lg:w-[190px] text-center lg:text-left">
                <ul className="space-y-2 lg:space-y-[10px]">
                  <li
                    onClick={toggleMenu}
                    className="transition-all duration-400 hover:text-[#ff5200] cursor-pointer"
                  >
                    <Link href={"/about"}>О компании</Link>
                  </li>

                  <li
                    onClick={toggleMenu}
                    className="transition-all duration-400 hover:text-[#ff5200] cursor-pointer"
                  >
                    <Link href={"/contacts"}>Контакты</Link>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-[190px] text-center lg:text-left">
                <ul className="space-y-2 lg:space-y-[10px]">
                  <li
                    onClick={toggleMenu}
                    className="transition-all duration-400 hover:text-[#ff5200] cursor-pointer"
                  >
                    <Link href={"/payment"}>Оплата</Link>
                  </li>
                  <li
                    onClick={toggleMenu}
                    className="transition-all duration-400 hover:text-[#ff5200] cursor-pointer"
                  >
                    <Link href={"/delevry"}>Доставка</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#e6e6e6] h-[1px] lg:h-[145px] w-full lg:w-[1px] my-5 lg:my-0"></div>
            <div className="pl-6 md:pl-0 lg:text-left flex flex-col gap-1 lg:gap-[10px]">
              <span className=" text-gray-600 text-[13px]">
                Единая справочная
              </span>
              <a href="tel:88007751050" className=" text-lg   font-bold">
                8 800 775-10-50
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
