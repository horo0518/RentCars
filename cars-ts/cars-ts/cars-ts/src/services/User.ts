import axios from "axios";
import {User} from "../models/User";

export const API = axios.create({
  baseURL: "http://localhost:8585/api/user",
  
});

// Create a User
export const createUser=(newUser:any)=>API.post("",newUser);
// export const createUser = async (newUser:User) => {
//   await API.post("", newUser);
// };

// Get all Users
// export const fetchUsers = () => API.get("/Users");
export const fetchUsers = () => API.get("/users");

// Get selected User
export const fetchSingleUser = async (id:number) => await API.get(`/${id}`)
// get user by mail (login)
export const fetchSingleUserByMail = async (User:any) => await API.post("signIn",User);

// Delete selected User
export const deleteUser =  (id:number) =>  API.delete(`/${id}`);


// Update selected bool
export const updateUser = (User:User) => API.put(`/${User.id}`, User)