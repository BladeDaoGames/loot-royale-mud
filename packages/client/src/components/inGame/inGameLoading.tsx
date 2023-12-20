import React from "react";

const InGameLoading = () => {
  return (
    <div className="absolute top-28 left-1/3 w-4/12 border-2 border-beige-100 bg-white-beige-400 z-20 text-beige-100 shadow-right-bottom-medium rounded-md pt-2 pb-4 flex flex-col items-center">
      <div className="text-3xl self-start pl-4">Next turn in ... Second</div>
      <div className="w-11/12 h-6 bg-white rounded border border-beige-100">
        <div className="h-full bg-dark-yellow-100 w-1/2 rounded-l"></div>
      </div>
    </div>
  );
};

export default InGameLoading;
