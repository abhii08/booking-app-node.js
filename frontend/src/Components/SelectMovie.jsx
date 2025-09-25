import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { moviesList } from "../data";
import BsContext from "../Context/BsContext";

const SelectMovie = () => {
  const context = useContext(BsContext);

  // Getting movie and change movie components from the context.
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);

    //setting movie in localstorage
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="w-full text-[22px] text-black">Select a Movie :-</h1>
      <div className="w-full flex justify-start flex-wrap mb-5 text-black">
        {moviesList.map((el, index) => {
          return (
            <RadioComponent
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovie;