import axios from "axios";
import {Color} from "../models/Color";

export const API = axios.create({
   baseURL: "http://localhost:8585/api/color",
 
});

// Create a Color
export const createcolor=(newcolor:Color)=>API.post("",newcolor);
// export const createcolor = async (newcolor:color) => {
//   await API.post("", newcolor);
// };

// Get all colors
// export const fetchcolors = () => API.get("/colors");
export const fetchcolors = () => API.get("/colors");

// Get selected color
export const fetchSinglecolor = async (id:number) => await API.get(`/${id}`)


// Delete selected color
export const deletecolor =  (id:number) =>  API.delete(`/${id}`);


// Update selected bool
export const updatecolor = (Color:Color) => API.put(`/${Color.id}`, Color)