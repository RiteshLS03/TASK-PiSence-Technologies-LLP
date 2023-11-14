import React from "react";
import data from "./data.json";
import { IoSquare } from "react-icons/io5";
import "./Body.css";

const Body = () => {
  return (
    <div className="bg-[#fde7d9] rounded-xl py-4">
      <div className="flex justify-between px-20 pt-10">
        <h1 className="text-2xl">HELLO! {data?.NAME}</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="tracking-widest text-xl">ATTENDENCE</h1>
      </div>
      <div className="flex justify-between rounded-xl bg-bg-black my-2 px-10 py-6 mx-20">
        <div className="flex flex-col justify-center bg gap-4 py-8 my-10">
          <h1>{Object.keys(data.ATTENDANCE.monday)[1].toUpperCase()}</h1>
          <h1>{Object.keys(data.ATTENDANCE.monday)[2].toUpperCase()}</h1>
        </div>
        {Object?.keys(data?.ATTENDANCE)?.map((day) => (
          <div key={day} className="flex flex-col items-center">
            <h1 className="text-xl uppercase text-black py-1">{day}</h1>
            <h1 className="text-black py-1">{data?.ATTENDANCE[day]?.date}</h1>
            {/* <h1>{data?.ATTENDANCE[day]?.an}</h1> */}
            <h1 className="py-1">
              {data?.ATTENDANCE[day]?.an === "present" ? (
                <IoSquare color="green" size={35} />
              ) : (
                <IoSquare color="red" size={35} />
              )}
            </h1>
            <h1 className="py-1">
              {data?.ATTENDANCE[day]?.fn === "present" ? (
                <IoSquare color="green" size={35} />
              ) : (
                <IoSquare color="red" size={35} />
              )}
            </h1>
          </div>
        ))}
      </div>
      <div className="mx-20  justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col rounded-xl w-1/3 bg-bg-black ">
            <h1 className="justify-center flex">HOMEWORK</h1>
            {data.homework.map((sub) => (
              <p key={sub} className="gap-2 my-4 mx-8">
                {sub.toUpperCase()}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center w-2/3 rounded-xl bg-bg-black">
            <h1>Behaviour Analytics</h1>
            <div
              id="stats"
              className="bg-bg-black justify-center flex items-center"
            >
              <div id="men" className="circle bg-bg-black"></div>
              <div id="women" className="circle bg-bg-black"></div>
              <div id="white-circle" className="bg-bg-black small-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
