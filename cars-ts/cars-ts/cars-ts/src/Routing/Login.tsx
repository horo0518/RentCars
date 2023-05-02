
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { User } from '../models/User';
import { AppDispatch, RootState } from '../App/store';
// import { postUser,getUser,getUsers } from "../features/User/userSlice";
import { postUser, getUser, getUsers, getUserByMail, changeUser } from "../features/User/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './HomePage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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

export default function SignInSide() {

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.users.currentUser);
  // const user: User={mail: data.get('email')?.toString(),};
  // const loginUser = useSelector((state: RootState) => state.users.currentUser);

  // useEffect(()=>{
  //   dispatch(getUserByMail(loginUser));                                      // carslice קורא לפונקציות שב   dispatch ה
  //   },[]);
  /////////////////////////////////
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userTemp: User = { firstName: "", lastName: "", id: 0, mail: data.get('email')?.toString(), password: data.get('password')?.toString(), phoneNumber: "", status: 0, tz: "" }
    console.log(userTemp);
    const t = dispatch(getUserByMail(userTemp));
    navigate('/home')
    
  };
  console.log(user);


  return (

    <>


      {user.status == -1 ? navigate("/navManager") : navigate("/home")}




      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{

              backgroundImage: require("../image/pinkCar/pink3.jpg"),
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"

                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                // onClick={<HomePage/>}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="signUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>

    </>
  );
}

