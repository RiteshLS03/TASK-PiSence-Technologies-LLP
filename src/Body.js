import React from "react";
import data from "./data.json";

const Body = () => {
  return (
    <div className="#">
      <div className="flex justify-between px-20">
        <h1>HELLO! {data?.NAME}</h1>
      </div>
      <div className="flex justify-center border-2">
        <h1 className="tracking-widest">ATTENDENCE</h1>
        <div className="flex justify-between">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
