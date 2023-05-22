import { Box, Table } from '@mui/material';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';

export default function MyTable({ rows } : { rows: any }) {
  // rows = [
  //   {
  //     id: 1, ID: '1', Username: 'Hello', 'Security Access': 'World',
  //   },
  //   {
  //     id: 2, ID: '2', Username: 'Hello', 'Security Access': 'World',
  //   },
  //   {
  //     id: 3, ID: '3', Username: 'Hello', 'Security Access': 'World',
  //   },
  // ];

  const cols = [
    {
      field: 'email', headerName: 'Email', flex: 1,
    },
    {
      field: 'name', headerName: 'Name', flex: 1,
    },
    {
      field: 'role', headerName: 'Role', flex: 1,
    },
    {
      field: '',
      headerName: 'Actions',
      sortable: false,
      flex: 1,
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
  // const columns = [
  //   {
  //     field: 'ID', headerName: 'ID', width: 150, flexGrow: 1,
  //   },
  //   {
  //     field: 'Username', headerName: 'Username', width: 150, flexGrow: 1,
  //   },
  //   {
  //     field: 'Security Access', headerName: 'Security Access', width: 150, flexGrow: 1,
  //   },
  //   {
  //     field: '',
  //     headerName: 'Actions',
  //     sortable: false,
  //     width: 100,
  //     flexGrow: 1,
  //     // flexBasis: 100, // set flexBasis to a fixed value so it doesn't shrink

  //     disableClickEventBubbling: true,
  //     renderCell: (params : any) => (
  //       <>
  //         <Edit />
  //         <Delete />
  //       </>
  //     ),
  //   },
  // ];
  return (
    <DataGrid style={{ height: '67vh', paddingLeft: '1em' }} rows={rows} columns={cols} pageSizeOptions={[4, 8, 10]} autoPageSize />
  );
}
