import React, { useState } from 'react';
import axios from 'axios';
//להוסיף טופס הזמנה

import { useDispatch, useSelector } from "react-redux";//
import { AppDispatch, RootState } from "../../App/store";//
import { User } from "../../models/User";//מידע בסיסי על אוביקט רכב

import { postUser } from "./userSlice";//הטמעת הפונקציות 

const AddUser = () => {
  // reducers קריאה-שיגור לפעולות
  const dispatch:AppDispatch = useDispatch();
  let u: User = { id: 123, tz: '', password: '123', firstName: '123', lastName: '123', phoneNumber: '123', mail: 'aa', status: 0 };
  const [user, setUser] = useState(u);
  //useSelector-קבלת נתונים
  //userReducer- שם הרדוסר שקראנו ב-store
  //const users = useSelector((state: RootState) => state.userReducer.users);
  const addUserToDB = async() => {
    dispatch(postUser(user));
  }

  return (
    <>
      <button onClick={() => addUserToDB()}>add user</button>
    </>
  );
};


export default AddUser;