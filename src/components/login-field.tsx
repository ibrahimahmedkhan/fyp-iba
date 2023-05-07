import React from 'react';
import {
  Box, TextField, Button,
} from '@mui/material';

export default function LoginField() {
  return (
    <Box>
      <h1>
        Welcome Back
      </h1>
      <h2>
        Login To Your Account
      </h2>
      <TextField color="info" value="Yaa" helperText="Please Enter Your Name" />
      <TextField color="info" value="Yaa" helperText="Please Enter Your Password" />
      <Button variant="contained">
        Login
      </Button>
      <h6>
        Forgot Password?
      </h6>
    </Box>
  );
}
