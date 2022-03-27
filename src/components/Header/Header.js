import React from "react";
// import moment from "moment";
import moment from "moment-hijri";

const Header = () => {
  const [seconds, setSeconds] = React.useState(0);
  const [time, setTime] = React.useState("");
  const [dayOfWeek, setDayOfWeek] = React.useState("");
  const [date, setDate] = React.useState("");
  const [hijri, setHijri] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
      handleTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const handleTime = () => {
    moment.locale("en-US");
    setDayOfWeek(moment().format("dddd"));
    setDate(moment().format("MMMM Do"));
    setHijri(moment().format("iD iMMMM, iYYYY"));
    setTime(moment().format("hh:mm:ss A"));
    // setDayOfWeek(new Date().toLocaleDateString("en-US", { weekday: "long" }));
    // setDate(new Date().toLocaleDateString());
    setSeconds(seconds + 1);
  };

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
