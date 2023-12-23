import React from 'react';
import { FaEthereum } from 'react-icons/fa';
import { BiSolidUser } from 'react-icons/bi';

interface RoomCardProps {
  ethereumAmount: number;
  userCount: number;
  maxUserCount: number;
  roomNumber: string;
  roomName: string;
  roomAddress: string;
  status: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  ethereumAmount,
  userCount,
  maxUserCount,
  roomNumber,
  roomName,
  roomAddress,
  status
}) => {
  return (
    <div className="flex-1 bg-white-beige-100/30 border border-beige-100 mr-2 rounded-md p-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="bg-beige-100 w-20 h-10 border gap-2 rounded-lg flex justify-center items-center relative z-10 text-white text-xl">
            <FaEthereum />
            <div className="text-4xl -mb-1.5">{ethereumAmount}</div>
          </div>
          <div className="bg-white-beige-50 w-20 h-10 border gap-2 border-beige-100 rounded-lg flex justify-center items-center -mt-2 text-beige-100 text-xl">
            <BiSolidUser />
            <p className="font-bold">{`${userCount}/${maxUserCount}`}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-3xl font-thinner text-beige-100 border-b border-beige-100 ">
            <span className="pr-20">{roomNumber}</span>
            <span>{roomName}</span>
          </div>
          <div className="flex justify-between text-3xl font-thin text-beige-100 pt-2">
            <span>{roomAddress}</span>
            <span className="text-md text-white bg-beige-100 rounded-md px-4 h-8">
              {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
