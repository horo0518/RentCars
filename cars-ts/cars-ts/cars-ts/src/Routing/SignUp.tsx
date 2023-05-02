import * as React from 'react';
import { useDispatch } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { User } from '../models/User';
import { AppDispatch } from '../App/store';
import { postUser } from "../features/User/userSlice";


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const dispatch:AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
     const user:User = {
       firstName: data.get('firstName')?.toString(),
       lastName: data.get('lastName')?.toString(),
       tz: data.get('identityCard')?.toString(),
       phoneNumber: data.get('phoneNumber')?.toString(),
       mail: data.get('email')?.toString(),
       password: data.get('password')?.toString(),
       id: undefined,//דורש בדיקה משהו המספור האחרון
       status: undefined
     };
    //let u: User = { id: 123, tz: '', password: '123', firstName: '123', lastName: '123', phoneNumber: '123', mail: 'aa', status: 0 };
      dispatch(postUser(user));
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* id:number | undefined;-----באופן אוטומטי צריך לסדר את זה בפונקציה של הוספת משתמש
          tz: String | undefined;------------------
          phoneNumber: String | undefined;------------------
          status:number | undefined-------הפונקציה מזהה לפי הנתונים
    password: String | undefined;----------
    firstName: String | undefined;-------------
    lastName: String | undefined;------------
   
    mail: String | undefined ;------------
    status:number | undefined; */}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              {/* firstName: String | undefined; */}
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              {/* lastName: String | undefined; */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              {/* tz: String | undefined; */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="identityCard"
                  label="identity Card"
                  name="identityCard"
                  autoComplete="family-name"
                />
              </Grid>
              {/* phoneNumber: String | undefined; */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="phone Number"
                  name="phoneNumber"
                  autoComplete="family-name"
                />
              </Grid>

              {/* mail: String | undefined ; */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>



              {/* password: String | undefined; */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* לא הכרחי */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}