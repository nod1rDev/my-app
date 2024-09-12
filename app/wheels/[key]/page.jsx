"use client";

import { SetCartt, changeModal } from "../../Redux/CartSlice";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Page() {
  const [data, setData] = useState([]);
  const { key } = useParams();
  const router = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imgRef = useRef(null);
  const [touch, setTouch] = useState(false);

  const items = useSelector((s) => s.cart.items);

  useEffect(() => {
    const singleData = items.find((e) => e.id == Number(key)); // id ni to'g'ri qiyoslash uchun Number bilan o'zgartiramiz
    setData(singleData);
  }, []);

  const handleMouseMove = (e) => {
    const { left, top } = imgRef.current.getBoundingClientRect();
    setMousePos({
      x: e.pageX - left,
      y: e.pageY - top,
    });
  };

  const dispatch = useDispatch();

  return (
    <div className="max-w-[95%] lg:max-w-[70%] mx-auto pb-[40px] lg:pb-[80px]">
      <div className="flex justify-end mb-[35px] pt-[10px] lg:mb-[75px]">
        <button onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="rgba(0,0,0,1)"
          >
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
          </svg>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[525px] lg:h-[400px] flex justify-center relative">
          <div
            className="relative overflow-hidden  cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            ref={imgRef}
          >
            <img
              src={data && data.img}
              alt=""
              className={`w-[300px] h-[290px] transition-transform duration-100 ${
                isHovering ? "scale-125" : "scale-100"
              }`}
              style={{
                transformOrigin: `${mousePos.x}px ${mousePos.y}px`,
              }}
            />
            {isHovering && (
              <div
                className="absolute border-2 border-gray-200 rounded-full pointer-events-none"
                style={{
                  width: "100px",
                  height: "100px",
                  top: `${mousePos.y - 75}px`,
                  left: `${mousePos.x - 75}px`,
                }}
              ></div>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-[30px] font-bold text-[#1A1A1A] my-[20px]">
            {data && data.title}
            <br />
            <span className="font-[400]">Снежная королева 58.6</span>
          </div>

          <span className="mt-[15px] lg:mt-[30px] text-[#404040] text-[14px]">
            5.5x14 / 4x98 / 35
          </span>

          <span className="mt-[15px] lg:mt-[30px] text-[#404040] text-[14px]">
            <span className="px-[2px] py-[1px] border-[0.5px] mr-[15px] border-gray-200">
              %
            </span>
            Рассрочка
          </span>

          <div className="mt-[15px] flex flex-col mb-[15px] lg:mt-[30px]">
            <span className="text-[13px] text-[#808080]">
              Цена (при заказе на сайте):
            </span>
            <span className="text-[22px] lg:text-[30px] text-[#1A1A1A]">
              {data && data.price}{" "}
              <span className="text-[13px] text-[#808080] ml-2"> ₽</span>
            </span>
          </div>

          <button
            disabled={(data && data.inCart) || touch}
            onClick={() => {
              dispatch(SetCartt(data && data.id));
              setTouch(true);
              dispatch(changeModal(true));
            }}
            className="py-[15px] disabled:bg-[#666666] mb-[15px] max-w-[188px] hover:bg-[#ff854d] transition-all duration-300 px-[30px] text-[13px] text-white bg-[#ff5200] rounded-sm"
          >
            Добавить в корзину
          </button>

          <div className="flex gap-2 text-[13px] cursor-pointer decoration-dotted text-[#1A1A1A]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="rgba(60,60,60,1)"
            >
              <path d="M21 13.2422V20H22V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422ZM19 13.9725C18.8358 13.9907 18.669 14 18.5 14C17.2409 14 16.0789 13.478 15.25 12.6132C14.4211 13.478 13.2591 14 12 14C10.7409 14 9.5789 13.478 8.75 12.6132C7.9211 13.478 6.75911 14 5.5 14C5.331 14 5.16417 13.9907 5 13.9725V20H19V13.9725ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path>
            </svg>
            В наличии:
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
