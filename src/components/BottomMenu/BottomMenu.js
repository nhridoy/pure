import React from "react";
import { RiHomeFill, RiSettings3Fill } from "react-icons/ri";
import { IoCalendarClear } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

const BottomMenu = () => {
  return (
    <div className="flex justify-around text-gray-500 bg-white sticky bottom-0 w-full shadow-xl shadow-gray-700">
      <a className="p-6 text-2xl text-primary">
        <RiHomeFill />
      </a>
      <a className="p-6 text-2xl">
        <IoCalendarClear />
      </a>
      <a className="p-6 text-2xl">
        <FaBell />
      </a>
      <a className="p-6 text-2xl">
        <RiSettings3Fill />
      </a>
    </div>
  );
};

export default BottomMenu;
