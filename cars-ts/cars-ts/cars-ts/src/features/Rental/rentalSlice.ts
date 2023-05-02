
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {Rental} from "../../models/Rental";
import { API, createRental,updateRental, deleteRental, fetchRentals,fetchSingleRental } from "../../services/Rental";
import { stat } from 'fs';

//createAsyncThunk-middleware
//פרמטר ראשון טייפ ופרמטר השני פונקציה- בד"כ פרומיס
export const getRentals = createAsyncThunk(
"rental/rentals", async () => {
  const { data } = await fetchRentals();
  return data;
});
export const postRental = createAsyncThunk(
  "rental/addRental",
  async (newRental: Rental) => {
    const { data } = await createRental(newRental);
    return data;
  }
);
export const putRental = createAsyncThunk(
  "rental/update",
  async (Rental:Rental) => {
    const { data } = await updateRental(Rental);
    return data;
  }
);
export const deleteRentalById = createAsyncThunk(
  "rental/delete",
  async (id: number) => {
    await deleteRental(id);
    return id;
  }
);
export const getRental= createAsyncThunk(
  "Rental/getbyId",
async( id: number)=>{
  const { data } = await fetchSingleRental(id);
  return data;
}
)

export interface Rentalstate {
  Rentals: Array<Rental>,
  status:boolean
}

//סטייט גלובלי
const initialState: Rentalstate = {
  Rentals: [],
  status:false
};


export const Rentalslice = createSlice({
  
  name: "rental",
  initialState,
  
  reducers: {
   
    addRental: (state, action: PayloadAction<any>) => {
      state.Rentals.push(action.payload);
    },

  },
  //extraReducers -createAsyncThunk פעולות אחרי 
  extraReducers: (builder) => {

  //הפעולה הצליחה
  builder.addCase(getRentals.fulfilled,(state, action: PayloadAction<any>)=>{
    state.Rentals=action.payload;
    state.status=false;
  })
  //אמצע הפעולה
  builder.addCase(getRentals.pending,(state)=>{
    state.status=true;
  })
  //פעולה נכשלה
  builder.addCase(getRentals.rejected,(state, action: PayloadAction<any>)=>{

  })
  builder.addCase(deleteRentalById.fulfilled,(state, action: PayloadAction<any>)=>{
    let Rentals=state.Rentals.filter(x=>x.idRental!==action.payload)
    state.Rentals=Rentals;
  })

  },
  
});

// Action creators are generated for each case reducer function
export const { addRental } = Rentalslice.actions;

export default Rentalslice.reducer;