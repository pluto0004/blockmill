import { CHAIN } from "constants/chains";
import { BaseError } from "errors/errors";
import { Transaction } from "types";
import {
  Alchemy,
  AssetTransfersCategory,
  AssetTransfersOrder,
  AssetTransfersResult,
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
  transferResponse: AssetTransfersResult[],
  alchemy: Alchemy
): Promise<Transaction[]> => {
  const transactionMapping = transferResponse.map(async (data) => {
    const blockNum = await alchemy.core.getBlock(data.blockNum);

    const convertedValue = new BigNumber(data.value || 0);
    const dateTime = new Date(blockNum.timestamp * 1000);

    return {
      value: convertedValue.toFixed(5),
      url: ETHEREUM_SCAN + data.hash,
      dateTime: dateTime.toString(),
    };
  });

  const transactions = await Promise.all(transactionMapping);

  return transactions;
};
