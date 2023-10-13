import React, { useState } from "react";
import Raymond from "../../../assets/Images/raymond-logo.png";
import { CiSearch } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const TopNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full pt-7 pb-3 px-4 sm:px-8 bg-gray-200 h-20 ">
      <div className="flex justify-end items-center">
        <RxHamburgerMenu onClick={toggleSidebar} />
      </div>

      <div className="hidden sm:flex w-full  justify-end items-end h-full">
        <div className="bg-white w-full sm:w-2/5 rounded-lg px-2 py-2 mb-3">
          <div className="flex justify-evenly items-center">
            <div className="relative w-full sm:w-56">
              <CiSearch
                className="absolute top-1 left-1 text-black "
                size={20}
              />
              <input
                type="text"
                className="rounded-md bg-gray-200 border-gray-500 border px-7 py-1 w-full sm:w-40 md:w-48"
                placeholder="Search Here"
              />
            </div>
            <FiSettings size={25} className="text-gray-400" />
            <IoMdNotificationsOutline size={25} className="text-gray-400" />
            <div className="flex flex-col">
              <h2 className="text-sm font-bold">Hospital Test</h2>
              <span className="text-xs font-semibold">(Hospital)</span>
            </div>
            <div className="border-gray-500 border-[0.5px] rounded-full p-2">
              <img src={Raymond} alt="" className=" w-full h-6" />
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 h-screen w-44 bg-gray-200 z-50 flex flex-col gap-5 items-center">
          <div className="w-full flex justify-end py-4 px-2">
            <AiOutlineClose onClick={toggleSidebar} />
          </div>
          <div className="relative flex items-center p-2">
            <CiSearch className="absolute top-3 left-3 text-black " size={20} />
            <input
              type="text"
              className="rounded-md bg-gray-200 px-7 py-1 w-full sm:w-40 md:w-48"
              placeholder="Search Here"
            />
          </div>
          <div className="flex items-center p-2 flex-col gap-3">
            <FiSettings size={25} />
            <IoMdNotificationsOutline size={25} />
          </div>
          <div className="flex flex-col items-center p-2">
            <h2 className="text-sm font-bold">Hospital Test</h2>
            <span className="text-xs font-semibold">(Hospital)</span>
          </div>
          <div className="border-gray-500 border-[0.5px] rounded-full p-2 w-16 flex justify-center">
            <img src={Raymond} alt="" className=" w-full h-6 object-cover" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
