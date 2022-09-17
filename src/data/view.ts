import { CHAIN } from "constants/chains";
import { BaseError } from "errors/errors";
import { Transaction } from "types";
import axios from "axios";
import {
  ETHEREUM_URL,
  POLYGON_URL,
  ARBITRUM_URL,
  OPTIMISM_URL,
} from "constants/apis";

export const fetchTransactions = async (
  chain: CHAIN
): Promise<Transaction[] | undefined> => {
  if (!chain) {
    throw new BaseError("No Chain is provided");
  }

  const key = import.meta.env.VITE_ALCHEMY_KEY;
  const options = {
    method: "POST",
    url: `https://eth-mainnet.alchemyapi.io/v2/${key}`,
    headers: { accept: "application/json", "content-type": "application/json" },
    data: {
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_getAssetTransfers",
      params: [
        {
          fromBlock: "0x0",
          toBlock: "latest",
          category: ["external"],
          withMetadata: false,
          excludeZeroValue: true,
          maxCount: "0x3e8",
          fromAddress: "",
        },
      ],
    },
  };

  const transactions = await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  console.log(transactions, "transactions");

  return undefined;
};
