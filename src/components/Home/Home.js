import React from "react";
import Header from "../Header/Header";
import Times from "../Times/Times";
import Weather from "../Weather/Weather";
import Dua from "../Dua/Dua";
import Categories from "../Categories/Categories";
import BottomMenu from "../BottomMenu/BottomMenu";

const Home = ({ time, dayOfWeek, date, hijri }) => {
  return (
    <>
      <div className="container mx-auto p-5 bg-blue-50">
        <Header time={time} dayOfWeek={dayOfWeek} date={date} hijri={hijri} />
        <Times />
        <Weather dayOfWeek={dayOfWeek} date={date} />
        <Dua />
        <Categories />
      </div>
      <BottomMenu />
    </>
  );
};

export default Home;
