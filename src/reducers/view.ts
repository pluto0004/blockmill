import { CHAIN } from "constants/chains";
import { Transaction } from "types";

const SET_FETCHED_DATA = "SET_FETCHED_DATA" as const;
const UPDATE_CHAIN = "UPDATE_CHAIN" as const;
const UPDATE_TRANSACTIONS = "UPDATE_TRANSACTIONS" as const;
const UPDATE_LOADING_STATUS = "UPDATE_LOADING_STATUS" as const;
const SET_ERROR = "SET_ERROR" as const;

const setFetchedDataAction = (transactions: Transaction[]) => {
  return {
    type: SET_FETCHED_DATA,
    transactions: transactions,
  };
};

const updateLoadingStatusAction = (isLoading: boolean) => {
  return { type: UPDATE_LOADING_STATUS, isLoading: isLoading };
};

const setErrorAction = (error?: Error) => {
  return { type: SET_ERROR, error: error };
};

export const actions = {
  setFetchedDataAction,
  updateLoadingStatusAction,
  setErrorAction,
};

export type ActionType =
  | ReturnType<typeof setFetchedDataAction>
  | ReturnType<typeof setErrorAction>
  | ReturnType<typeof updateLoadingStatusAction>;

export type State = {
  transactions: Transaction[];
  chain: CHAIN;
  isLoading: boolean;
  error?: Error;
};

export const initialState: State = {
  transactions: [],
  chain: CHAIN.ETHEREUM,
  isLoading: true,
  error: undefined,
};

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case SET_FETCHED_DATA:
      return {
        ...state,
        transactions: action.transactions,
      };
    case UPDATE_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.isLoading ? undefined : state.error,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
