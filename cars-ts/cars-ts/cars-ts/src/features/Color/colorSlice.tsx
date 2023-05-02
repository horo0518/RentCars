
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {Color} from "../../models/Color";
import { API, createcolor,updatecolor, deletecolor, fetchcolors,fetchSinglecolor } from "../../services/Color";
import { stat } from 'fs';

//createAsyncThunk-middleware
//פרמטר ראשון טייפ ופרמטר השני פונקציה- בד"כ פרומיס
export const getColors = createAsyncThunk(
"color/colors", async () => {
  const { data } = await fetchcolors();
  return data;
});
export const postColor = createAsyncThunk(
  "color",
  async (newColor: Color) => {
    const { data } = await createcolor(newColor);
    return data;
  }
);
export const putColor = createAsyncThunk(
  "color",
  async (Color:Color) => {
    const { data } = await updatecolor(Color);
    return data;
  }
);
export const deleteColorById = createAsyncThunk(
  "Color/delete",
  async (id: number) => {
    await deletecolor(id);
    return id;
  }
);
export const getColor= createAsyncThunk(
  "color/{id}",
async( id: number)=>{
  const { data } = await fetchSinglecolor(id);
  return data;
}
)

export interface Colorstate {
  Colors: Array<Color>,
  status:boolean
}

//סטייט גלובלי
const initialState: Colorstate = {
  Colors: [],
  status:false
};


export const Colorslice = createSlice({
  
  name: "Color",
  initialState,
  
  reducers: {
   
    addColor: (state, action: PayloadAction<any>) => {
      state.Colors.push(action.payload);
    },

  },
  //extraReducers -createAsyncThunk פעולות אחרי 
  extraReducers: (builder) => {

  //הפעולה הצליחה
  builder.addCase(getColors.fulfilled,(state, action: PayloadAction<any>)=>{
    
    state.Colors=action.payload;
    state.status=false;
  })
  //אמצע הפעולה
  builder.addCase(getColors.pending,(state)=>{
    state.status=true;
  })
  //פעולה נכשלה
  builder.addCase(getColors.rejected,(state, action: PayloadAction<any>)=>{

  })
  builder.addCase(deleteColorById.fulfilled,(state, action: PayloadAction<any>)=>{
    let Colors=state.Colors.filter(x=>x.id!==action.payload)
    state.Colors=Colors;
  })

  },
  
});

// Action creators are generated for each case reducer function
export const { addColor } = Colorslice.actions;

export default Colorslice.reducer;