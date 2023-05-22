import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardContent, Typography,
} from '@mui/material';
import MyDrawer from '@/components/my-drawer';
import MyTable from '@/components/my-table';
import MyAppBar from '@/components/my-app-bar';
import { getAllUsers } from '@/api/getAllUsers';

function addIdToUsers(users: any) {
  return users.map((user: any) => ({ ...user, id: user._id }));
}

export default function DashboardScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await getAllUsers();
      setUsers(allUsers.data);
      console.log(allUsers);
    };
    getUsers();
  }, []);

  return (
    <Box style={{ backgroundColor: 'darkgrey', height: '100vh' }} color="black">
      <MyAppBar />
      <MyDrawer />
      <Card style={{
        width: '50vw', marginLeft: '30em', marginTop: '5em', borderRadius: '1em',
      }}
      >
        <MyTable rows={addIdToUsers(users)} />
      </Card>
    </Box>
  );
}
