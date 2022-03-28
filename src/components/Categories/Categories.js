import React from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold py-4">Categories</h2>
      <div className="flex gap-4 overflow-x-auto">
        <div className="min-w-[30%] bg-white flex flex-col justify-center items-center p-4 rounded-2xl shadow-md shadow-gray-200">
          <img
            src="https://img.icons8.com/external-color-outline-adri-ansyah/40/000000/external-islam-islam-and-ramadhan-color-outline-adri-ansyah-11.png"
            alt="Praying"
          />
          <h3 className="text-xs text-center font-semibold pt-4">
            Prayer Time
          </h3>
        </div>
        <NavLink
          to="/mosque"
          className="min-w-[30%] bg-white flex flex-col justify-center items-center p-4 rounded-2xl shadow-md shadow-gray-200"
        >
          <img
            src="https://img.icons8.com/external-color-outline-adri-ansyah/40/000000/external-islam-islam-and-ramadhan-color-outline-adri-ansyah-25.png"
            alt="Mosque"
          />
          <h3 className="text-xs text-center font-semibold pt-4">
            Nearest Mosque
          </h3>
        </NavLink>
        <div className="min-w-[30%] bg-white flex flex-col justify-center items-center p-4 rounded-2xl shadow-md shadow-gray-200">
          <img
            src="https://img.icons8.com/external-color-outline-adri-ansyah/40/000000/external-islam-islam-and-ramadhan-color-outline-adri-ansyah-24.png"
            alt="Allah Names"
          />
          <h3 className="text-xs text-center font-semibold pt-4">
            Allah's 99 Names
          </h3>
        </div>
        <div className="min-w-[30%] bg-white flex flex-col justify-center items-center p-4 rounded-2xl shadow-md shadow-gray-200">
          <img
            src="https://img.icons8.com/external-color-outline-adri-ansyah/40/000000/external-islam-islam-and-ramadhan-color-outline-adri-ansyah-12.png"
            alt="Al Quran"
          />
          <h3 className="text-xs text-center font-semibold pt-4">Al Quran</h3>
        </div>
        <div className="min-w-[30%] bg-white flex flex-col justify-center items-center p-4 rounded-2xl shadow-md shadow-gray-200">
          <img
            src="https://img.icons8.com/external-becris-lineal-color-becris/40/26e07f/external-islamic-literary-genres-becris-lineal-color-becris.png"
            alt="Hadith"
          />
          <h3 className="text-xs text-center font-semibold pt-4">Hadith</h3>
        </div>
        <div className="min-w-[30%] bg-white flex flex-col justify-center items-center p-4 rounded-2xl shadow-md shadow-gray-200">
          <img
            src="https://img.icons8.com/external-color-outline-adri-ansyah/40/000000/external-islam-islam-and-ramadhan-color-outline-adri-ansyah-8.png"
            alt="Qibla"
          />
          <h3 className="text-xs text-center font-semibold pt-4">
            Qibla Direction
          </h3>
        </div>
        <div className="min-w-[30%] bg-white flex flex-col justify-center items-center p-4 rounded-2xl shadow-md shadow-gray-200">
          <img
            src="https://img.icons8.com/emoji/40/000000/prayer-beads.png"
            alt="Tasbih"
          />
          <h3 className="text-xs text-center font-semibold pt-4">
            Tasbih Counter
          </h3>
        </div>
        <div className="min-w-[30%] bg-white flex flex-col justify-center items-center p-4 rounded-2xl shadow-md shadow-gray-200">
          <img
            src="https://img.icons8.com/external-color-outline-adri-ansyah/40/000000/external-islam-islam-and-ramadhan-color-outline-adri-ansyah-17.png"
            alt="Donate"
          />
          <h3 className="text-xs text-center font-semibold pt-4">Donate</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
