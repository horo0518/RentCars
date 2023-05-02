// import  React from 'react';
// import axios from "axios";
// import { AppDispatch,RootState } from "../../App/store";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getCars,addCar } from "./carSlice";
//  import {Car} from '../../models/Car'
// import addRental from "../Rental/rentalSlice";
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { useNavigate, useParams } from 'react-router-dom';
// import CardMedia from '@mui/material/CardMedia';
// import { getCarBy } from '../Car/carSlice';
// import Card from '@mui/material/Card';
// import { Button, CardActions, CardContent, createTheme, Grid, Stack, ThemeProvider } from '@mui/material';

// function Copyright() {
  
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();
// export default function ShowCar() {
//   const navigate = useNavigate();
//   const {nameParam}=useParams() 
//   const dispatch:AppDispatch = useDispatch();
// return(
// <>


// </>
// );


// }

import  React from 'react';
import axios from "axios";
import { AppDispatch,RootState } from "../../App/store";
import { useDispatch, useSelector } from "react-redux";
import { getCar } from "./carSlice";
 import {Car} from '../../models/Car'
import addRental from "../Rental/rentalSlice";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';


export default function ShowCar() {
 const navigate = useNavigate();
  const {idcar}=useParams(); 
  const dispatch:AppDispatch = useDispatch(); 

 
const allCars = useSelector((state: RootState) => state.cars.Cars);
const  carRental=allCars.find((c:Car)=> c.id==(Number(idcar)));

useEffect(()=> {
dispatch(getCar(Number(idcar)));                                     
},[]);

  return (
    <Card sx={{ maxWidth: 1000, mx:100, mt: 20,}}   >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        // image="/static/images/cards/paella.jpg"
        image={require(`../../image/${carRental?.src}`)}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="center">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
              <Button size="small" onClick={() => {
                   navigate(`/addRental/${carRental?.id}`);}}
                    >rental</Button>
           
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
     
        <CardContent>
          
        </CardContent>
       
     
    </Card>
  );
}
