import React from "react";
import { motion } from "framer-motion";
import useWalletConnect from "../../hooks/useWalletConnect";
import useAddressFormatter from "../../hooks/useAddressFormatter";

interface NavbarProps {
  onBackClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBackClick }) => {
  const { handleConnect, handleDisconnect, address, isConnected } =
    useWalletConnect();
  const { formatAddress } = useAddressFormatter();
  const ButtonHoverAnimation = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };

  return (
    <div className="flex justify-between items-center pl-6 gap-10 bg-beige-100">
      <div className="flex items-center gap-4" onClick={onBackClick}>
        <motion.div whileHover={ButtonHoverAnimation}>
          <img
            src="/images/left_arrow.png"
            alt="Back Button"
            className="bg-white-100 button-hover-scale button-click-shrink cursor-pointer"
          />
        </motion.div>
        <div className="text-6xl mt-2 text-white"> Loot Royale </div>
      </div>

      <div className="text-white pr-10 flex gap-5">
        {isConnected ? (
          <button className="text-4xl" onClick={handleDisconnect}>
            {formatAddress(address)}
          </button>
        ) : (
          <button className="text-4xl" onClick={handleConnect}>
            Connect Wallet
          </button>
        )}
        <div>
          <img src="/images/setting.png" alt="Settings" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
