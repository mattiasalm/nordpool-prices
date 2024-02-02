import QueryString from 'qs';
import { HttpClient } from '../data/HttpClient';
import { NordPoolFactory } from '../factories/NordPoolFactory';
import { FetchOptions } from '../types';

const BASE_URL = 'https://www.nordpoolgroup.com/api/marketdata/page/';

const fetchData = async (path: string | number, options: FetchOptions = {}) => {
  try {
    const { areas = [], ...rest } = options;
    const opts = QueryString.stringify(rest);
    const optString = opts ? '?' + opts : '';
    const { data } = await HttpClient.get(`${BASE_URL}${path}${optString}`);

    const parsedResponse = NordPoolFactory.parseResponse(data);
    const filteredResponse = NordPoolFactory.filterResponseOnArea(
      parsedResponse,
      areas,
    );

    return filteredResponse;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch data');
  }
};

const hourly = async (options?: FetchOptions) => fetchData(10, options);
const daily = async (options?: FetchOptions) => fetchData(11, options);
const weekly = async (options?: FetchOptions) => fetchData(12, options);
const monthly = async (options?: FetchOptions) => fetchData(13, options);
const yearly = async (options?: FetchOptions) => fetchData(14, options);

export const NordPoolPrices = {
  hourly,
  daily,
  weekly,
  monthly,
  yearly,
};
