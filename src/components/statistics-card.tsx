import React from 'react';
import {
  Box, Grid,
} from '@mui/material';
import StatisticsSubCard from './statistics-sub-card';

export default function StatisticsCard() {
  return (
    <Box>
      <h1>
        Traffic Statistics
      </h1>
      <h5>
        Summary
      </h5>
      <Grid>
        <StatisticsSubCard />
        <StatisticsSubCard />
        <StatisticsSubCard />
      </Grid>
    </Box>
  );
}
