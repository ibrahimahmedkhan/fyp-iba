import React from 'react';
import {
  Box, Grid,
} from '@mui/material';
import {
  Article, Note, Sell, SignalCellular4Bar, SignalCellularAlt,
} from '@mui/icons-material';
import StatisticsSubCard from './statistics-sub-card';

export default function StatisticsCard({ data }) {
  return (
    <Box>
      <h1>
        Traffic Statistics
      </h1>
      <h5>
        Summary
      </h5>
      <Grid container direction="row">
        <StatisticsSubCard color="#FFE2E5" text="Total Vehicles" value={data?.signals?.signal_1?.emergency + data?.signals?.signal_1?.non_emergency} icon={<SignalCellularAlt />} />
        <StatisticsSubCard color="#FFF4DE" text="Non emergency vehicles" value={data?.signals?.signal_1?.emergency} icon={<Article />} />
        <StatisticsSubCard color="#DCFCE7" text="Emergency vehicles" value={data?.signals?.signal_1?.non_emergency} icon={<Sell />} />
      </Grid>
    </Box>
  );
}
