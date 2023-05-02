
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {Car} from "../../models/Car";
import { createCar,updateCar, deleteCar, fetchCars,fetchSingleCar } from "../../services/Car";
import CarViews from "./ShowCar";
import { Color } from "@mui/material";

//createAsyncThunk-middleware
//פרמטר ראשון טייפ ופרמטר השני פונקציה- בד"כ פרומיס
export const getCars = createAsyncThunk(
"car/cars", async () => {
  const { data } = await fetchCars();
  return data;
});
export const postCar = createAsyncThunk(
  "car/addCar",
  async (newCar: Car) => {
    const { data } = await createCar(newCar);
    return data;
  }
);
export const putCar = createAsyncThunk(
  "car/update",
  async (Car:Car) => {
    const { data } = await updateCar(Car);
    return data;
  }
);
export const deleteCarById = createAsyncThunk(
  "car/delete",
  async (id: number) => {
    await deleteCar(id);
    return id;
  }
);
export const getCar= createAsyncThunk(
  "car/{id}",
async( id: number)=>{
  const { data } = await fetchSingleCar(id);
  return data;
}
)


// import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//   { id: '1', title: 'First Post!', content: 'Hello!' },
//   { id: '2', title: 'Second Post', content: 'More text' }
// ]

// const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {}
// })

// export default postsSlice.reducer
export interface CarState {
 
  Cars: Array<Car>,
  status:boolean,
  currentCar : Car,
}

//סטייט גלובלי
const initialState : CarState = {
  Cars: [],//פה נמצאים כל הרכבים מהשרת שהכנסנו
  status:false,
  currentCar: {id: 0,color:{id:0,description:"",name:"",},company:"",dayPrice:0,licensePlate:0,model:"",seats:0,src:"",status:false,},
};


export const carSlice = createSlice({
  
  name: "car",
  initialState,
  
  reducers: {
   
    addCar: (state, action: PayloadAction<any>) => {
      state.Cars.push(action.payload);
    },
    deleteCar: (state,action: PayloadAction<number>)=>{
   

    },
    getCarBy: (state, action: PayloadAction<any>)=>{
      state.currentCar=(action.payload);
    },
    

  },
  //extraReducers -createAsyncThunk פעולות אחרי 
  extraReducers: (builder) => {

  //הפעולה הצליחה
  builder.addCase(getCars.fulfilled,(state, action: PayloadAction<any>)=>{
    state.Cars=action.payload;
    state.status=false;
  })
  //אמצע הפעולה
  builder.addCase(getCars.pending,(state)=>{
    state.status=true;
  })
  //פעולה נכשלה
  builder.addCase(getCars.rejected,(state, action: PayloadAction<any>)=>{

  })
  builder.addCase(deleteCarById.fulfilled,(state, action: PayloadAction<any>)=>{
    let Cars=state.Cars.filter(x=>x.id!==action.payload)
    state.Cars=Cars;
  })

  },
  
});

// Action creators are generated for each case reducer function
export const { addCar,getCarBy } = carSlice.actions;

export default carSlice.reducer;




  //רכב ראשון
  //   {Id: 12345,
  //   LicensePlate:234234345,
  //   company: "mazda",
  //   model:"e2",
  //   seats:5,
  //   dayPrice: 1500,
  //   status: true,
  //     color:{ idColor:11111,
  //           nameColor:"red",
  //         description: "beautiful"
  //       }
  //  },//רכב שני
  //  {Id: 678910,
  //   LicensePlate:567567567,
  //   company: "mazda",
  //   model:"e2",
  //   seats:7,
  //   dayPrice: 1600,
  //   status: true,
  //     color:{ idColor:11111,
  //           nameColor:"red",
  //         description: "beautiful"
  //       }
  //  },