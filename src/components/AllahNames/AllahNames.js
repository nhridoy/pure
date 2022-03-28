import React from "react";
import PageHead from "../PageHead/PageHead";

const AllahNames = React.memo(() => {
  const [names, setNames] = React.useState([]);
  React.useEffect(() => {
    fetch("data/names.json")
      .then((response) => response.json())
      .then((data) => {
        setNames(data.allah);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bg-primary">
      <div className="p-5 sticky top-0">
        <PageHead />
      </div>
      <div className="bg-primaryLight p-5 rounded-t-3xl">
        <h2 className=" text-center font-semibold text-lg text-gray-700">
          99 Names of Allah
        </h2>
        <div className="">
          {names.map((name) => (
            <div key={name.id} className="flex flex-col items-center">
              <div className=" border border-2 border-primary w-full p-2 text-3xl text-center">
                {name.arbi}
              </div>
              <div className="flex w-full justify-around">
                <div className="border border-2 border-primary w-full p-2 flex items-center justify-center">
                  {name.bangla}
                </div>
                <div className="border border-2 border-primary w-full p-2 flex items-center justify-center">
                  {name.meaning}
                </div>
              </div>
              <div className="border border-2 w-full border-primary p-2 text-justify">
                {name.faz}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default AllahNames;
