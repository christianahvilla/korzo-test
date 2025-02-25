import { useMemo } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import useStocks from 'src/hooks/use-stocks';

import { DashboardContent } from 'src/layouts/dashboard';

import { Loading } from 'src/components/loading';

import { AnalyticsApple } from './analytics-apple';
import { getSeries, getCategories } from './helpers';
import { ApiErrorView } from '../error/api-error-view';

export function AppleView() {
  const { stocks, loading, error } = useStocks();
  const { symbol, company, currency, data = [] } = stocks || {};

  const categories = useMemo(() => getCategories(data), [data]);

  const series = useMemo(() => getSeries(data), [data]);

  if (error) {
    return <ApiErrorView errorMessage={error} />;
  }

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Apple Stock Prices
      </Typography>

      <Grid xs={12} md={12} lg={12}>
        {loading ? (
          <Loading />
        ) : (
          <AnalyticsApple
            title={symbol}
            subheader={`${company} - ${currency}`}
            chart={{
              categories,
              series: [{ name: 'Stocks', data: series }],
            }}
          />
        )}
      </Grid>
    </DashboardContent>
  );
}
