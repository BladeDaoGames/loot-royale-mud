import React from "react";
import { WaitingCharacterCard, WaitingPlayerCard } from "..";
import { PlayerCardType } from "../../constants/components/waiting.constants";

const MapPlayerSelection = () => {
  const kleeCustomOverlay = (
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
  );
  return (
    <div className="p-3 max-h-[600px]">
      {/**Row 1 for player cards */}
      <div className="flex gap-4">
        {/**Klee */}
        <WaitingCharacterCard
          imageName="klee"
          title="Mob User 1"
          isOwner={true}  // Set based on your logic
          isStaked={true}
        />
        {/**Venti */}
        <WaitingCharacterCard
          imageName="venti"
          title="Mob User 1"
        />
        {/**Eula */}
        <WaitingCharacterCard
          imageName="eula"
          title="Mob User 1"
        />
      </div>
      {/**Row 2 for player cards */}
      <div className="flex gap-4 my-4">
        {/**Invite player card 1 */}
        <WaitingPlayerCard type={PlayerCardType.INVITE} title="Waiting Player" />
        {/**Invite Player card 2 */}
        <WaitingPlayerCard type={PlayerCardType.INVITE} title="Waiting Player" />
        {/**Blocked */}
        <WaitingPlayerCard type={PlayerCardType.BLOCKED} title="Blocked" />
      </div>
    </div>
  );
};

export default MapPlayerSelection;
