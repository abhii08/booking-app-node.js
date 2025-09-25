import React, { useContext } from "react";
import BsContext from "../Context/BsContext";

function ModalComponent() {
  const context = useContext(BsContext);
  const { errorPopup, errorMessage, setErrorPopup } = context;

  const handleClosePopup = () => {
    context.setErrorMessage("");
    setErrorPopup(false);
  };

  return (
    <>
      {errorPopup && (
        <div
          className={`fixed flex justify-center items-center w-screen h-[110vh] overflow-auto z-10 -top-[10vh] scale-0 
            animate-[activemodal_1s_ease-in-out_forwards]`}
        >
          <div className="bg-[#fefefe] border border-[#888] text-center rounded w-[35%] h-fit flex flex-col justify-center items-center">
            <div className="text-left text-[20px] font-semibold tracking-[0.5px] px-[15px] py-[10px] w-full border-b-2 border-gray-400">
              <strong>Message</strong>
            </div>
            <div className="px-[30px] py-[10px] text-[20px] w-full text-center break-words">
              <span>{errorMessage}</span>
            </div>
            <div className="p-[15px] w-full flex justify-end">
              <button
                onClick={handleClosePopup}
                className="text-white font-bold text-[18px] rounded-[20px] px-[12px] py-[5px] bg-green-600 border-0 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalComponent;
