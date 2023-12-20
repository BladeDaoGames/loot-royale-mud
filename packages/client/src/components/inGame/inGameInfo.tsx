import React from "react";

const InGameInfo = () => {
  return (
    <div className="text-beige-100 flex flex-col items-center w-10/12 bg-white-beige-50 border border-beige-100 rounded-lg shadow-right-bottom-medium mt-2">
      <div className="text-5xl text-center border-b-2 border-beige-100 w-11/12 pt-2">
        {" "}
        Game Info{" "}
      </div>
      <div className="flex justify-between text-3xl text-center w-11/12 pt-2">
        {" "}
        <span>Room Creator:</span> <span>0x240...D6a2</span>
      </div>
      <div className="flex justify-between text-3xl text-center w-11/12 -mt-1">
        {" "}
        <span>Alive Players:</span> <span>4/6</span>
      </div>
      <div className="flex justify-between text-3xl text-center w-11/12 -mt-1">
        {" "}
        <span>Block Height:</span> <span>500</span>
      </div>
      <div className="flex justify-between text-3xl text-center w-11/12 -mt-1">
        {" "}
        <span>Total Eth Staked:</span> <span>20</span>
      </div>
    </div>
  );
};

export default InGameInfo;
