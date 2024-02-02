import { NordPoolResponse } from '../types';

const get = async (url: string) => {
  const resp = await fetch(url);

  return resp.json() as unknown as { data: NordPoolResponse };
};

export const HttpClient = {
  get,
};
