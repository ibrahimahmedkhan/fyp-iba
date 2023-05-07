import { Table } from '@mui/material';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { Delete, Edit } from '@mui/icons-material';

export default function MyTable() {
  const rows = [
    {
      id: 1, ID: '1', Username: 'Hello', 'Security Access': 'World',
    },
    {
      id: 2, ID: '2', Username: 'Hello', 'Security Access': 'World',
    },
    {
      id: 3, ID: '3', Username: 'Hello', 'Security Access': 'World',
    },
  ];

  const columns = [
    {
      field: 'ID', headerName: 'ID', width: 150, flexGrow: 1,
    },
    {
      field: 'Username', headerName: 'Username', width: 150, flexGrow: 1,
    },
    {
      field: 'Security Access', headerName: 'Security Access', width: 150, flexGrow: 1,
    },
    {
      field: '',
      headerName: 'Actions',
      sortable: false,
      width: 100,
      flexGrow: 1,
      // flexBasis: 100, // set flexBasis to a fixed value so it doesn't shrink

      disableClickEventBubbling: true,
      renderCell: (params : any) => (
        <>
          <Edit />
          <Delete />
        </>
      ),
    },
  ];
  return (
    <Box sx={{ marginX: '25%', height: '30em' }}>
      <h1>
        Admin
      </h1>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
