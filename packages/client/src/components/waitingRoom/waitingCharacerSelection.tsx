import React from "react";

interface CharacterCardProps {
  imageName: string;
  title: string;
  isOwner?: boolean;
  isStaked?: boolean;
}

const WaitingCharacterCard = ({
  imageName,
  title,
  isOwner,
  isStaked = false,
}: CharacterCardProps) => {
  const ownerOverlay = isOwner ? (
    <>
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
    </>
  ) : null;
  const subtitle = isStaked ? "Staked" : "Stake Now";
  const borderClass = isStaked ? "border-green-500" : "border-beige-100";
  const subtitleClass = `text-xl text-white ${
    isStaked ? "bg-green-600" : "bg-orange-600"
  } rounded-md px-4 h-6`;

  return (
    <div
      className={`relative flex flex-col justify-center items-center border ${borderClass} rounded-md shadow-right-bottom-medium w-1/3 h-1/3 bg-beige-200/2`}
    >
      {ownerOverlay}
      <img className="py-4 z-1" src={`/images/${imageName}.png`} alt={title} />
      <div className="flex justify-between items-center w-9/12 -mt-2">
        <div className={subtitleClass}>{subtitle}</div>
        {/* <div className="text-xl text-white bg-beige-100 rounded-md px-4 h-6">{subtitle}</div> */}
        <div className="text-4xl text-beige-100">{title}</div>
      </div>
    </div>
  );
};

export default WaitingCharacterCard;
