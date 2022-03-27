import React from "react";

const Times = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <div className="p-5 rounded-3xl bg-primaryLight flex flex-col gap-2 justify-between">
        <div className="">
          <p className="text-gray-700 text-sm font-semibold">Remaining</p>
          <p className="text-primaryDark font-semibold">Dhuhr</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-gray-700 font-semibold">120 min</p>
          <img
            src="https://img.icons8.com/color/50/000000/time.png"
            alt="Watch"
          />
        </div>
      </div>

      <div className="p-5 rounded-3xl bg-primaryDark flex flex-col gap-2 justify-between">
        <div className="">
          <p className="text-white text-sm font-semibold">Upcoming</p>
          <p className="text-secondary font-semibold">Asar</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-white font-semibold">05:35 PM</p>
          <img
            src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/50/000000/external-prayer-rug-ramadan-kmg-design-outline-color-kmg-design.png"
            alt="Praying Mat"
          />
        </div>
      </div>
      <div
        className="p-5 rounded-3xl bg-primary flex flex-col gap-2 justify-between
 flex flex-col gap-2 justify-between"
      >
        <div className="">
          <p className="text-white text-sm font-semibold">Sehri Time</p>
          <p className="text-secondary font-semibold">05:30 AM</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-white font-semibold">23h 59m</p>
          <img
            src="https://img.icons8.com/external-dreamcreateicons-outline-color-dreamcreateicons/50/000000/external-cloudy-day-weather-dreamcreateicons-outline-color-dreamcreateicons-2.png"
            alt="Sun"
          />
        </div>
      </div>
      <div
        className="p-5 rounded-3xl bg-secondaryLight flex flex-col gap-2 justify-between
 flex flex-col gap-2 justify-between"
      >
        <div className="">
          <p className="text-gray-700 text-sm font-semibold">Iftar Time</p>
          <p className="text-primaryDark font-semibold">06:11 PM</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-gray-700 font-semibold">23h 59m</p>
          <img
            src="https://img.icons8.com/external-dreamcreateicons-outline-color-dreamcreateicons/50/000000/external-cloudy-night-weather-dreamcreateicons-outline-color-dreamcreateicons.png"
            alt="Moon"
          />
        </div>
      </div>
    </div>
  );
};

export default Times;
