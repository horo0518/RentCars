// import  React from 'react';
// //להוסיף טופס הזמנה

// import { useDispatch, useSelector } from "react-redux";//
// import { RootState } from "../../App/store";//
// import {Rental} from "../../models/Rental";//מידע בסיסי על אוביקט רכב
// import { addRental } from "./rentalSlice";//הטמעת הפונקציות 
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// const Addrental = () => {
//   // reducers קריאה-שיגור לפעולות
//   const dispatch = useDispatch();
//   //useSelector-קבלת נתונים
//   //rentalReducer- שם הרדוסר שקראנו ב-store
//   //const rentals = useSelector((state: RootState) => state.rentalReducer.rentals);
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };
//   let rental: Rental;
//   return (
    
//     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//     <div>
//       <TextField
//         label="With normal TextField"
//         id="outlined-start-adornment"
//         sx={{ m: 1, width: '25ch' }}
//         InputProps={{
//           startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//         }}
//       />
//       <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//         <OutlinedInput
//           id="outlined-adornment-weight"
//           endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//           aria-describedby="outlined-weight-helper-text"
//           inputProps={{
//             'aria-label': 'weight',
//           }}
//         />
//         <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
//       </FormControl>
//       <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//         <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//         <OutlinedInput
//           id="outlined-adornment-password"
//           type={showPassword ? 'text' : 'password'}
//           endAdornment={
//             <InputAdornment position="end">
//               <IconButton
//                 aria-label="toggle password visibility"
//                 onClick={handleClickShowPassword}
//                 onMouseDown={handleMouseDownPassword}
//                 edge="end"
//               >
//                 {showPassword ? <VisibilityOff /> : <Visibility />}
//               </IconButton>
//             </InputAdornment>
//           }
//           label="Password"
//         />
//       </FormControl>
      
//     </div>
//   </Box>
  
//        //<button onClick={() => dispatch(addRental(rental))}>add rental</button>
//   );
// }

   


// export default Addrental;


import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
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
import { Rental } from '../../models/Rental'//פרטים בסיסים
import { AppDispatch, RootState } from '../../App/store';
import { postRental } from "./rentalSlice";

import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { useEffect } from 'react';
import { getCar, getCarBy } from '../Car/carSlice';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { Console } from 'console';
import {Car} from '../../models/Car';

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

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const theme = createTheme();

