import { useAccount } from "wagmi";

const WalletConnect = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  return <div>Connected Wallet: {address}</div>;
};

export default WalletConnect;