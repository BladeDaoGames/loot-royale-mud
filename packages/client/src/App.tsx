import { useMUD } from "./MUDContext";
import AppRoutes from "./routing/Route";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";

const styleUnset = { all: "unset" } as const;

export const App = () => {

  const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
      chain: mainnet,
      transport: http(),
    }),
  });
  return (
    <WagmiConfig config={config}>
      <AppRoutes />
    </WagmiConfig>
  );
};
