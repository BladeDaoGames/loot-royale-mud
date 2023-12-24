import { useState } from "react";
import "./WaitingRoom.css";
import { FaEthereum } from "react-icons/fa";
import { Button, MapPlayerSelection, MapSelection, Navbar, TabInterface } from "../../components";
import useCustomNavigation from "../../hooks/useCustomNavigation";

const WaitingRoom = () => {
  const { goToGame, goToRooms } = useCustomNavigation();
  const tabs = [{ label: "Players", disabled: false }];

  return (
    <>
      {" "}
      {/**Navbar section */}
      <Navbar
        onBackClick={goToRooms}
      />
      {/**bottom page layout section */}
      <div className="flex h-screen">
        {/**Left Page section */}
        <MapSelection onApply={goToGame} />

        {/**Right Page section */}
        <div className="bg-white-beige-200 w-8/12 h-full pl-4">
          {/**Section 1 with search, tabs and rooms Page section */}
          <div className="flex flex-col m-4">
            <div className="flex justify-end">
              <TabInterface tabs={tabs} initialActiveTab="Players" />
            </div>
            <div className="bg-white-beige-50 w-full h-full border border-beige-100 rounded-md -mt-0.5">
              {/* Main right container card */}
              <MapPlayerSelection/>
            </div>
          </div>
          {/**Section 2 with Current reward and create room and quick join */}
          <div className="flex justify-between mt-4 w-full text-5xl">
            <Button
              className="flex justify-center items-center w-48 bg-beige-100 text-white shadow-right-bottom-medium rounded-lg pt-2 ml-6"
              onClick={goToRooms}
            >
              Exit room
            </Button>
            <Button
              className="flex justify-center items-center w-52 bg-beige-100 text-white shadow-right-bottom-medium rounded-lg pt-2 ml-6"
              onClick={goToRooms}
              disabled={true}
            >
              Owner start
            </Button>
            <Button onClick={()=>{}} className="flex justify-center gap-4 items-center w-4/12 bg-beige-100 text-white shadow-right-bottom-medium rounded-lg pt-2 mr-6 pb-1">
              {" "}
              <div className="text-2xl text-beige-100 bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <FaEthereum />
              </div>
              <div className="-mb-1"> Stake Eth to Start </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingRoom;
