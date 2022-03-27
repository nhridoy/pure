import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Weather = ({ dayOfWeek, date }) => {
  return (
    <div className="mt-4 p-5 bg-gradient-to-r from-secondaryDark to-secondaryLight rounded-3xl grid grid-cols-3">
      <div className="col-span-2 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-white text-sm font-light">Sunny</p>
          <div className="flex items-center justify-between gap-2 divide-x ">
            <p className="text-white font-light flex">
              <span className="text-4xl">32</span>
              <span className="text-sm">°</span>
            </p>
            <div className="text-white font-light text-xs pl-3">
              <p className="">
                {dayOfWeek}, {date}
              </p>
              <p className="flex gap-1 items-center">
                <FaMapMarkerAlt /> Dhaka
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Weather;
