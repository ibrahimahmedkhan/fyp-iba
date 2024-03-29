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

function VideoPlayer() {
  const videoUrl = 'https://ia600300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';

  return (
    <img width="100%" src="https://fypyolo.ahris.ninja/streams/intersection_1_signal_1" alt="Live Feed" />
    // <img width="100%" src="https://fypyolo.ahris.ninja/streams/intersection_1_signal_2" alt="Live Feed" />

  // <video controls width="100%">
  //   <track kind="captions" />
  //   <source src={videoUrl} type="video/mp4" />
  //   Your browser does not support the video tag.
  // </video>
  );
}

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

function DashboardScreen() {
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
            <CardContent>
              <Typography variant="h5">
                Live Feed
              </Typography>
              <Box>
                <VideoPlayer />
              </Box>
            </CardContent>
            <Grid container justifyContent="center">
              <DescriptionCard
                icon={<Traffic />}
                title="Time left till end of signal"
                value={Math.round(data?.curr_green_duration_left * 100) / 100}
              />
              <Divider orientation="vertical" flexItem />
              <DescriptionCard
                icon={<DirectionsCar />}
                title="Total Vehicles"
                value={data?.signals?.signal_1?.non_emergency}
              />
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
}

export default DashboardScreen;
