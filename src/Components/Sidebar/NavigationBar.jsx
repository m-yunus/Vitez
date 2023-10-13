import React from "react";
import Logo from "../../assets/Images/logo (2).png";
import MobileLogo from "../../assets/Images/Screenshot 2023-10-12 204648.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaUserSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { BsPersonVcard } from "react-icons/bs";

const NavigationBar = () => {
  const navLinks = [
    {
      name: "Dashboard",
      icon: LuLayoutDashboard,
    },
    {
      name: "Patients",
      icon: LiaUserSolid,
      color: true,
    },
    {
      name: "Physicians",
      icon: FaUserDoctor,
    },
    {
      name: "Appointments",
      icon: GiNotebook,
    },
    {
      name: "Generate Card",
      icon: BsPersonVcard,
    },
  ];

  return (
    <div className="md:px-4 md:py-4 flex flex-col w-1/6 h-screen bg-[#1f2230]">
      <div className="flex items-center">
        <img
          src={Logo}
          alt=""
          className="hidden md:block h-24 object-contain"
        />
        <img src={MobileLogo} alt="" className="md:hidden" />
      </div>
      <div className="mt-4 md:mt-24 flex flex-col gap-7">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={`flex items-center px-4 py-2 gap-3 ${
              item?.color && "bg-[#2596be]"
            }  hover:bg-[#2596be]  rounded-lg cursor-pointer md:w-full`}
          >
            <item.icon size={25} color="white" />
            <span className="text-white hidden lg:block">{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
