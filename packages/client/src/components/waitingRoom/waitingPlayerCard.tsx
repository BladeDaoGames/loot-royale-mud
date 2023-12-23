import React from "react";
import { BiUserPlus } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { PlayerCardType } from "../../constants/components/waiting.constants";
import "./waitingPlayerCard.css"; 

interface PlayerCardProps {
  type: PlayerCardType;
  title?: string;
}

const WaitingPlayerCard = ({ type, title }: PlayerCardProps) => {
  const renderCardContent = () => {
    switch (type) {
      case PlayerCardType.INVITE:
        return (
          <BiUserPlus
            className="text-beige-100"
            style={{ width: "100px", height: "100px" }}
          />
        );
      case PlayerCardType.BLOCKED:
        return (
          <ImCross
            className="text-beige-100"
            style={{ width: "100px", height: "100px" }}
          />
        );
      default:
        return null;
    }
  };
  const borderClass = type === PlayerCardType.INVITE ? "blinking-border" : "";
  const cardStyle = type === PlayerCardType.BLOCKED
    ? "bg-slate-950 bg-opacity-30 text-gray-400" // Darkening effect for blocked cards
    : "bg-beige-200/2"; // Normal style for other cards

  return (
    <div
    className={`relative flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-1/3 h-1/3 ${cardStyle} ${borderClass}`}
    >
      <div
        className={`my-4 flex justify-center items-center bg-white-beige-100/10 border-2 border-dotted border-beige-100 rounded-md bg`}
        style={{ width: "216px", height: "171px" }}
      >
        {renderCardContent()}
      </div>
      {title && (
        <div className="flex justify-center items-center w-9/12 -mt-2 text-4xl text-beige-100">
          {title}
        </div>
      )}
    </div>
  );
};

export default WaitingPlayerCard;
