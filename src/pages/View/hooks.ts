import { useReducer } from "react";
import { fetchTransactions } from "data/view";
import { fetchFiatPrice } from "data/fiatPrice";

import { actions, initialState, reducer } from "reducers/view";
import { Transaction } from "types";

const {
  setFetchedDataAction,
  updateLoadingStatusAction,
  updateAddressAction,
  updateChainAction,
  setFiatPriceAction,
  // setErrorAction,
} = actions;

const useHandleAction = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      dispatch(updateLoadingStatusAction(true));

      const transactions = await fetchTransactions(
        state.chain,
        state.fromAddress
      );
      const total = updateTotal(transactions);
      const fiatTotal = calculateFiatTotal(total);

      dispatch(
        setFetchedDataAction({
          transactions,
          total,
          fiatTotal,
        })
      );
      dispatch(updateLoadingStatusAction(false));
    } catch (error) {
      console.error("error");
      throw error;
    }
  };

  const fetchPrice = async () => {
    try {
      const data = await fetchFiatPrice("ethereum");
      dispatch(setFiatPriceAction(data));
    } catch (error) {
      console.error("error");
      throw error;
    }
  };

  const updateAddress = (address: string) => {
    dispatch(updateAddressAction(address));
  };

  const updateChain = (chain: string) => {
    dispatch(updateChainAction(chain));
  };

  const updateTotal = (transactions: Transaction[]): number => {
    if (transactions.length !== 0) {
      const filteredTransactions = transactions.filter(
        (data) => data.isSucceeded === true
      );
      const total = filteredTransactions.reduce((prev, current) => {
        return Number(prev) + Number(current.value);
      }, 0);
      return total;
    } else return 0;
  };

  const calculateFiatTotal = (totalValue: number): number => {
    const { fiatPrice } = state;

    if (totalValue && Object.keys(fiatPrice).length > 0) {
      const fiatTotalValue = totalValue * fiatPrice["ethereum"]["usd"];

      return fiatTotalValue;
    } else {
      return 0;
    }
  };

  return {
    ...state,
    fetchData,
    updateAddress,
    fetchPrice,
    updateChain,
  };
};
export default useHandleAction;
