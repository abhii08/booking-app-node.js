import React, { useState, useContext } from "react";
import BsContext from "../Context/BsContext";
import { seats } from "../data";

const LastBookingDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  const context = useContext(BsContext);
  const { handleGetLastBooking, lastBookingDetails } = context;

  const handleShowLastBooking = () => {
    handleGetLastBooking();
    setShowDetails(true);
  };

  return (
    <div className="flex flex-col text-black">
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="text-[22px] font-semibold">Last Booking Details:</h2>
        {!showDetails && !lastBookingDetails && (
          <button
            onClick={handleShowLastBooking}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Show Last Booking
          </button>
        )}
      </div>

      {showDetails || lastBookingDetails ? (
        lastBookingDetails ? (
          <>
            <div className="mb-2.5">
              <p className="text-[18px] font-medium mb-1.5">Seats:</p>
              <ul className="list-none flex flex-wrap justify-start">
                {seats.map((seat, index) => (
                  <li
                    className="w-[60px] p-[5px] rounded bg-[#00cfcf] mr-[10px] mb-[10px] text-center"
                    key={index}
                  >
                    {seat}: {Number(lastBookingDetails.seats[seat] || 0)}
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
        )
      ) : (
        <p className="text-[15px] text-gray-500">
          Click the button to view your last booking details.
        </p>
      )}
    </div>
  );
};

export default LastBookingDetails;
