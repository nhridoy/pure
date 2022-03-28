import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const PageHead = () => {
  const handleBackBtn = () => {
    window.history.back();
  };
  return (
    <div className="flex">
      <div
        onClick={handleBackBtn}
        className="cursor-pointer w-10 h-10 rounded-xl bg-primaryLight flex justify-center items-center shadow shadow-primary"
      >
        <IoIosArrowBack className="text-primary" />
      </div>
    </div>
  );
};

export default PageHead;
