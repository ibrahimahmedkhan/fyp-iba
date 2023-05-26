import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardActionArea, CardContent, Divider, Grid, Icon, Typography,
} from '@mui/material';
import { DirectionsCar, Traffic } from '@mui/icons-material';
import {
  onValue, ref, onChildAdded, query,
  limitToLast,
} from 'firebase/database';
import MyDrawer from '@/components/my-drawer';
import MyAppBar from '@/components/my-app-bar';
import { db } from '../firebase';
import StatisticsCard from '@/components/statistics-card';

function DescriptionCard({ icon, title, value }: { icon: any, title: string, value: string }) {
  return (
    <div style={{ width: '40%' }}>
      <CardContent>
        <Icon>
          {icon}
        </Icon>
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value}
        </Typography>
      </CardContent>
    </div>
  );
}

function StatisticsScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const myQuery = query(ref(db, 'realtime_data/intersection_1'), limitToLast(1));

    return onChildAdded(myQuery, (snapshot) => {
      const vals = snapshot.val();
      if (snapshot.exists()) {
        setData(vals);
      }
    });
  }, []);

  return (
    <Box style={{ backgroundColor: 'darkgrey', height: '100vh' }}>
      <MyAppBar />
      <MyDrawer />
      <Grid style={{ marginTop: '2em', paddingLeft: '20%', height: '80%' }} container justifyContent="center">
        <Card style={{
          width: '70%', height: '100%', padding: '1em 1.4em',
        }}
        >
          <CardActionArea>
            <Grid container justifyContent="space-evenly">
              <StatisticsCard data={data} />
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
}

export default StatisticsScreen;
