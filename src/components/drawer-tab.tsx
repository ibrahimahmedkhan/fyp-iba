// eslint-disable-next-line import/no-extraneous-dependencies
import { Button, Typography } from '@mui/material';
import React from 'react';



export default function DrawerTab({ icon, text } : { icon: any, text: string }) {
  return (
    <Button
      sx={{
        color: 'black',
        '&:hover': {
          backgroundColor: 'grey',
        },
        borderRadius: 3,
        padding: '6%',
        textAlign: 'left',
      }}
      // variant="contained"
      fullWidth
    >
      {/* <Stack direction="row" spacing="5"> */}
      {icon}
      <Typography>
        {text}
      </Typography>

      {/* </Stack> */}
    </Button>
  );
}
