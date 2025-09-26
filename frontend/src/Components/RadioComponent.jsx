
// This is the radio component used for selecting movie and slot.
const RadioComponent = ({ text, changeSelection, data }) => {
  // Changing selected data from the user.
  const handleChecked = (value) => {
    changeSelection(value);
  };

  return (
    <div
      name={text}
      className={`px-[15px] py-[10px] text-[18px] border-2 border-[#0a0a0a] m-[10px] select-none tracking-[0.5px] cursor-pointer
        ${data === text
          ? "bg-[rgba(219,9,9,0.937)] font-semibold rounded-[1px]"
          : "text-center rounded opacity-80 hover:bg-[rgba(219,9,9,0.937)] hover:opacity-[0.95]"} 
        max-[600px]:m-[5px]`}
      onClick={() => handleChecked(text)}
    >
      <span className="text-[17px] text-center">{text}</span>
    </div>
  );
};

export default RadioComponent;
