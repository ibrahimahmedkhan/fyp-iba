import React from 'react';
import {
  Card, Icon, CardContent, Typography,
  CardActionArea,
} from '@mui/material';
import { AddCircleOutlined } from '@mui/icons-material';

export default function StatisticsSubCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Icon>
          <AddCircleOutlined />
        </Icon>
        <CardContent>
          <Typography variant="h5">
            86.74
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Model Average Accuracy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
