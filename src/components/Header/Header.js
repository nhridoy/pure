import React from "react";

const Header = ({ dayOfWeek, date, hijri, time }) => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col items-end">
        <p className="font-semibold text-xl text-gray-700">
          {dayOfWeek}, {date}
        </p>
        <p className="text-sm text-primary font-semibold">{hijri}</p>
        <p className="text-sm text-primary font-semibold">{time}</p>
      </div>
    </div>
  );
};

export default Header;
