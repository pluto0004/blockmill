export interface Color {
  bgColor: string;
  droopShadowColor: string;
  activeColor: string;
}

export interface Transaction {
  dateTime: string;
  value: string;
  url: string;
  isSucceeded: boolean;
}

export interface DataFetchResponse {
  transactions: Transaction[];
  total: number;
  fiatTotal: number;
}

export interface PriceResponse {
  [id: string]: {
    [currency: string]: number;
  };
}
