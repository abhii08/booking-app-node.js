import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { slots } from "../data";
import BsContext from "../Context/BsContext";

const TimeShedule = () => {
  const context = useContext(BsContext);

  // Getting time and change changeTime components from the context.
  const { time, changeTime } = context;

  const handleChangeTime = (value) => {
    changeTime(value);

    // setting slot in localstorage
    window.localStorage.setItem("slot", value);
  };

  return (
    <>
      <div className="w-full">
        <h1 className="w-full text-[22px] text-black">Select a Schedule :-</h1>
        <div className="flex mb-5 justify-start flex-wrap text-black">
          {slots.map((el, index) => {
            return (
              <RadioComponent
                text={el}
                changeSelection={handleChangeTime}
                data={time}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeShedule;
