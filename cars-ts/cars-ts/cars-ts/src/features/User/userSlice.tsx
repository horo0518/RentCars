
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { API, createUser, updateUser, deleteUser, fetchUsers, fetchSingleUser,fetchSingleUserByMail } from "../../services/User";
import { stat } from 'fs';

//createAsyncThunk-middleware
//פרמטר ראשון טייפ ופרמטר השני פונקציה- בד"כ פרומיס
export const getUsers = createAsyncThunk(
  "user/users", async () => {
    const { data } = await fetchUsers();
    return data;
  });
export const postUser = createAsyncThunk(
  "user/addUser",
  async (newUser: User) => {
    const { data } = await createUser(newUser);
    return data;
  }
);
export const putUser = createAsyncThunk(
  "user/update",
  async (User: User) => {
    const { data } = await updateUser(User);
    return data;
  }
);
export const deleteUserById = createAsyncThunk(
  "user/delete",
  async (id: number) => {
    await deleteUser(id);
    return id;
  }
);
export const getUser = createAsyncThunk(
  "user/{id}",
  async (id: number) => {
    const { data } = await fetchSingleUser(id);
    return data;
  }
)

export const getUserByMail = createAsyncThunk(
  "user/signIn",
   async (User: User) => {
     const res= await fetchSingleUserByMail(User);
    return res;
  }
)

export interface Userstate {
  Users: Array<User>,
  status: boolean
  currentUser:User
}

//סטייט גלובלי
const initialState: Userstate = {
  Users: [],
  status: false,
  currentUser:{firstName:"",id:0,lastName:"",mail:"",password:"",phoneNumber:"",status:0,tz:"",}
};


export const Userslice = createSlice({
  name: "User",
  initialState,

  reducers: {

    changeUser: (state, action: PayloadAction<any>) => {
      state.currentUser=(action.payload);
    },

  },
  //extraReducers -createAsyncThunk פעולות אחרי 
  extraReducers: (builder) => {
    //הפעולה הצליחה
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
      state.Users = action.payload;
      state.status = false;
    })
    builder.addCase(postUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.Users.push(action.payload);
      state.status = false;
    })
    //אמצע הפעולה
    builder.addCase(getUsers.pending, (state) => {
      state.status = true;
    })
    //פעולה נכשלה
    builder.addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {

    })
    builder.addCase(deleteUserById.fulfilled, (state, action: PayloadAction<any>) => {
      let Users = state.Users.filter(x => x.id !== action.payload)
      state.Users = Users;
    })
    builder.addCase(getUserByMail.fulfilled, (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload;
    
    })
  },

});

// Action creators are generated for each case reducer function
export const { changeUser } = Userslice.actions;

export default Userslice.reducer;