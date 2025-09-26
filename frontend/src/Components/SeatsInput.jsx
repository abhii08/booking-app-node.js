import React from "react";

const SeatsInput = ({
  changeNoOfSeats,
  noOfSeat,
  changeSeats,
  seat,
  text,
  index,
}) => {
  // changing the seats according to user input
  const change_seats = (e) => {
    

    if (e.target.value > 30) {
      e.target.value = 30;
    } else if (e.target.value < 0) {
      e.target.value = 0;
    }
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(e.target.value) });

    // setting seats in localStorage
    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfSeat,
        [e.target.name]: Number(e.target.value),
      })
    );
  };

  // highlighting the seat
  const handleChecked = (text) => {
    changeSeats(text);
  };

  return (
    <div
      name={text}
      className={`flex text-center justify-center items-center max-w-fit ${
        seat === text ? "bg-green-300" : "bg-gray-200"
      }`}
      id={`${index}text`}
      onClick={() => {
        handleChecked(text);
      }}
    >
      <span>{text}</span>
      <input
        type="number"
        className="w-[70px] rounded-[20px] ml-[10px] text-center text-[20px] border-0 p-[5px]"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={change_seats}
        value={noOfSeat[text]}
      />
    </div>
  );
};

export default SeatsInput;
