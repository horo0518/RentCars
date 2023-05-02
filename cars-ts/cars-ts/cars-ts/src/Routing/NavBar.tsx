import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react'

 import { NavLink } from 'react-router-dom';
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
import { spacing } from '@mui/system';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

 const theme = createTheme();
export const Navbar = () => {

    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" style={{backgroundColor:'black'}}>
        <Toolbar>
          <DirectionsCarIcon sx={{ mr: 4 }} />
          <Typography variant="h6" color='white'  noWrap  >
          <nav className='navigation'>
        {/* //פעולה של המשתמש- בלחיצה על הכפתור ינווט לדף המתאים */}
           <NavLink to="/home" style={({isActive}) => ({color: isActive ? 'pink' : 'white' })} >home page  </NavLink>
           <NavLink to="/login" style={({isActive}) => ({color: isActive ? 'pink' : 'white'})} > login  </NavLink>
           <NavLink to="/signUp" style={({isActive}) => ({color: isActive ? 'pink' : 'white'})} >signUp </NavLink>
           <NavLink to="/about" style={({isActive}) => ({color: isActive ? 'pink' : 'white'})} >about </NavLink>
           {/* <NavLink to="/colors" style={({isActive}) => ({color: isActive ? 'pink' : 'white'})} >colors </NavLink> */}
     </nav>
          </Typography>
        </Toolbar>
      </AppBar>
    
     
     </ThemeProvider> 
    )
}



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { useNavigate, useParams } from 'react-router-dom';

// const pages = [{id:0, title:'Home', navigate:'home'},{id:1,title:'sign Up',navigate:"signUp"},{id:2,title: "Login",navigate:"login" } ];
// const settings = ['Profile', 'Rentals', 'Logout'];

// function Navbar() {
//   const navigate = useNavigate(); 
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" style={{backgroundColor:'black'}} >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
          
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page.id} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page.title}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page.id}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page.title}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
export default Navbar;


