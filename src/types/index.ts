export type NordPoolResponse = {
  Rows: {
    Columns: {
      Value: string;
      Name: string;
    }[];
    Name: string;
    StartTime: string;
    EndTime: string;
    IsExtraRow: boolean;
  }[];
  Units: string[];
};

type PriceArea = {
  area: string;
  price: number | null;
};

type DatePrice = {
  areas: PriceArea[];
  name: string;
  endDate: string;
  startDate: string;
};

export type ParsedResponse = {
  datePrices: DatePrice[];
  unit: string;
};

/**
 * End date for prices, DD-MM-YYYY
 * @example 13-04-2023
 */
export type EndDate =
  `${number}${number}-${number}${number}-${number}${number}${number}${number}`;

export type FetchOptions = {
  currency?: 'SEK' | 'EUR' | 'NOK' | 'DKK';
  areas?: string[];
  endDate?: EndDate;
};
