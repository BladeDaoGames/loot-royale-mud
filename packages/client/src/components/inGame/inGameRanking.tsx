import React from "react";

const InGameRanking = () => {
  return (
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
  );
};

export default InGameRanking;
