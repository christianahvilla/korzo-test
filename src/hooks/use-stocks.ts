import type { AxiosError, AxiosResponse } from 'axios';
import type { StockInfo } from 'src/sections/apple/types';

import { useState, useEffect } from 'react';

import { getQueryPayload } from 'src/utils/api-client';

interface UseStocksResponse {
  stocks: StockInfo | null;
  loading: boolean;
  error: string | null;
}

const useStocks = (): UseStocksResponse => {
  const [stocks, setData] = useState<StockInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = () => {
      getQueryPayload({
        url: `${import.meta.env.VITE_API_URL}/stocks`,
        loaderDispatcher: () => setLoading(true),
        successDispatch: (response: AxiosResponse) => {
          setData(response.data);
          setLoading(false);
        },
        errorDispatch: (errorAxios: AxiosError) => {
          setError(errorAxios.message);
          setLoading(false);
        },
      });
    };

    fetchStocks();
  }, []);

  return { stocks, loading, error };
};

export default useStocks;
