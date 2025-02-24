import { useMemo } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsApple } from './analytics-apple';
import { getSeries, getCategories } from './helpers';

const APPLE_DATA = {
  symbol: 'AAPL',
  company: 'Apple Inc.',
  currency: 'USD',
  data: [
    { date: '2024-02-01', close: 178.29 },
    { date: '2024-01-01', close: 174.55 },
    { date: '2023-12-01', close: 192.53 },
    { date: '2023-11-01', close: 189.95 },
    { date: '2023-10-01', close: 173.0 },
    { date: '2023-09-01', close: 170.69 },
    { date: '2023-08-01', close: 181.99 },
    { date: '2023-07-01', close: 196.45 },
    { date: '2023-06-01', close: 193.97 },
    { date: '2023-05-01', close: 180.09 },
    { date: '2023-04-01', close: 169.6 },
    { date: '2023-03-01', close: 164.9 },
  ],
};

export function AppleView() {
  const { symbol, company, currency, data } = APPLE_DATA;

  const categories = useMemo(() => getCategories(data), [data]);

  const series = useMemo(() => getSeries(data), [data]);

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Apple Stock Prices
      </Typography>

      <Grid xs={12} md={12} lg={12}>
        <AnalyticsApple
          title={symbol}
          subheader={`${company} - ${currency}`}
          chart={{
            categories,
            series: [{ name: 'Stocks', data: series }],
          }}
        />
      </Grid>
    </DashboardContent>
  );
}
