import React from "react";

const FilterComponent = () => {
  return (
    <>
      <div className="flex flex-col max-w-[full] mx-auto">
        <div className="bg-[#F5F6FB] flex w-full justify-center items-center text-[#808080] text-[18px] font-bold h-[80px]">
          <div className="flex items-center gap-10">
            <span className=" text-[#1A1A1A] cursor-pointer">Шины</span>
            <span className=" cursor-pointer">Диски</span>
          </div>
        </div>

        <div className="w-[100%] pb-[50px]  bg-[#282828] text-[13px] flex flex-col">
          <div className="w-[75%] text-[#FFFFFF] mx-auto py-[28px] flex justify-between">
            <div className="flex gap-10 items-center">
              <button className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M21 18V21H19V18H17V15H23V18H21ZM5 18V21H3V18H1V15H7V18H5ZM11 6V3H13V6H15V9H9V6H11ZM11 11H13V21H11V11ZM3 13V3H5V13H3ZM19 13V3H21V13H19Z"></path>
                </svg>
                <span>По параметрам</span>
              </button>
              <button className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V11L4.4805 5.21216C4.79566 4.47679 5.51874 4 6.31879 4H17.6812C18.4813 4 19.2043 4.47679 19.5195 5.21216L22 11V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM20 13H4V18H20V13ZM4.17594 11H19.8241L17.6812 6H6.31879L4.17594 11ZM6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5C8 16.3284 7.32843 17 6.5 17ZM17.5 17C16.6716 17 16 16.3284 16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17Z"></path>
                </svg>
                По автомобилям
              </button>
            </div>

            <div className="flex gap-2 items-center">
              Легковые авто
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="rgba(255,255,255,1)"
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </div>
          </div>

          <div className="w-[75%] text-[#FFFFFF] mx-auto flex gap-2">
            <div className="bg-white text-[13px] w-[255px] text-[#1A1A1A] rounded-lg min-h-[150px]">
              <div className="py-[20px] pr-[40px] pl-[20px] border-b border-b-gray-200">Ширина</div>

              <div className="flex flex-col ">
                <span className="py-[40px]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
