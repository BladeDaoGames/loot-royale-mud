import { useCallback, useState } from "react";
import "./Rooms.css";
import { BsCoin } from "react-icons/bs";
import {
  Boxes,
  Button,
  Navbar,
  RoomCard,
  RoomModal,
  Search,
  TabInterface,
} from "../../components";
import useCustomNavigation from "../../hooks/useCustomNavigation";

const Rooms = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  // useCallback is memoization that prevents rerendering
  const toggleModal = useCallback(() => setModalOpen(!isModalOpen), [isModalOpen]);
  const { goToHome, goToWaiting } = useCustomNavigation();

  const tabs = [
    { label: "All", disabled: false },
    { label: "Visitable", disabled: false },
    { label: "Waiting", disabled: false },
  ];
  const handleSearch = (searchQuery: string) => {
    // Logic to handle search action, e.g., filtering rooms
  };

  //temporary placeholder, remove rooms static data in the future
  const rooms = [
    {
      ethereumAmount: 520,
      userCount: 3,
      maxUserCount: 6,
      roomNumber: "No. 001",
      roomName: "Ninja Village (10x10)",
      roomAddress: "0x240..D6a2",
      status: "Waiting"
    },
    {
      ethereumAmount: 430,
      userCount: 2,
      maxUserCount: 6,
      roomNumber: "No. 002",
      roomName: "Samurai Retreat (8x8)",
      roomAddress: "0x123..B4c3",
      status: "Available"
    },
    {
      ethereumAmount: 600,
      userCount: 5,
      maxUserCount: 6,
      roomNumber: "No. 003",
      roomName: "Mage Tower (12x12)",
      roomAddress: "0x456..F9a0",
      status: "Full"
    }
  ];
  return (
    <>
      {" "}
      {/**Navbar section */}
      <Navbar onBackClick={goToHome} />
      {/**bottom page layout section */}
      <div className="flex h-screen">
        {/**Left Page section */}
        <div className="flex flex-col items-center bg-white-beige-200/50 w-4/12">
          <Boxes title={"Inventory"} className={""} />
          <Boxes title={"Crafting"} className={""} />
          <div className="pt-4">
            <Button
              onClick={() => {}}
              className="w-48 bg-beige-100 border-1 pt-2 rounded-lg text-5xl text-white shadow-right-bottom-medium flex justify-center"
            >
              CRAFT
            </Button>
          </div>
        </div>
        {/**Right Page section */}
        <div className="bg-white-beige-200 w-8/12 h-full pl-4">
          {/**Section 1 with search, tabs and rooms Page section */}
          <div className="flex flex-col m-4">
            <div className="flex justify-between">
              <Search onSearch={handleSearch} />
              <TabInterface tabs={tabs} initialActiveTab="All" />
            </div>
            <div className="bg-white-beige-50 w-full h-full border border-beige-100 rounded-md -mt-0.5">
              {/* Main scrollable card */}
              <div className="p-3 overflow-y-auto max-h-[500px]">
                {/* Multiple rows of smaller cards */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                  (row) => (
                    <div key={row} className="flex justify-between mb-4">
                      {/* Left small card */}
                      <RoomCard
                        {...rooms[0]}
                      />
                      {/* Right small card */}
                      <RoomCard
                        {...rooms[0]}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/**Section 2 with Current reward and create room and quick join */}
          <div className="flex justify-between mt-4">
            <Button
              onClick={() => {}}
              className="text-beige-200 flex justify-center gap-6 items-center bg-white-beige-50 shadow-lg rounded-lg w-60 h-18 ml-10"
            >
              <BsCoin className="text-5xl" />
              <div className="flex flex-col text-3xl justify-center items-center">
                <div>Current Reward</div>
                <div className="-mt-2">999,999,999</div>
              </div>
            </Button>
            <div className="flex gap-10 mr-10">
              <Button
                className="flex justify-center items-center w-48 h-18 bg-beige-100 text-white shadow-lg rounded-lg text-5xl"
                onClick={toggleModal}
              >
                create room
              </Button>
              <Button
                className="flex justify-center items-center w-48 h-18 bg-beige-100 text-white shadow-lg rounded-lg text-5xl"
                onClick={goToWaiting}
              >
                quick join
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/** Modal popup */}
      <RoomModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};

export default Rooms;
