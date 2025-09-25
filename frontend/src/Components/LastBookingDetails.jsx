import React, { useEffect, useContext } from "react";
import BsContext from "../Context/BsContext";
import { seats } from "../data";

const LastBookingDetails = () => {
  const context = useContext(BsContext);
  const { handleGetLastBooking, lastBookingDetails } = context;

  useEffect(() => {
    handleGetLastBooking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col text-black">
      <h2 className="text-[22px] mb-2.5 font-semibold">
        Last Booking Details:
      </h2>

      {lastBookingDetails ? (
        <>
          <div className="mb-2.5">
            <p className="text-[18px] font-medium mb-1.5">Seats:</p>
            <ul className="list-none flex flex-wrap justify-start">
              {seats.map((seat, index) => (
                <li
                  className="w-[60px] p-[5px] rounded bg-[#00cfcf] mr-[10px] mb-[10px] text-center"
                  key={index}
                >
                  {seat}: {Number(lastBookingDetails.seats[seat])}
                </li>
              ))}
            </ul>
          </div>
          <p className="mb-2.5 text-[18px] font-medium text-left">
            Slot: <span className="text-[16px] font-normal">{lastBookingDetails.slot}</span>
          </p>
          <p className="mb-2.5 text-[18px] font-medium">
            Movie: <span className="text-[16px] font-normal">{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        <p className="text-[15px]">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
