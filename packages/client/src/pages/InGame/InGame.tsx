import { AiOutlineEnter } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const InGame = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/reward"); // I noticed you had "/rooms" in the original handlePlayClick, so make sure to use the correct path.
  };

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
        <div className="text-beige-100 flex flex-col items-center w-10/12 bg-white-beige-50 border border-beige-100 rounded-lg shadow-right-bottom-medium mt-2">
          <div className="text-5xl text-center border-b-2 border-beige-100 w-11/12 pt-2">
            {" "}
            Game Info{" "}
          </div>
          <div className="flex justify-between text-3xl text-center w-11/12 pt-2">
            {" "}
            <span>Room Creator:</span> <span>0x240...D6a2</span>
          </div>
          <div className="flex justify-between text-3xl text-center w-11/12 -mt-1">
            {" "}
            <span>Alive Players:</span> <span>4/6</span>
          </div>
          <div className="flex justify-between text-3xl text-center w-11/12 -mt-1">
            {" "}
            <span>Block Height:</span> <span>500</span>
          </div>
          <div className="flex justify-between text-3xl text-center w-11/12 -mt-1">
            {" "}
            <span>Total Eth Staked:</span> <span>20</span>
          </div>
        </div>

        {/** Player info */}
        <div className="text-beige-100 flex flex-col items-center w-10/12 bg-white-beige-50 mt-4 border-beige-100 rounded-lg shadow-right-bottom-medium">
          <table className="w-11/12 border-collapse">
            <thead>
              <tr className="text-xl font-mono">
                <th className="border-b p-2">Rank</th>
                <th className="border-b p-2">Name</th>
                <th className="border-b p-2">Alive-time</th>
                <th className="border-b p-2">Reward</th>
              </tr>
            </thead>
            <tbody>
              {Array(3)
                .fill(null)
                .map((_, idx) => (
                  <tr key={idx} className="text-center font-serif">
                    <td className="p-2">No.{idx + 1}</td>
                    <td className="p-2">Player{idx + 1}</td>
                    <td className="p-2">1:30</td>
                    <td className="p-2">Eth {(idx + 1) * 2}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/** Chat info */}
        <div className="text-beige-100 flex flex-col gap-4 items-center w-10/12 h-2/5 bg-white-beige-50 my-4 border-beige-100 rounded-lg shadow-right-bottom-medium">
          <div
            className="w-11/12 px-20 py-24 mt-4 border border-beige-100 rounded-md"
            style={{
              boxShadow:
                "inset 5px 0 10px rgba(0, 0, 0, 0.2), inset 0 5px 10px rgba(0, 0, 0, 0.2)",
            }}
          ></div>
          <div className="flex gap-2 justify-between items-center px-20 py-2 border border-beige-100 bg-beige-100/5 rounded-lg">
            <div className="text-gray-900/50 text-md">
              Type a message...(Max 250 words)
            </div>
            <div>
              <AiOutlineEnter />
            </div>
          </div>
        </div>
      </div>
      {/**next in turn section */}
      <div className="absolute top-28 left-1/3 w-4/12 border-2 border-beige-100 bg-white-beige-400 z-20 text-beige-100 shadow-right-bottom-medium rounded-md pt-2 pb-4 flex flex-col items-center">
        <div className="text-3xl self-start pl-4">Next turn in ... Second</div>
        <div className="w-11/12 h-6 bg-white rounded border border-beige-100">
          <div className="h-full bg-dark-yellow-100 w-1/2 rounded-l"></div>
        </div>
      </div>
      {/**move icon section */}
      <div className="absolute bottom-20 right-20 z-20" onClick={handlePlayClick}>
        <img src="/images/moveButtons.png" alt="move-buttons" />
      </div>
    </>
  );
};

export default InGame;
