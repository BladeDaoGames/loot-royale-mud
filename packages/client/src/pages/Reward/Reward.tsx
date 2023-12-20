// import { ImArrowRight } from 'react-icons/im';

import { useNavigate } from "react-router-dom";

const Reward = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/rooms");
  };
  return (
    <>
      <div className="relative min-h-screen">
        <img
          className="object-cover w-full h-full absolute z-[-1]"
          src="/images/in-game.png"
          alt="background"
        />
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center justify-center">
          {/* You win header tag */}
          <div className="text-9xl-plus bg-text-gradient text-transparent bg-clip-text z-40 tracking-widest">
            YOU WIN
          </div>

          {/* Table content */}
          <div className="border border-beige-100 flex flex-col justify-center items-center w-full h-full p-4 rounded-lg bg-beige-75 -mt-32">
            <div className="relative w-11/12">
              <table
                className="border-collapse bg-beige-50 rounded-md shadow-inner text-beige-100 w-full"
                style={{
                  boxShadow:
                    "inset 5px 0 10px rgba(0, 0, 0, 0.2), inset 0 5px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <thead>
                  <tr className="text-xl font-mono">
                    <th className="border-b border-beige-100 p-2">Rank</th>
                    <th className="border-b border-beige-100 p-2">Name</th>
                    <th className="border-b border-beige-100 p-2">
                      Alive-time
                    </th>
                    <th className="border-b border-beige-100 p-2">Reward</th>
                    <th className="border-b border-beige-100 p-2">Killed</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(6)
                    .fill(null)
                    .map((_, idx) => (
                      <tr
                        key={idx}
                        className={`text-center font-serif ${
                          idx === 1 ? "bg-beige-300 text-white" : ""
                        }`}
                      >
                        <td className="p-2">No.{idx + 1}</td>
                        <td className="p-2">Player{idx + 1}</td>
                        <td className="p-2">1:30</td>
                        <td className="p-2">Eth {(idx + 1) * 2}</td>
                        <td className="p-2">3</td>
                      </tr>
                    ))}
                </tbody>
              </table>

              {/* Arrow and YOU WIN text */}
            </div>

            {/* Back to lobby button */}
            <button
              onClick={handlePlayClick}
              className="w-48 bg-beige-100 border-1 pt-2 rounded-lg text-5xl text-white shadow-right-bottom-medium mt-4"
            >
              Back to lobby
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reward;
