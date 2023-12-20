import React from 'react';
import { motion } from 'framer-motion';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

interface NavbarProps {
  onBackClick: () => void;
}


const Navbar: React.FC<NavbarProps> = ({ onBackClick }) => {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount()

  const handleConnect = async () => {
    try {
      await connect({ connector: new InjectedConnector() });
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const formatAddress = (address: `0x${string}` | undefined) => {
    if(address && address.length >= 8){
      return `${address?.substring(0,4)}...${address?.substring(address.length - 4)}`
    }
    return address || '';
  }
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
          <div>
            <div className="text-2xl">Connected: {formatAddress(address)}</div>
            <button className="text-2xl text-end" onClick={handleDisconnect}>Disconnect</button>
          </div>
        ) : (
          <button className="text-4xl" onClick={handleConnect}>Connect Wallet</button>
        )}
        <div>
          <img src="/images/setting.png" alt="Settings" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;