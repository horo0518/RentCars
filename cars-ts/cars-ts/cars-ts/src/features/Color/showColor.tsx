import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../App/store';
import { getCars } from '../Car/carSlice';
import { Car } from '../../models/Car';
//import  '../image/pinkCar/pink0.jpg';

function Copyright() {
  
  return (
    <Typography variant="body2" color="text.secondary" align="center">
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

export default function ShowColor() {

  const {nameParam}=useParams() 
  console.log(nameParam);                   //להצהיר על פונקציה שאיתה יהיה אפשר להשתמש עם הצבע שהגיע בניתוב
  const navigate = useNavigate();            //להצהיר על פונקציה כדי שיהיה אפשר לעבור לדף אחר על ידי הניתוב של הדף
                                           // שם מוגדים כל הניתובים האפשריים שאותם אפשר לכתוב למעלה באתר ולהגיע אליהם אם הם עובדים app.tsx בדף הראשי 
  const Allcars = useSelector((state: RootState) => state.cars.Cars);
                                                //store   פונקציה זו נגשת לסטייט המרכזי שב
  const dispatch:AppDispatch = useDispatch();       //פונקציה זו מצהירה על כלי שרידקס הביא לנו שאיתו אפשר לגשת לפונקציות שמתקשרות לגאווה
  console.log(Allcars);                            //סתם בדיקה
                                                      //זאת פונקציה שקוראת בכל רינדור של הקומפוננטה
      // Allcars.filter((c:Car)=>c.color.nameColor==name)
const specificColor =Allcars.filter((c:Car)=> c.color.name==nameParam)
console.log(specificColor);
  useEffect(()=>{//פונקציה שפועלת בכל פעם שהקומפוננטה עולה או שאחד מהנתונים שבסטטיט
      dispatch(getCars());                                      // carslice קורא לפונקציות שב   dispatch ה
      },[]);
      //נכנס למערך הריק מה שחזר
     
      //קיבלנו את המערך

  return (
  <>
 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* //סרגל כלים נוסף */}
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            cars
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              cars
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              choose your perfect car to your event
              {/* &apos; זה קיצור לגרש למקרה ותהיתם*/}
            </Typography>
            <Stack
              sx={{ pt: 10 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
              
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
         {specificColor && specificColor.map((car1) => (

        <Grid item key={car1.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            {car1.src&&
            <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: '56.25%',

              }}
              image={require(`../../image/${car1.src}`)}
              // car1.image.toString()}
              alt="no image"
              />}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                this car can be your car to your dream day.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {
                navigate(`/showCar/${car1.id}`);}
               }>view</Button>
              <Button size="small" onClick={() => {
                console.log(car1)
            navigate(`/addRental/${car1.id}`);
                
                         }}
                    >rental</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
             
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
    </>
  );
}




    // {specificColor && specificColor.map((car1) => (

    //   <Grid item key={car1.color.idColor} xs={12} sm={6} md={4}>
    //     <Card
    //       sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    //     >
    //       {car1.image&&
    //       <CardMedia
    //         component="img"
    //         sx={{
    //           // 16:9
    //           pt: '56.25%',
    //         }}
    //         image={require("../../image/"+car1.image)}
    //         // car1.image.toString()}
    //         alt="no image"
    //         />}
    //       <CardContent sx={{ flexGrow: 1 }}>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           Heading
    //         </Typography>
    //         <Typography>
    //           this car can be your car to your dream day.
    //         </Typography>
    //       </CardContent>
    //       <CardActions>
    //         <Button size="small">rental</Button>
    //         <Button size="small" onClick={() => {
    //       navigate(`/addRental/${car1.Id}`);}}
    //               >Edit</Button>
    //       </CardActions>
    //     </Card>
    //   </Grid>
    // ))}


         
//     {for({Number: index=0; index < specificColor.length(); index++}) (
//       Car car1= specificColor[index];
//   <Grid item key={index} xs={12} sm={6} md={4}>
//   <Card
//     sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//   >
//     {car1.image&&
//     <CardMedia
//       component="img"
//       sx={{
//         // 16:9
//         pt: '56.25%',
//       }}
//       image={require("../../image/"+car1.image)}
//       // car1.image.toString()}
//       alt="no image"
//       />}
//     <CardContent sx={{ flexGrow: 1 }}>
//       <Typography gutterBottom variant="h5" component="h2">
//         Heading
//       </Typography>
//       <Typography>
//         this car can be your car to your dream day.
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">rental</Button>
//       <Button size="small" onClick={() => {
//     navigate(`/addRental/${car1.Id}`);}}
//             >Edit</Button>
//     </CardActions>
//   </Card>
// </Grid>
// )}