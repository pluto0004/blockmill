import { useReducer } from "react";
import { fetchTransactions } from "data/view";

import { actions, initialState, reducer } from "reducers/view";
import { CHAIN } from "constants/chains";
import { Transaction } from "types";

const {
  setFetchedDataAction,
  updateLoadingStatusAction,
  updateAddressAction,
  updateTotalAction,
  // setErrorAction,
} = actions;

const useHandleAction = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const data = await fetchTransactions(CHAIN.ETHEREUM, state.fromAddress);
      dispatch(updateLoadingStatusAction(false));
      dispatch(setFetchedDataAction(data));
    } catch (error) {
      console.error("error");
    }
  };

  const updateAddress = (address: string) => {
    dispatch(updateAddressAction(address));
  };

  const updateTotal = (transactions: Transaction[]) => {
    if (transactions.length !== 0) {
      const total = transactions.reduce((prev, current) => {
        return Number(prev) + Number(current.value);
      }, 0);
      dispatch(updateTotalAction(total));
    }
  };

  return {
    ...state,
    fetchData,
    updateAddress,
    updateTotal,
  };
};
export default useHandleAction;
