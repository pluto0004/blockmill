import { CHAIN } from "constants/chains";
import { Transaction } from "types";

const SET_FETCHED_DATA = "SET_FETCHED_DATA" as const;
const UPDATE_TOTAL = "UPDATE_TOTAL" as const;
const UPDATE_LOADING_STATUS = "UPDATE_LOADING_STATUS" as const;
const UPDATE_ADDRESS = "UPDATE_ADDRESS" as const;
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

const updateAddressAction = (fromAddress: string) => {
  return { type: UPDATE_ADDRESS, fromAddress: fromAddress };
};

const updateTotalAction = (totalValue: number) => {
  return { type: UPDATE_TOTAL, totalValue: totalValue.toFixed(5) };
};

const setErrorAction = (error?: Error) => {
  return { type: SET_ERROR, error: error };
};

export const actions = {
  setFetchedDataAction,
  updateLoadingStatusAction,
  setErrorAction,
  updateAddressAction,
  updateTotalAction,
};

export type ActionType =
  | ReturnType<typeof setFetchedDataAction>
  | ReturnType<typeof setErrorAction>
  | ReturnType<typeof updateLoadingStatusAction>
  | ReturnType<typeof updateAddressAction>
  | ReturnType<typeof updateTotalAction>;

export type State = {
  fromAddress: string;
  transactions: Transaction[];
  chain: CHAIN;
  isLoading: boolean;
  error?: Error;
  totalValue: string;
};

export const initialState: State = {
  fromAddress: "",
  transactions: [],
  chain: CHAIN.ETHEREUM,
  isLoading: false,
  error: undefined,
  totalValue: "0",
};

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case SET_FETCHED_DATA:
      return {
        ...state,
        transactions: action.transactions,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        fromAddress: action.fromAddress,
      };
    case UPDATE_TOTAL:
      return {
        ...state,
        totalValue: action.totalValue,
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
