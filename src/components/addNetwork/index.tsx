import React, { useState } from "react";
import styles from "../../pages/index.module.css"

interface NetworkConfig {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
    };
  }
}

const LAYEREDGE_NETWORK: NetworkConfig = {
  chainId: "0x106F", // 4207 in decimal
  chainName: "Edgen Chain",
  nativeCurrency: {
    name: "Edgen",
    symbol: "EDGEN",
    decimals: 18,
  },
  rpcUrls: ["https://rpc.layeredge.io"],
  blockExplorerUrls: ["https://edgenscan.io"],
};

interface AddNetworkProps {
  buttonText?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const AddNetwork: React.FC<AddNetworkProps> = ({
  buttonText = "Add LayerEdge Network",
  onSuccess,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const addNetwork = async () => {
    if (!window.ethereum) {
      const error = "Please install MetaMask or another EVM wallet.";
      onError?.(error);
      return;
    }

    setIsLoading(true);

    try {
      // Try to switch to network first
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: LAYEREDGE_NETWORK.chainId }],
      });

      onSuccess?.();
    } catch (switchError: any) {
      // If network doesn't exist, add it
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [LAYEREDGE_NETWORK],
          });
          onSuccess?.();
        } catch (addError: any) {
          onError?.(addError.message || "Failed to add network");
        }
      } else {
        onError?.(switchError.message || "Failed to switch network");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={addNetwork}
      disabled={isLoading}
      className={`${styles.getStartedButton}`}
    >
      {isLoading ? "Adding..." : buttonText}
    </button>
  );
};

export default AddNetwork;
