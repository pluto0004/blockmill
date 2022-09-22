import axios from "axios";
import { PriceResponse } from "types";

const fiatCurrency = "usd";

export const fetchFiatPrice = async (
  assetIds: string
): Promise<PriceResponse> => {
  if (!assetIds) {
    console.error("No symbol provided");
    throw Error;
  }
  try {
    const res: { data: PriceResponse } = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${assetIds}&vs_currencies=${fiatCurrency}`
    );
    
    return res.data;
  } catch (error) {
    console.error((error as Error).message);
    throw error;
  }
};
