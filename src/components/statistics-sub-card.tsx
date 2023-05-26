import React from 'react';
import {
  Card, CardContent, Typography,
  CardActionArea,
} from '@mui/material';

export default function StatisticsSubCard({
  color, text, value, icon,
}:
{ color: string, text:string, value: number, icon: any }) {
  return (
    <Card sx={{
      width: '20%', backgroundColor: color, marginX: '2em', padding: '1em',
    }}
    >
      <CardActionArea>
        {icon}
        <CardContent>
          <Typography variant="h5">
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
