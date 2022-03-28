import React from "react";
import { RiHomeFill, RiSettings3Fill } from "react-icons/ri";
import { IoCalendarClear } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BottomMenu = () => {
  return (
    <div className="flex z-10 justify-around text-gray-500 bg-white sticky bottom-0 w-full shadow-xl shadow-gray-700">
      <NavLink to="/" className="p-6 text-2xl text-primary">
        <RiHomeFill />
      </NavLink>
      <NavLink to="/calender" className="p-6 text-2xl">
        <IoCalendarClear />
      </NavLink>
      <NavLink to="/notification" className="p-6 text-2xl">
        <FaBell />
      </NavLink>
      <NavLink to="settings" className="p-6 text-2xl">
        <RiSettings3Fill />
      </NavLink>
    </div>
  );
};

export default BottomMenu;
