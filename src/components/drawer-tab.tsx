// eslint-disable-next-line import/no-extraneous-dependencies
import { Button, Typography } from '@mui/material';
import React from 'react';

export default function DrawerTab({ icon, text } : { icon: any, text: string }) {
  return (
    <Button
      sx={{
        color: 'darkslategrey',
        '&:hover': {
          backgroundColor: 'lightgrey',
        },
        '&:focus': {
          backgroundColor: 'lightgrey',
        },
        borderRadius: 3,
        paddingY: '.7em',
        paddingX: '.7em',
        marginY: '.3em',
        textAlign: 'left',
        justifyContent: 'flex-start',
      }}
      fullWidth
    >
      {icon}
      <Typography style={{ fontFamily: 'revert' }} variant="h6" paddingLeft="2em">
        {text}
      </Typography>

    </Button>
  );
}
