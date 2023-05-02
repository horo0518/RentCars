import axios from "axios";
import {Car} from "../models/Car";

export const API = axios.create({
   baseURL: "http://localhost:8585/api/car"
  
});

// Create a car
export const createCar=(newCar:Car)=>API.post("",newCar);
// export const createcar = async (newcar:car) => {
//   await API.post("", newcar);
// };

// Get all cars
// export const fetchcars = () => API.get("/cars");
export const fetchCars = () => API.get("/cars");

// Get selected car
export const fetchSingleCar = async (id:number) => await API.get(`/${id}`)


// Delete selected car
export const deleteCar =  (id:number) =>  API.delete(`/${id}`);


// Update selected bool
export const updateCar = (car:Car) => API.put(`/${car.id}`, car)