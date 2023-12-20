import useCustomNavigation from "../../routing/Navigation";
import { InGameChat, InGameInfo, InGameLoading, InGameRanking } from "../../components";

const InGame = () => {
  const {  goToReward } = useCustomNavigation();

  return (
    <>
      <div className="relative min-h-screen">
        <img
          className="object-cover w-full h-full absolute z-[-1]"
          src="/images/in-game.png"
          alt="background"
        />
        <div className="absolute inset-0 z-10"></div>
      </div>
      {/**left page layout section */}
      <div className="absolute top-1 left-0 w-4/12 h-full flex flex-col z-20">
        {/** Game info */}
        <InGameInfo/>

        {/** Player info */}
        <InGameRanking/>
        {/** Chat info */}
        <InGameChat/>
      </div>
      {/**next in turn section */}
      <InGameLoading/>
      {/**move icon section */}
      <div
        className="absolute bottom-20 right-20 z-20"
        onClick={goToReward}
      >
        <img src="/images/moveButtons.png" alt="move-buttons" />
      </div>
    </>
  );
};

export default InGame;
