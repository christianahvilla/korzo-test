import type { StockData } from './types';

const formatDate = (date: string) => {
  const [year, month] = date.split('-'); // Extraer año y mes directamente
  const formattedMonth = new Date(Number(year), Number(month) - 1).toLocaleString('en-US', {
    month: 'short',
  });

  return `${formattedMonth}/${year}`;
};

export const getCategories = (data: StockData[]): string[] => {
  if (!data.length && !Array.isArray(data)) {
    return [];
  }

  return data.map(({ date }) => formatDate(date));
};

export const getSeries = (data: StockData[]): number[] => {
  if (!data.length && !Array.isArray(data)) {
    return [];
  }

  return data.map(({ close }) => close);
};
