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
