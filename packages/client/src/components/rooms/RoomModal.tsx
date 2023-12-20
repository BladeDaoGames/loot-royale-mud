import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "..";

interface RoomModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const RoomModal = ({ isOpen, toggleModal }: RoomModalProps) => {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const handlePlayClick = () => {
    navigate("/waiting");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="bg-white-beige-50 w-2/6 h-3/10 z-10 relative rounded-md p-4 modal-slide-down">
        <div className="flex flex-col justify-center items-center text-beige-100 bg-white-beige-50 gap-6">
          <h2 className="text-6xl border-b-2 border-beige-100 w-full text-center">
            ROOM CREATION
          </h2>
          <div className="flex mt-6">
            <div className="text-5xl text-silver-100 bg-beige-100 rounded-full w-16 h-16 flex justify-center items-center">
              <FaEthereum />
            </div>
            <div className="flex flex-col ml-6">
              <div className="flex gap-4 justify-end">
                <h2 className="text-4xl">Stake Eth</h2>
                <input
                  type="number"
                  id="numberInput"
                  min="0"
                  max="999"
                  step="0.1"
                  defaultValue="999"
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
          <Button
            onClick={handlePlayClick}
            className="text-5xl flex justify-center items-center w-48 h-18 bg-beige-100 text-white shadow-lg rounded-lg"
          >
            Create Room
          </Button>
        </div>
        <Button onClick={toggleModal} className="absolute top-4 right-4 text-white text-4xl">
          <AiFillCloseCircle className="text-beige-100" />
        </Button>
      </div>
    </div>
  );
};

export default RoomModal;
