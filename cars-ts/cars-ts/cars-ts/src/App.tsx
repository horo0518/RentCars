
	import React from 'react';
	import logo from './logo.svg';
	import './App.css';
	import { Route,Routes } from "react-router-dom";
	import  HomePage  from './Routing/HomePage';
	import SignInSide from "./Routing/Login";
	import  SignUp  from './Routing/SignUp';
	import  About  from './Routing/About';
	import   Navbar from './Routing/NavBar';
	import AddCar from './features/Car/addCar';
	import AddRental from './features/Rental/addRental';
import ShowColor from './features/Color/showColor';
import ShowCar from './features/Car/ShowCar';
	function App() {
	
	  return (
	      <div className=''>
	    <Navbar/> 
		 {/* <ResponsiveAppBar/> */}
	       <Routes>
	      <Route  path='home'  element={<HomePage/>}></Route>
	       <Route path='login' element={<SignInSide/>}></Route>
	       <Route path='signUp' element={<SignUp/>}></Route>
	       <Route path="about" element={<About />}></Route>     
	      
		   <Route path='addCar' element={<AddCar/>}></Route>
		   <Route path='addRental' element={<AddRental/>}></Route>
		   <Route path='showColor' element={<ShowColor/>}></Route>
		   <Route path='addRental/:idCarRental' element={<AddRental/>}></Route>
		   <Route path='showColor/:nameParam' element={<ShowColor/>}></Route>
		   <Route path='showCar/:idcar' element={<ShowCar/>}></Route>
		   
	       </Routes> 
		   </div>
	  );
	}
	
	export default App;

