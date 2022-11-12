import { CHAIN } from "constants/chains";
import { BaseError } from "errors/errors";
import { Transaction } from "types";
import { DateTime } from "luxon";

import {
  Alchemy,
  AssetTransfersCategory,
  AssetTransfersOrder,
  AssetTransfersWithMetadataResult,
  Network,
} from "alchemy-sdk";
import { ETHEREUM_SCAN, POLYGON_SCAN } from "constants/blockexplore";
import BigNumber from "bignumber.js";

export const fetchTransactions = async (
  chain: CHAIN,
  fromAddress: string
): Promise<Transaction[] | []> => {
  if (!chain) {
    throw new BaseError("No Chain is provided");
  }

  try {
    const config = {
      apiKey: import.meta.env.VITE_ALCHEMY_KEY,
      network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(config);

    const transferData = await alchemy.core.getAssetTransfers({
      fromBlock: "0x0",
      fromAddress: fromAddress,
      category: [AssetTransfersCategory.EXTERNAL],
      maxCount: 100,
      order: AssetTransfersOrder.DESCENDING,
      withMetadata: true,
    });

    const transaction = await mapTransferResponse(
      transferData.transfers,
      alchemy,
      chain
    );

    return transaction;
  } catch (error) {
    console.error("Error");
  }

  return [];
};

const mapTransferResponse = async (
  transferResponse: AssetTransfersWithMetadataResult[],
  alchemy: Alchemy,
  chain: string
): Promise<Transaction[]> => {
  const transactionMapping = transferResponse.map(async (data) => {
    const receipt = await alchemy.core.getTransactionReceipt(data.hash);
    const convertedValue = new BigNumber(data.value || 0);
    const dt = DateTime.fromISO(data.metadata.blockTimestamp);

    return {
      value: convertedValue.toFixed(5),
      url:
        chain === "Ethereum"
          ? ETHEREUM_SCAN + data.hash
          : POLYGON_SCAN + data.hash,
      dateTime: dt.toFormat("yyyy-MM-dd HH:mm:ss"),
      isSucceeded: receipt?.status === 1 ? true : false,
    };
  });

  const transactions = await Promise.all(transactionMapping);

  return transactions;
};
