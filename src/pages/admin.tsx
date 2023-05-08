import React from 'react';
import {
  Box, Card, CardContent, Typography,
} from '@mui/material';
import MyDrawer from '@/components/my-drawer';
import MyTable from '@/components/my-table';
import MyAppBar from '@/components/my-app-bar';

export default function DashboardScreen() {
  return (
    <Box style={{ backgroundColor: '#EFEFEF', height: '100vh' }} color="black">
      <MyAppBar />
      <MyDrawer />
      <Card style={{
        width: '50vw', marginLeft: '30em', marginTop: '3em', borderRadius: '1em',
      }}
      >
        {/* <CardContent style={{ paddingLeft: '0' }}> */}
        <MyTable />
        {/* </CardContent> */}
      </Card>
    </Box>
  );
}
