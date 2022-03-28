import React from "react";
// import moment from "moment";
import moment from "moment-hijri";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Mosque from "./components/Mosque/Mosque";
import AllahNames from "./components/AllahNames/AllahNames";

function App() {
  const [seconds, setSeconds] = React.useState(0);
  const [time, setTime] = React.useState("");
  const [dayOfWeek, setDayOfWeek] = React.useState("");
  const [date, setDate] = React.useState("");
  const [hijri, setHijri] = React.useState("");
  const [geoLocation, setGeoLocation] = React.useState({});

  React.useEffect(() => {
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(setGeoLocation);
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          handleGeoLocation();
        } else if (result.state === "prompt") {
          handleGeoLocation();
        } else if (result.state === "denied") {
          //If denied then you have to show instructions to enable location
        }
      });
    } else {
      alert("Geolocation is not supported by your browser!");
    }
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
      handleTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  React.useEffect(() => {
    console.log("test");
  }, []);

  const handleTime = () => {
    moment.locale("en-US");
    setDayOfWeek(moment().format("dddd"));
    setDate(moment().format("MMMM Do"));
    setHijri(moment().format("iD iMMMM, iYYYY"));
    setTime(moment().format("hh:mm:ss A"));
    // setDayOfWeek(new Date().toLocaleDateString("en-US", { weekday: "long" }));
    // setDate(new Date().toLocaleDateString());
  };
  const handleGeoLocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        setGeoLocation(position.coords);
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: Infinity }
    );
  };
  // console.log(geoLocation);
  return (
    <div className="">
      <div className="">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                time={time}
                dayOfWeek={dayOfWeek}
                date={date}
                hijri={hijri}
              />
            }
          />
          <Route path="/allah-names" element={<AllahNames />} />
          <Route path="/mosque" element={<Mosque />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
