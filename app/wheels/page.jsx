"use client";
import React, { act, useState } from "react";
import FilterComponent from "../Components/Here";
import Card from "./Components/Card";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../Redux/CartSlice";

function page() {
  const [active, setActive] = useState(true);
  const count = useSelector((s) => s.cart.slected);
  const items = useSelector((s) => s.cart.items);
  const handleActive = () => {
    setActive(!active);
  };
  const dispatch = useDispatch();
  return (
    <>
      <FilterComponent />
      <div className="max-w-[95%] lg:max-w-[75%] mx-auto">
        <div className="w-full py-[40px] flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[30px]">
            <span className="text-[13p] text-[#808080] w-[170px]">
              Сортировать по:
            </span>

            <div className="flex gap-[30px]">
              <div
                onClick={handleActive}
                className="flex transition-all duration-500 hover:text-[#ff5200] gap-2 cursor-pointer text-[13px] text-[#010101]"
              >
                {active && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="rgba(51,51,51,1)"
                  >
                    <path d="M21 17.9995V19.9995H3V17.9995H21ZM6.59619 3.90332L8.01041 5.31753L4.82843 8.49951L8.01041 11.6815L6.59619 13.0957L2 8.49951L6.59619 3.90332ZM21 10.9995V12.9995H12V10.9995H21ZM21 3.99951V5.99951H12V3.99951H21Z"></path>
                  </svg>
                )}
                Наличию
              </div>

              <div
                onClick={handleActive}
                className="flex gap-2 transition-all duration-500 hover:text-[#ff5200] cursor-pointer text-[13px] text-[#010101]"
              >
                {!active && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="rgba(51,51,51,1)"
                  >
                    <path d="M21 17.9995V19.9995H3V17.9995H21ZM6.59619 3.90332L8.01041 5.31753L4.82843 8.49951L8.01041 11.6815L6.59619 13.0957L2 8.49951L6.59619 3.90332ZM21 10.9995V12.9995H12V10.9995H21ZM21 3.99951V5.99951H12V3.99951H21Z"></path>
                  </svg>
                )}
                Цене
              </div>
            </div>
          </div>

          <div className="flex gap-2 text-[13px] cursor-pointer    decoration-dotted text-[#1A1A1A]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="rgba(60,60,60,1)"
            >
              <path d="M21 13.2422V20H22V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422ZM19 13.9725C18.8358 13.9907 18.669 14 18.5 14C17.2409 14 16.0789 13.478 15.25 12.6132C14.4211 13.478 13.2591 14 12 14C10.7409 14 9.5789 13.478 8.75 12.6132C7.9211 13.478 6.75911 14 5.5 14C5.331 14 5.16417 13.9907 5 13.9725V20H19V13.9725ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path>
            </svg>
            Наличие в магазинах
          </div>
        </div>

        <div className="relative">
          {/* Chap tomondagi sticky button */}
          <Link href={"#"}>
            <button className="fixed top-[80%] left-2 lg:left-[150px] w-[60px] h-[60px] bg-white z-50 flex justify-center items-center border border-gray-300 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="rgba(0,0,0,1)"
              >
                <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
              </svg>
            </button>
          </Link>

          {/* Asosiy content */}
          <div className="flex w-[100%] flex-wrap pb-10">
            {items.map((e) => (
              <Card
                key={e.id}
                id={e.id}
                img={e.img}
                title={e.title}
                type={e.type}
                size={e.size}
              />
            ))}
          </div>

          {/* O'ng tomondagi sticky button */}
          <button
            onClick={() => dispatch(changeModal(true))}
            className="fixed top-[80%] right-2 lg:right-[170px] w-[60px] h-[60px] bg-white z-50 flex justify-center items-center border border-gray-300 p-2 rounded-full"
          >
            <div className=" relative">
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
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default page;