export default function RentalCar() {
  const navigate = useNavigate();
  const {idCarRental}=useParams()

  const dispatch:AppDispatch = useDispatch();
  // const rentedCar = useSelector((state: RootState) => state.cars.currentCar);
   const userNow= useSelector((state: RootState)=> state.users.currentUser);
  
  // useEffect(()=>{
  //   dispatch(getCar(Number(idCarRental)));                                      // carslice קורא לפונקציות שב   dispatch ה
  //   },[]);

 const allCars = useSelector((state: RootState) => state.cars.Cars);
const  carRental=allCars.find((c:Car)=> c.id==(Number(idCarRental)));

useEffect(()=> {
dispatch(getCar(Number(idCarRental)));                                     
},[]);
  ///TIME
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );
  const [value2, setValue2] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );
  ///TIME
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const handleChange2 = (newValue2: Dayjs | null) => {
    setValue2(newValue2);
  };
  
  //TEXT
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
     const rental:Rental = {
    
      idRental: data.get('rentalDay')?.toString(),
      rentalDay: data.get('returnDay')?.toString(),////
      returnDay: data.get('returnDay')?.toString(),
      city: data.get('city')?.toString(),
      street: data.get('street')?.toString(),
      num: data.get('num')?.toString(),
      showHour: data.get('showHour')?.toString(),
      miniBar: data.get('miniBar')?.toString(),
      car: carRental,
      user: userNow,
     };
    //let u: User = { id: 123, tz: '', password: '123', firstName: '123', lastName: '123', phoneNumber: '123', mail: 'aa', status: 0 };
      dispatch(postRental(rental));
    
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
            alignItems: 'center',//מגדיר כותרת ולוגו במיקום
          }}
        >
         
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Rental Car
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, }}>
              <Grid container spacing={2}>
                {/* תחילת הרכב */}
              <Grid  item xs={12} sm={12}>
             <Paper
              sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 400,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
        >
              <Grid container spacing={2}>
                <Grid item>
                  {/* <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src={require('../../image/'+rentedCar.src)} />
                  </ButtonBase> */}
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        Standard license
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Full resolution 1920x1080 • JPEG
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ cursor: 'pointer' }} variant="body2">
                        Remove
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" component="div">
                      $19.00
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
        </Grid>

           
                          {/* מסתיים הרכב */}
              {/* ////RENTAL */}
              <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                            <MobileDatePicker
                                  label="Rental Day"
                                  inputFormat="MM/DD/YYYY"
                                  value={value2}
                                  onChange={handleChange2}
                                  renderInput={(params) => <TextField {...params} required name="rental" id="rental"/>}
                                />
                        </Stack>
                  </LocalizationProvider> 
              </Grid>
             {/* ////RENTAL */}
             {/* ////RETURN */}
              <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <MobileDatePicker
                       
                        label="Return Day"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} required name="returnDay" id="returnDay" />}
                      />
                      </Stack>
              </LocalizationProvider>  
              </Grid>
      {/* ////RETURN */}

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="family-name"
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="num"
                  label="Num Home"
                  name="num"
                  autoComplete="family-name"
                />
              </Grid>

              
              <Grid  item xs={12} sm={8} >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                      <TimePicker
                                  
                                  label="When would you like us to arrive?"
                                  value={value}
                                  onChange={handleChange}
                                  renderInput={(params) => <TextField {...params} required name="showHour" id="showHour" />}
                                />
                    </Stack>
              </LocalizationProvider>
              </Grid>

             
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  name="miniBar"
                  id="miniBar"
                  label="I want miniBar"
                />
              </Grid>
              {/* לא הכרחי */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to be reminded the day before."
                />
              </Grid>
              <Grid container spacing={2}>
                              <Grid item key={idCarRental} xs={12} sm={6} md={4}>
                            <Card
                              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                             
                              <CardMedia
                                component="img"
                                sx={{
                                  // 16:9
                                  pt: '56.25%',

                                }}
                                image={require("../../image/"+carRental?.src)}
                                // car1.image.toString()}
                                alt="no image"
                                />
                              {/* <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Heading
                                </Typography>
                                <Typography>
                                  this car can be your car to your dream day.
                                </Typography>
                              </CardContent>
                             */}
                            </Card>
                          </Grid>
            </Grid>

          

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send a request
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/about/" variant="body2">
                 { "For help click here"}
                </Link>
              </Grid>
            </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

// הזמנים והתאריכים 
         {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
           <Stack spacing={3}>
--------------------------1
                  <MobileDatePicker
                      label="Rental Day"
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
----------------------------2
                    <MobileDatePicker
                      label="Return Day"
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
------------------------3
                    <TimePicker
                      label="Time"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                
          </Stack>
    </LocalizationProvider> */}
 

//     <Grid container spacing={2}>
//     <Grid item key={idCar} xs={12} sm={6} md={4}>
//   <Card
//     sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//   >
//     {car.src&&
//     <CardMedia
//       component="img"
//       sx={{
//         // 16:9
//         pt: '56.25%',

//       }}
//       image={require("../../image/"+car.src)}
//       // car1.image.toString()}
//       alt="no image"
//       />}
//     {/* <CardContent sx={{ flexGrow: 1 }}>
//       <Typography gutterBottom variant="h5" component="h2">
//         Heading
//       </Typography>
//       <Typography>
//         this car can be your car to your dream day.
//       </Typography>
//     </CardContent>
//    */}
//   </Card>
// </Grid>
// <Grid/>










// export default function ComplexGrid() {
//   return (
//     <Paper
//       sx={{
//         p: 2,
//         margin: 'auto',
//         maxWidth: 500,
//         flexGrow: 1,
//         backgroundColor: (theme) =>
//           theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//       }}
//     >
//       <Grid container spacing={2}>
//         <Grid item>
//           <ButtonBase sx={{ width: 128, height: 128 }}>
//             <Img alt="complex" src="/static/images/grid/complex.jpg" />
//           </ButtonBase>
//         </Grid>
//         <Grid item xs={12} sm container>
//           <Grid item xs container direction="column" spacing={2}>
//             <Grid item xs>
//               <Typography gutterBottom variant="subtitle1" component="div">
//                 Standard license
//               </Typography>
//               <Typography variant="body2" gutterBottom>
//                 Full resolution 1920x1080 • JPEG
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 ID: 1030114
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                 Remove
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <Typography variant="subtitle1" component="div">
//               $19.00
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }
