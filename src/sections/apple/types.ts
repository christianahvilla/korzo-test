export interface StockData {
  date: string;
  close: number;
}

export interface StockInfo {
  symbol: string;
  company: string;
  currency: string;
  data: StockData[];
}
