import React from "react";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";

const ButtonNavbar = () => {
  return (
    <div className="w-full md:px-4 py-1 h-16 bg-[#504c4c] flex gap-2 px-1 md:flex-row md:justify-between items-center">
      <div className="w-40 md:w-auto h-full px-5 bg-[#848484] flex justify-center items-center rounded text-white gap-3">
        <AiOutlineUserSwitch size={20} />
        <h1 className="text-sm font-medium">Patient List</h1>
      </div>

      <div className="w-40 md:w-auto h-full px-5 bg-[#8cd4fc] flex justify-center items-center rounded text-black gap-3">
        <RiPlayListAddFill size={20} />
        <h1 className="text-sm font-medium">New Patient</h1>
      </div>
    </div>
  );
};

export default ButtonNavbar;
