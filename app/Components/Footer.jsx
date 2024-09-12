import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#282828] py-10 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex  md:flex-row items-center justify-between">
          {/* First column: Links */}
          <div className="flex flex-col space-y-4">
            <span className="font-bold text-[20px] hover:text-[#ff5200] duration-300">
              <Link href="/wheels">Шины</Link>
            </span>
            <span className="font-bold text-[20px] hover:text-[#ff5200] duration-300">
              <Link href="/wheels">Диски</Link>
            </span>
          </div>
          {/* Second column: Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 mt-8 md:mt-0">
            <div className="flex flex-col space-y-4">
              <span className="hover:text-[#ff5200] duration-300">
                <Link href="/about">О компании</Link>
              </span>
              <span className="hover:text-[#ff5200] duration-300">
                <Link href="/contacts">Контакты</Link>
              </span>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="hover:text-[#ff5200] duration-300">
                <Link href="/payment">Оплата</Link>
              </span>
              <span className="hover:text-[#ff5200] duration-300">
                <Link href="/delivery">Доставка</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
