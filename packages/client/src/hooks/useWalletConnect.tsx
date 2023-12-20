import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const useWalletConnect = () => {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  const handleConnect = async (): Promise<void> => {
    try {
      await connect({ connector: new InjectedConnector() });
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  const handleDisconnect = (): void => {
    disconnect();
  };

  return { handleConnect, handleDisconnect, address, isConnected };
};

export default useWalletConnect;
