import type { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

import axios from 'axios';

type DispatchFunction<T> = (data: T) => void;

interface ApiParams {
  url: string;
  data?: any;
  params?: AxiosRequestConfig;
  loaderDispatcher: () => void;
  successDispatch: DispatchFunction<AxiosResponse>;
  errorDispatch: DispatchFunction<AxiosError>;
}

const handleRequest = async (
  method: 'get' | 'post' | 'put' | 'delete',
  { url, data, params, loaderDispatcher, successDispatch, errorDispatch }: ApiParams
): Promise<void> => {
  loaderDispatcher();

  try {
    const response = await axios[method](url, data, params);
    successDispatch(response);
  } catch (error) {
    errorDispatch(error);
  }
};

export const getQueryPayload = (params: ApiParams): Promise<void> => handleRequest('get', params);

export const postQueryPayload = (params: ApiParams): Promise<void> => handleRequest('post', params);

export const putQueryPayload = (params: ApiParams): Promise<void> => handleRequest('put', params);

export const delQueryPayload = (params: ApiParams): Promise<void> =>
  handleRequest('delete', params);
