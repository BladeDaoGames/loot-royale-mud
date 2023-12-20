import React, { useState } from "react";
import { Button } from "..";
import { BiUserPlus } from "react-icons/bi";
import { ImCross } from "react-icons/im";

const MapPlayerSelection = () => {
  return (
    <div className="p-3 max-h-[600px]">
      {/**Row 1 for player cards */}
      <div className="flex gap-4">
        {/**Klee */}
        <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
          <img className="py-4 z-1" src="/images/klee.png" alt="klee" />
          <img
            className="absolute top-0 left-0 -mt-1 -ml-1"
            src="/images/owner_tag.png"
            alt="owner_tag"
          />
          <div
            className="absolute top-2 left-0 mt-2 ml-2 z-20 text-white text-4xl"
            style={{ transform: "rotate(312deg)" }}
          >
            Owner
          </div>
          <div className="flex justify-between items-center w-9/12 -mt-2">
            <div className="text-xl text-white bg-beige-100 rounded-md px-4 h-6">
              Staked
            </div>
            <div className="text-4xl text-beige-100">Mob User 1</div>
          </div>
        </div>
        {/**Venti */}
        <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
          <img className="py-4 z-1" src="/images/venti.png" alt="venti" />
          <div className="flex justify-between items-center w-9/12  -mt-2">
            <div className="text-xl text-white bg-beige-100 rounded-md px-4 h-6">
              Staked
            </div>
            <div className="text-4xl text-beige-100">Mob User 1</div>
          </div>
        </div>
        {/**Eula */}
        <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
          <img className="py-4 z-1" src="/images/eula.png" alt="eula" />
          <div className="flex justify-between items-center w-9/12 -mt-2">
            <div className="text-xl text-white bg-beige-100 rounded-md px-4 h-6">
              Staked
            </div>
            <div className="text-4xl text-beige-100">Mob User 1</div>
          </div>
        </div>
      </div>
      {/**Row 2 for player cards */}
      <div className="flex gap-4 my-4">
        {/**Invite player card 1 */}
        <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
          <div
            className="my-4 flex justify-center items-center bg-white-beige-300 border-2 border-dotted border-beige-100 rounded-md"
            style={{ width: "216px", height: "171px" }}
          >
            <BiUserPlus
              className="text-beige-100"
              style={{ width: "100", height: "100px" }}
            />
          </div>
          <div className="flex justify-center items-center w-9/12 -mt-2 text-4xl text-beige-100">
            Waiting Player
          </div>
        </div>
        {/**Invite Player card 2 */}
        <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
          <div
            className="my-4 flex justify-center items-center bg-white-beige-300 border-2 border-dotted border-beige-100 rounded-md"
            style={{ width: "216px", height: "171px" }}
          >
            <BiUserPlus
              className="text-beige-100"
              style={{ width: "100", height: "100px" }}
            />
          </div>
          <div className="flex justify-center items-center w-9/12 -mt-2 text-4xl text-beige-100">
            Waiting Player
          </div>
        </div>
        {/**Blocked */}
        <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
          <div
            className="my-4 flex justify-center items-center bg-white-beige-100/10 border-2 border-dotted border-beige-100 rounded-md"
            style={{ width: "216px", height: "171px" }}
          >
            <ImCross
              className="text-beige-100"
              style={{ width: "100", height: "100px" }}
            />
          </div>
          <div className="flex justify-center items-center w-9/12 -mt-2 text-4xl text-beige-100">
            Blocked
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPlayerSelection;
