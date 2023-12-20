import React from "react";
import { AiOutlineEnter } from "react-icons/ai";

const InGameChat = () => {
  return (
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
  );
};

export default InGameChat;
