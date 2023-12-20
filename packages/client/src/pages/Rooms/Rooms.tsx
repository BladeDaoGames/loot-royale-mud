import { useState } from "react";
import "./Rooms.css";
import { BiSearchAlt, BiSolidUser } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/waiting");
  };
  const Box = () => {
    const numBoxes = 12; // Adjusted to 12 to match the provided code

    return (
      <>
        {Array.from({ length: numBoxes }).map((_, index) => (
          <div
            key={index}
            className="border-2 border-beige-100 bg-white-beige-50 rounded-xl h-14 w-14"
          ></div>
        ))}
      </>
    );
  };

  const TabInterface = () => {
    const [activeTab, setActiveTab] = useState("All");

    const tabs = [
      { label: "All", disabled: false },
      { label: "Visitable", disabled: false },
      { label: "Waiting", disabled: false },
    ];

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
          <div>
            <div className="text-beige-100 text-5xl pl-6 pt-2 tracking-wider">
              {" "}
              Inventory{" "}
            </div>
            <div className="flex items-center">
              <div className="border-2 border-beige-100 bg-white-beige-50 rounded-xl mx-8 grid grid-cols-4 gap-2 p-4">
                <Box />
              </div>
            </div>
          </div>
          <div>
            <div className="text-beige-100 text-5xl pl-6 pt-4 tracking-wider">
              {" "}
              Crafting{" "}
            </div>
            <div className="flex items-center">
              <div className="border-2 border-beige-100 bg-white-beige-50 rounded-xl mx-8 grid grid-cols-4 gap-2 p-4">
                <Box />
              </div>
            </div>
          </div>
          <div className="pt-4">
            <button className="w-48 bg-beige-100 border-1 pt-2 rounded-lg text-5xl text-white shadow-right-bottom-medium">
              CRAFT
            </button>
          </div>
        </div>
        {/**Right Page section */}
        <div className="bg-white-beige-200 w-8/12 h-full pl-4">
          {/**Section 1 with search, tabs and rooms Page section */}
          <div className="flex flex-col m-4">
            <div className="flex justify-between">
              <form className="search-container">
                <input
                  type="text"
                  placeholder="Search room by owner or room id"
                  className="search-input border rounded-md border-beige-100 text-xl p-1"
                />
                <BiSearchAlt className="search-icon" />
                <button type="submit" style={{ display: "none" }}>
                  Search
                </button>
              </form>
              <TabInterface />
            </div>
            <div className="bg-white-beige-50 w-full h-full border border-beige-100 rounded-md -mt-0.5">
              {/* Main scrollable card */}
              <div className="p-3 overflow-y-auto max-h-[500px]">
                {/* Multiple rows of smaller cards */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                  (row) => (
                    <div key={row} className="flex justify-between mb-4">
                      {/* Left small card */}
                      <div className="flex-1 bg-white-beige-100/30 border border-beige-100 mr-2 rounded-md p-4">
                        <div className="flex justify-between">
                          <div className="flex flex-col">
                            <div className="bg-beige-100 w-20 h-10 border gap-2 rounded-lg flex justify-center items-center relative z-10 text-white text-xl">
                              <div>
                                <FaEthereum />
                              </div>
                              <div className="text-4xl -mb-1.5">520</div>
                            </div>
                            <div className="bg-white-beige-50 w-20 h-10 border gap-2 border-beige-100 rounded-lg flex justify-center items-center -mt-2 text-beige-100 text-xl">
                              <div>
                                <BiSolidUser />
                              </div>
                              <p className="font-bold">3/6</p>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-3xl font-thinner text-beige-100 border-b border-beige-100 ">
                              <span className="pr-20">No. 001</span>{" "}
                              <span>Ninja Village(10x10)</span>
                            </div>
                            <div className="flex justify-between text-3xl font-thin text-beige-100 pt-2">
                              <span>0x240..D6a2</span>
                              <span className="text-md text-white bg-beige-100 rounded-md px-4 h-8">
                                Waiting
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Right small card */}
                      <div className="flex-1 bg-white-beige-100/30 border border-beige-100 mr-2 rounded-md p-4">
                        <div className="flex justify-between">
                          <div className="flex flex-col">
                            <div className="bg-beige-100 w-20 h-10 border gap-2 rounded-lg flex justify-center items-center relative z-10 text-white text-xl">
                              <div>
                                <FaEthereum />
                              </div>
                              <div className="text-4xl -mb-1.5">520</div>
                            </div>
                            <div className="bg-white-beige-50 w-20 h-10 border gap-2 border-beige-100 rounded-lg flex justify-center items-center -mt-2 text-beige-100 text-xl">
                              <div>
                                <BiSolidUser />
                              </div>
                              <p className="font-bold">3/6</p>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-3xl font-thinner text-beige-100 border-b border-beige-100 ">
                              <span className="pr-20">No. 001</span>{" "}
                              <span>Ninja Village(10x10)</span>
                            </div>
                            <div className="flex justify-between text-3xl font-thin text-beige-100 pt-2">
                              <span>0x240..D6a2</span>
                              <span className="text-md text-white bg-beige-100 rounded-md px-4 h-8">
                                Waiting
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/**Section 2 with Current reward and create room and quick join */}
          <div className="flex justify-between mt-4">
            <button className="text-beige-200 flex justify-center gap-6 items-center bg-white-beige-50 shadow-lg rounded-lg w-60 h-18 ml-10">
              <BsCoin className="text-5xl" />
              <div className="flex flex-col text-3xl justify-center items-center">
                <div>Current Reward</div>
                <div className="-mt-2">999,999,999</div>
              </div>
            </button>
            <div className="flex text-5xl gap-10 mr-10">
              <button
                className="flex justify-center items-center w-48 h-18 bg-beige-100 text-white shadow-lg rounded-lg"
                onClick={toggleModal}
              >
                create room
              </button>
              <button className="flex justify-center items-center w-48 h-18 bg-beige-100 text-white shadow-lg rounded-lg">
                quick join
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="absolute w-full h-full bg-black opacity-50"></div>
          <div className="bg-white-beige-50 w-2/6 h-3/10 z-10 relative rounded-md p-4">
            {/* Modal content goes here */}
            <div className="flex flex-col justify-center items-center text-beige-100 bg-white-beige-50 gap-6">
              <h2 className="text-6xl border-b-2 border-beige-100 w-full text-center">
                {" "}
                ROOM CREATION
              </h2>
              <div className="flex mt-6">
                <div className="text-5xl text-silver-100 bg-beige-100 rounded-full w-16 h-16 flex justify-center items-center">
                  <FaEthereum />
                </div>
                <div className="flex flex-col ml-6">
                  {" "}
                  {/* added margin-left for spacing */}
                  <div className="flex gap-4 justify-end">
                    <h2 className="text-4xl">Stake Eth</h2>
                    <input
                      type="number"
                      id="numberInput"
                      min="0"
                      max="999"
                      step="0.1"
                      value="999"
                      className="border border-beige-100 text-3xl text-right w-28 bg-white-beige-50"
                    />
                  </div>
                  <p className="text-right text-xs font-extrabold tracking-tighter">
                    You need to decide how much eth each player
                    <br />
                    entering the game needs to stake.
                  </p>
                </div>
              </div>

              <button
                onClick={handlePlayClick}
                className=" text-5xl flex justify-center items-center w-48 h-18 bg-beige-100 text-white shadow-lg rounded-lg"
              >
                create room
              </button>
            </div>
            <button onClick={toggleModal} className="absolute top-4 right-4">
              <AiFillCloseCircle className="text-beige-100" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Rooms;
