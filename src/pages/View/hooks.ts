import { useCallback, useContext, useEffect, useReducer } from "react";
import { fetchTransactions } from "data/view";

import { actions, initialState, reducer } from "reducers/view";
import { CHAIN } from "constants/chains";

// const { setFetchedDataAction, updateLoadingStatusAction, setErrorAction } =
//   actions;

const useHandleAction = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetchTransactions(CHAIN.ETHEREUM);

        // dispatch(
        //   setFetchedDataAction(

        //   )
        // );
      } catch (error) {
        console.error("error");
      }
    };
    fetchData();
  }, []);

  return {
    ...state,
  };
};
export default useHandleAction;
