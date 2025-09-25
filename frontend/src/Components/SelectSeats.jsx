import React, { useState, useContext } from "react";
import { seats } from "../data";
import BsContext from "../Context/BsContext";
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  const [seat, changeSeats] = useState([]);
  const context = useContext(BsContext);
  const { noOfSeat, changeNoOfSeats } = context;

  return (
    <>
      <div className="mt-[50px]">
        <h1 className="w-full text-[22px] text-black">Select Seats :-</h1>
        <div className="flex mb-5 justify-start flex-wrap text-black">
          {seats.map((el, index) => {
            return (
              <SeatsInput
                seat={seat}
                key={index}
                index={index}
                changeSeats={changeSeats}
                noOfSeat={noOfSeat}
                text={el}
                changeNoOfSeats={changeNoOfSeats}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectSeats;
