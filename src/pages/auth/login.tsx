import { Facebook, Google } from '@mui/icons-material';
import {
  Box,
  Button, Card, CardContent, Grid, IconButton, Stack, TextField, Typography,
} from '@mui/material';
import Image from 'next/image';

export default function LoginScreen() {
  console.log('working');
  return (
    <Box sx={{
      textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '0',
    }}
    >
      <Grid container>
        <Image style={{ alignSelf: 'start' }} src="/Screenshot 2023-05-08 at 3.48.06 AM.png" alt="me" height={700} width={550} />
        <Card style={{ width: '30%', justifyContent: 'center', marginTop: '10%' }}>
          <CardContent>
            <Typography textAlign="left">
              Welcome Back
            </Typography>
            <Typography textAlign="left" variant="h5">Login to your account</Typography>
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="Please enter your email"
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="Enter Password"
            />

            <Button sx={{ backgroundColor: 'grey' }} variant="contained" fullWidth>
              Login
            </Button>
            <br />
            <br />
            <Typography variant="caption" color="textSecondary" component="p" textAlign="left">
              Forgot Password?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Dont have an account?
              <Button variant="text" color="primary">
                Create Account
              </Button>
            </Typography>

            <hr />
            <Typography variant="body2" color="textSecondary" component="p" textAlign="left">
              Or Login with
            </Typography>
            <Stack direction="row">
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Google />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>

      </Grid>

    </Box>
  );
}
