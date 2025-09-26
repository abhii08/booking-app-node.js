import LastBookingDetails from "../Components/LastBookingDetails";
import SelectMovie from "../Components/SelectMovie";
import SelectSeats from "../Components/SelectSeats";
import TimeShedule from "../Components/TimeShedule";
import ModalComponent from "../Components/ModelComponent";
import BsContext from "../Context/BsContext";
import { useContext } from "react";

const Home = () => {
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;

  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) return true;
    }
    return false;
  };

  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) return false;
    }
    return true;
  };

  const handleBookNow = () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select a movie!");
    } else if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please select a time slot!");
    } else if (
      checkNegativeSeatsValidity(noOfSeat) ||
      checkZeroSeatsValidity(noOfSeat)
    ) {
      setErrorPopup(true);
      setErrorMessage("Invalid Seats!");
    } else {
      handlePostBooking();
    }
  };

  return (
    <>
      <ModalComponent />
      <div className="w-[80%] my-[30px] mx-auto px-[30px] pt-[30px] pb-0 bg-[#f0eaea] border border-black rounded text-white shadow-[5px_5px_5px_rgba(199,207,224,0.699)] max-[500px]:w-[85%] max-[500px]:p-[15px]">
        <div className="w-full">
          <div className="flex flex-grow-0 overflow-visible max-[1300px]:flex-col-reverse">
            <div className="flex-grow">
              <SelectMovie />
            </div>
            <div className="max-[1300px]:mb-5">
              <LastBookingDetails />
            </div>
          </div>
          <div className="relative overflow-auto -top-[10px] max-[1300px]:top-0">
            <TimeShedule />
            <SelectSeats />
            <button
              onClick={handleBookNow}
              className="p-[10px] mt-5 rounded cursor-pointer text-[25px] font-bold text-[#050505] bg-[#eeeff1] border-2 border-[#0a0a0a] relative hover:bg-[rgba(255,0,55,0.664)] hover:text-white"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
