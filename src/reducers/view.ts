import { Transaction, PriceResponse, DataFetchResponse } from "types";

const SET_FETCHED_DATA = "SET_FETCHED_DATA" as const;
const SET_FIAT_PRICE = "SET_FIAT_PRICE" as const;
const UPDATE_FIAT_TOTAL = "UPDATE_FIAT_TOTAL" as const;
const UPDATE_LOADING_STATUS = "UPDATE_LOADING_STATUS" as const;
const UPDATE_ADDRESS = "UPDATE_ADDRESS" as const;
const UPDATE_CHAIN = "UPDATE_CHAIN" as const;
const SET_ERROR = "SET_ERROR" as const;

const setFetchedDataAction = (data: DataFetchResponse) => {
  return {
    type: SET_FETCHED_DATA,
    data: data,
  };
};

const setFiatPriceAction = (fiatPrice: PriceResponse) => {
  return { type: SET_FIAT_PRICE, fiatPrice: fiatPrice };
};

const updateLoadingStatusAction = (isLoading: boolean) => {
  return { type: UPDATE_LOADING_STATUS, isLoading: isLoading };
};

const updateAddressAction = (fromAddress: string) => {
  return { type: UPDATE_ADDRESS, fromAddress: fromAddress };
};

const updateFiatTotalAction = (fiatTotal: number) => {
  return { type: UPDATE_FIAT_TOTAL, fiatTotal: fiatTotal };
};

const updateChainAction = (chain: string) => {
  return { type: UPDATE_CHAIN, chain: chain };
};

const setErrorAction = (error?: Error) => {
  return { type: SET_ERROR, error: error };
};

export const actions = {
  setFetchedDataAction,
  setFiatPriceAction,
  updateLoadingStatusAction,
  setErrorAction,
  updateAddressAction,
  updateFiatTotalAction,
  updateChainAction,
};

export type ActionType =
  | ReturnType<typeof setFetchedDataAction>
  | ReturnType<typeof setErrorAction>
  | ReturnType<typeof updateLoadingStatusAction>
  | ReturnType<typeof updateAddressAction>
  | ReturnType<typeof updateFiatTotalAction>
  | ReturnType<typeof setFiatPriceAction>
  | ReturnType<typeof updateChainAction>;

export type State = {
  fromAddress: string;
  transactions: Transaction[];
  chain: string;
  isLoading: boolean;
  error?: Error;
  totalValue: string;
  fiatPrice: PriceResponse;
  fiatTotal: number;
};

export const initialState: State = {
  fromAddress: "",
  transactions: [],
  chain: "Ethereum",
  isLoading: false,
  error: undefined,
  totalValue: "0",
  fiatPrice: {},
  fiatTotal: 0,
};

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case SET_FETCHED_DATA:
      return {
        ...state,
        transactions: action.data.transactions,
        totalValue: action.data.total.toFixed(5),
        fiatTotal: action.data.fiatTotal,
      };
    case SET_FIAT_PRICE:
      return {
        ...state,
        fiatPrice: action.fiatPrice,
      };
    case UPDATE_FIAT_TOTAL:
      return {
        ...state,
        fiatTotal: action.fiatTotal,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        fromAddress: action.fromAddress,
      };
    case UPDATE_CHAIN:
      return {
        ...state,
        chain: action.chain,
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
