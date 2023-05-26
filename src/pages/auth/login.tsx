// import { Facebook, Google, LineAxisOutlined } from '@mui/icons-material';
import {
  Box,
  Button, Card, CardContent, Grid, IconButton, Stack, Typography,
} from '@mui/material';
import { redirect } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Formik, useFormik } from 'formik';
import { Router, useRouter } from 'next/router';
import { loginApi } from '@/api/login';
import { MyTextField } from '@/components/my-text-field';
import { isEmailValid, isPasswordValid } from '@/lib/validation';

export default function LoginScreen() {
  const router = useRouter();
  const [err, setErr] = useState('');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      const result = await loginApi(values.email, values.password);
      if (result.status === 200) {
        console.log('🚀 ~ file: login.tsx:26 ~ onSubmit: ~ result:', result);
        redirect('/admin');
      } else {
        setErr('Invalid Credentials');
      }
      console.log(result);
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (isEmailValid(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      } else if (err === 'Invalid Credentials') {
        errors.password = 'Invalid Credentials';
      }

      return errors;
    },

  });

  // useEffect(() => {
  //   // const func = async () => {
  //   //   const result = login('ibrahimahmed.ayesha@gmail.com', '123456');
  //   //   console.log(result);
  //   // };
  //   // func();
  // }, []);

  return (
    <Box sx={{
      textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '0',
    }}
    >
      <Grid container>
        <Grid item xs>
          <Image style={{ alignSelf: 'start', width: '65vw', height: '100vh' }} src="/traffic_image_hd.jpeg" alt="me" width="1000" height="800" />
        </Grid>
        <Grid item container xs alignContent="center" justifyContent="center">
          <Stack width="75%" direction="column" spacing={4}>
            <Typography textAlign="left" fontSize={20}>
              Welcome Back 👋
            </Typography>
            <Typography textAlign="center" variant="h4">Login</Typography>
            <MyTextField
              formik={formik}
              name="email"
              label="Email"
              placeholder="Enter Email"
            />
            <MyTextField
              formik={formik}
              name="password"
              label="Password"
              placeholder="Enter Password"
            />
            <Button
              style={{
                borderRadius: '5em',
                width: '80%',
                backgroundColor: 'orange',
                color: 'white',
                alignSelf: 'center',
              }}
              sx={{ backgroundColor: 'grey' }}
              variant="contained"
              fullWidth
              onClick={formik.handleSubmit}
              // // onSubmit={formik.handleSubmit}
              // onClickCapture={formik.handleSubmit}
            >
              Login
            </Button>
            <br />
            <br />
          </Stack>
        </Grid>

      </Grid>

    </Box>
  );
}
