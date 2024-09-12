"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RemoveCart } from "../Redux/CartSlice";

function CartItem({ img, title, type, size, price, id }) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };
  const dispatch = useDispatch();
  return (
    <div className="pt-[5px] flex gap-[30px]">
      <img className="w-[60px] h-[60px]" src={img} alt="" />
      <div className="flex justify-between w-[325px]">
        <div className="flex flex-col text-[13px] text-[#1A1A1A]">
          <span className="font-bold">{title}</span>
          <span className="text-[#808080]">{type}</span>
          <span className="">{size}</span>

          <div className="mt-[20px] flex gap-4">
            <div className="flex">
              <button
                onClick={increment}
                className="px-2 py-1 border-[0.5px] border-gray-200 flex justify-center items-center"
              >
                +
              </button>
              <button
                onClick={decrement}
                className="px-2 py-1 border-[0.5px] border-gray-200 flex justify-center items-center"
              >
                -
              </button>
            </div>
            {count} шт
          </div>
        </div>

        <div className="flex relative flex-col text-[13px] text-[#1A1A1A]">
          {price * count} ₽{" "}
          <button
            onClick={() => dispatch(RemoveCart(id))}
            className=" absolute bottom-2 right-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="rgba(1,0,0,1)"
            >
              <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
