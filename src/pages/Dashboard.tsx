import { Grid2, Typography, Stack } from '@mui/material';
import DashboardNews from '../components/Dashboard/DashboardNews';

export default function Dashboard() {
  return (
    <Grid2 container spacing={2}>
      <Grid2>
        <Stack spacing={2}>
        
          <DashboardNews />
        </Stack>
      </Grid2>
    </Grid2>
  );
}
