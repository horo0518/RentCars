// import React from 'react'

// export const HomePage = () => {
//     return (
//         <div>
       

//   </div>
 

// )}
import { NavLink } from 'react-router-dom';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import x from  '../image/blueCar/blue0.jpg'
import x1 from '../image/redCar/red0.jpg'
import x2 from '../image/pinkCar/pink3.jpg'
import { color } from '@mui/system';
import ShowColor from '../features/Color/showColor'
import About from './About';
import { useNavigate } from "react-router-dom";
import { red } from '@mui/material/colors';
const images = [
  
  {
    // url: x,//'../image/blueCar/blue0.jpg',
    color:'#80ffff',
    title: 'blue car',
    width: '40%',
    herf: 'showColor',
    name: 'blue'
  },
  {
    // url: x2,//'image/pinkCar/pink3.jpg',
    color: '#FFC0CB',
    title: 'pink car',
    width: '40%',
    herf: 'showColor',
    name: 'pink'
  },
 
  {
    // url: x1,//'image/redCar/red0.jpg',
    color: '#ff6666',
    title: 'red car',
    width: '40%',
    herf: 'showColor',
    name: 'red'
  },
  {
    // url: x2,//'image/pinkCar/pink3.jpg',
    color: '#ffffb3',
    title: 'yellow car',
    width: '40%',
    herf: 'showColor',
    name: 'yellow',
    
  },

  
 
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  
  position: 'relative',
  height: 250,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 200,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // color: theme.palette.common
   color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        // <NavLink to="/about"  >about </NavLink>
        <ImageButton
        //{<ShowColor/>}
            //onClick={navigate("/About")}//<ShowColor {image.color} />}
            onClick={() => {
              // navigate(`/showColor/${image.name}`);
              navigate(`/showColor/${image.name}`);
              console.log(`${image.title} focused!`);
          }}
          focusRipple
          key={image.title}
          style={{
            width: '100%',
          }}
        >
          {/* <ImageSrc style={{ backgroundColor: color} }} /> */}
          <ImageSrc style={{backgroundColor:image.color.toString()}}  />
          <ImageBackdrop className="MuiImageBackdrop-root"  />
          <Image >
            {/* הסבר על איות */}
            <Typography
              component="span"
              variant="subtitle1"
              color='inherit'
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}

