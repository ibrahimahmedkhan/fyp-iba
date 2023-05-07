import React from 'react';
import { Box, Grid } from '@mui/material';
import MyDrawer from '@/components/my-drawer';

function VideoPlayer() {
  const videoUrl = 'https://ia600300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';

  return (
    <video controls width="60%">
      <track kind="captions" />
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

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

export default DashboardScreen;
