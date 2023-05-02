import axios from "axios";
import {Rental} from "../models/Rental";

export const API = axios.create({
 baseURL: "http://localhost:8585/api/rental",

});

// Create a Rental
export const createRental=(newRental:any)=>API.post("",newRental);
// export const createrental = async (newrental:rental) => {
//   await API.post("", newrental);
// };

// Get all rentals
// export const fetchrentals = () => API.get("/rentals");
export const fetchRentals = () => API.get("/rentals");

// Get selected rental
export const fetchSingleRental = async (id:number) => await API.get(`/${id}`)


// Delete selected rental
export const deleteRental =  (id:number) =>  API.delete(`/${id}`);


// Update selected bool
export const updateRental = (Rental:Rental) => API.put(`/${Rental.idRental}`, Rental)