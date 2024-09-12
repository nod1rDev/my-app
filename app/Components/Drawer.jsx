"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../Redux/CartSlice";
import CartItem from "./CartItem";

function DrawerComponent() {
  const open = useSelector((s) => s.cart.modal);
  const data = useSelector((s) => s.cart.items);

  const pureData = data.filter((e) => e.inCart);

  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(changeModal(false));
  };

  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full min-w-[355px] bg-white shadow-lg transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close button inside the drawer */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Корзина</h2>
          <button
            onClick={toggleDrawer}
            className="text-gray-700 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        {/* Drawer content */}
        <div className="p-[40px]">
          {pureData &&
            pureData.map((e) => (
              <CartItem
                img={e.img}
                title={e.title}
                type={e.type}
                size={e.size}
                price={e.price}
                id={e.id}
              />
            ))}
        </div>

        {/* Footer with checkout button */}
        <div className="absolute bottom-0 w-full flex items-center justify-between p-4 border-t">
          <button
            onClick={() => dispatch(changeModal(false))}
            className="bg-[#ff5200] text-[13px] py-[15px] px-[30px] hover:bg-[#ff7839] duration-300  transition-all   text-white   rounded"
          >
            Оформление заказа
          </button>

          <div className="flex text-[13px] text-[#808080]">
            {" "}
            Итог:{" "}
            <span className="font-bold text-[#1A1A1A]">
              {pureData.reduce((acc, e) => acc + e.price, 0)}
            </span>{" "}
            ₽
          </div>
        </div>
      </div>

      {/* Background overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
}

export default DrawerComponent;
