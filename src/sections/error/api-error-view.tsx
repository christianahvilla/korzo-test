import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { DashboardContent } from 'src/layouts/dashboard';

interface ApiErrorViewProps {
  errorMessage: string;
}

export function ApiErrorView({ errorMessage }: ApiErrorViewProps) {
  return (
    <DashboardContent maxWidth="xl">
      <Container>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Something went wrong!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          An error occurred while fetching the data: {errorMessage}. Please try again later.
        </Typography>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="/assets/illustrations/illustration-404.svg"
            sx={{
              width: 320,
              height: 'auto',
              my: { xs: 5, sm: 10 },
            }}
          />

          <Button component={RouterLink} href="/" size="large" variant="contained" color="inherit">
            Go to home
          </Button>
        </Container>
      </Container>
    </DashboardContent>
  );
}
