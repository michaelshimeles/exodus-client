import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import {
  useContractWrite, usePrepareContractWrite, useWaitForTransaction
} from "wagmi";

const fetchAbi = ({ queryKey }) => {
  const address = queryKey[1];
  return axios.get(
    `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${process.env.REACT_APP_ETHERSCAN}`
  );
};

export const useAbi = (address) => {
  return useQuery(["abi", address], fetchAbi, {
    cacheTime: 900000,
    staleTime: 900000,
  });
};

export function MintNFT({ abiData }) {
  console.log("abiData", abiData);

  const { config } = usePrepareContractWrite({
    address: "0x5c3228e02fa41e767c7a202eee7b56c3bab9f932",
    abi: abiData,
    functionName: "mintFree",
  });
  const { data, write } = useContractWrite(config);
  console.log("data", data);
  console.log("write", write);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <Flex>
      <Button
        disabled={!write || isLoading}
        onClick={() => write()}
        colorScheme="blue"
      >
        {isLoading ? "Minting..." : "Mint"}
      </Button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </Flex>
  );
}
