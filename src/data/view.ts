import { CHAIN } from "constants/chains";
import { BaseError } from "errors/errors";
import { Transaction } from "types";
import {
  Alchemy,
  AssetTransfersCategory,
  AssetTransfersOrder,
  AssetTransfersWithMetadataResult,
  Network,
} from "alchemy-sdk";
import { ETHEREUM_SCAN } from "constants/blockexplore";
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
      maxCount: 15,
      order: AssetTransfersOrder.DESCENDING,
      withMetadata: true,
    });

    const transaction = await mapTransferResponse(
      transferData.transfers,
      alchemy
    );

    return transaction;
  } catch (error) {
    console.error("Error");
  }

  return [];
};

const mapTransferResponse = async (
  transferResponse: AssetTransfersWithMetadataResult[],
  alchemy: Alchemy
): Promise<Transaction[]> => {
  const transactionMapping = transferResponse.map(async (data) => {
    const receipt = await alchemy.core.getTransactionReceipt(data.hash);
    const convertedValue = new BigNumber(data.value || 0);

    return {
      value: convertedValue.toFixed(10),
      url: ETHEREUM_SCAN + data.hash,
      dateTime: data.metadata.blockTimestamp,
      isSucceeded: receipt?.status === 1 ? true : false,
    };
  });

  const transactions = await Promise.all(transactionMapping);

  return transactions;
};
