import React from "react";

const RewardTable = () => {
  return (
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
          <th className="border-b border-beige-100 p-2">Alive-time</th>
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
  );
};

export default RewardTable;
