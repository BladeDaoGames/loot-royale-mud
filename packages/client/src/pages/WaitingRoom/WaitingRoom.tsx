import { useState } from "react";
import "./WaitingRoom.css";
import { BiUserPlus } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { FaEthereum } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WaitingRoom = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/in-game");
  };
  const TabInterface = () => {
    const [activeTab, setActiveTab] = useState("Players");

    const tabs = [{ label: "Players", disabled: false }];

    return (
      <ul className="mt-2 flex flex-wrap text-sm font-medium text-center text-beige-100 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab) => (
          <li key={tab.label}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (!tab.disabled) setActiveTab(tab.label);
              }}
              className={`inline-block px-6 rounded-t-lg text-2xl font-bold ${
                tab.disabled
                  ? "text-white cursor-not-allowed dark:text-beige-100"
                  : activeTab === tab.label
                  ? "text-white bg-beige-100"
                  : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-black dark:hover:text-gray-300 bg-white border border-beige-100"
              }`}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {" "}
      {/**Navbar section */}
      <div className="flex justify-between items-center pl-6 gap-10 bg-beige-100">
        <div className="flex items-center gap-4">
          <img
            src="/images/left_arrow.png"
            alt="Back Button"
            className="bg-white-100"
          />
          <div className="text-6xl mt-2 text-white"> Loot Royale </div>
        </div>

        <div className="text-white pr-10 flex gap-5">
          <div>
            <div className="text-4xl"> 999,999,999,999 ETH</div>
            <div className="text-2xl -my-4 text-right"> 0x0f6a...1a60</div>
          </div>
          <div>
            <img src="/images/setting.png" alt="" />
          </div>
        </div>
      </div>
      {/**bottom page layout section */}
      <div className="flex h-screen">
        {/**Left Page section */}
        <div className="flex flex-col items-center bg-white-beige-200/50 w-4/12">
          <div className="text-beige-100 text-5xl pl-6 pt-4 w-full text-left">
            Select Map
          </div>
          {/**Map container below */}
          <div className="flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-11/12 h-11/12 bg-beige-200/2">
            <img
              className="w-9/12 py-4"
              src="/images/default_map.png"
              alt=""
            />
            <div className="flex justify-center items-center gap-10">
              <img src="/images/polygon_arrow_left.png" alt="" />
              <div className="text-4xl -mb-1 tracking-wider text-beige-100">
                {" "}
                Ninja Village (10x10){" "}
              </div>
              <img src="/images/polygon_arrow_right.png" alt="" />
            </div>
            <div className="text-center text-beige-100 font-thin border border-beige-100 bg-white-beige-50 w-10/12 h-8/12 text-3xl rounded-md shadow-md mt-2 mb-6 leading-very-tight py-1.5">
              Drenched in Secrecy, a ninja village emerges from misty mountains,
              veiled in shadows and whispered legends.
            </div>
          </div>
          {/**Max player box */}
          <div className="w-11/12 py-2 border border-beige-100 text-beige-100 text-4xl flex justify-center gap-10 mt-4 rounded-md shadow-right-bottom-medium">
            <div>Max Player</div>
            <input
              type="number"
              id="numberInput"
              min="0"
              max="999"
              step="0.1"
              value="6"
              className="border border-beige-100 text-3xl text-right w-28 bg-white-beige-50"
            />
          </div>
          <button
            onClick={handlePlayClick}
            className="w-48 bg-beige-100 border-1 pt-2 rounded-lg text-5xl text-white shadow-right-bottom-medium mt-4"
          >
            Apply
          </button>
        </div>
        {/**Right Page section */}
        <div className="bg-white-beige-200 w-8/12 h-full pl-4">
          {/**Section 1 with search, tabs and rooms Page section */}
          <div className="flex flex-col m-4">
            <div className="flex justify-end">
              <TabInterface />
            </div>
            <div className="bg-white-beige-50 w-full h-full border border-beige-100 rounded-md -mt-0.5">
              {/* Main right container card */}
              <div className="p-3 max-h-[600px]">
                {/**Row 1 for player cards */}
                <div className="flex gap-4">
                  {/**Klee */}
                  <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
                    <img
                      className="py-4 z-1"
                      src="/images/klee.png"
                      alt="klee"
                    />
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
                    <img
                      className="py-4 z-1"
                      src="/images/venti.png"
                      alt="venti"
                    />
                    <div className="flex justify-between items-center w-9/12  -mt-2">
                      <div className="text-xl text-white bg-beige-100 rounded-md px-4 h-6">
                        Staked
                      </div>
                      <div className="text-4xl text-beige-100">Mob User 1</div>
                    </div>
                  </div>
                  {/**Eula */}
                  <div className="relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2">
                    <img
                      className="py-4 z-1"
                      src="/images/eula.png"
                      alt="eula"
                    />
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
            </div>
          </div>
          {/**Section 2 with Current reward and create room and quick join */}
          <div className="flex justify-between mt-4 w-full text-5xl">
            <button className="flex justify-center items-center w-48 bg-beige-100 text-white shadow-right-bottom-medium rounded-lg pt-2 ml-6">
              Exit room
            </button>
            <button className="flex justify-center gap-4 items-center w-6/12 bg-beige-100 text-white shadow-right-bottom-medium rounded-lg pt-2 mr-6 pb-1">
              <div className="text-2xl text-beige-100 bg-white rounded-full w-10 h-10 flex justify-center items-center">
                <FaEthereum />
              </div>
              <div className="-mb-1"> Stake 999 Eth to Start Game </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingRoom;
