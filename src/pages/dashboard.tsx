import React from 'react';
import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import MyDrawer from '../Components/MyDrawer';
import MyTable from '../Components/MyTable';

function DashboardScreen() {
  return (
    <Box color="black">
      <MyDrawer />
      {/* <MyTable /> */}
      <Grid container justifyContent="center">
        <VideoPlayer />
      </Grid>
    </Box>
  );
}

function VideoPlayer() {
  // const videoUrl = 'http://61.211.241.239/nphMotionJpeg?Resolution=640x640&Quality=Standard';
  const videoUrl = 'https://ia600300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';

  return (
    <video controls width="60%">
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default DashboardScreen;
