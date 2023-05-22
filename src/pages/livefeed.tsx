import React from 'react';
import {
  Box, Card, CardActionArea, CardContent, Divider, Grid, Icon, Typography,
} from '@mui/material';
import { DirectionsCar, Traffic } from '@mui/icons-material';
import MyDrawer from '@/components/my-drawer';
import MyAppBar from '@/components/my-app-bar';

function VideoPlayer() {
  const videoUrl = 'https://ia600300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';

  return (
    <video controls width="100%">
      <track kind="captions" />
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
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
                title="Intersection Name"
                value="Gulshan e Iqbal"
              />
              <Divider orientation="vertical" flexItem />
              <DescriptionCard
                icon={<DirectionsCar />}
                title="Total Vehicles"
                value="2500"
              />
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
}

export default DashboardScreen;
