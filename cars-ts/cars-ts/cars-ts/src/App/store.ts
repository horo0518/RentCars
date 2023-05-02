import { configureStore } from '@reduxjs/toolkit'//store פונקציה היצורת את 
import carReducer from '../features/Car/carSlice'//reducer מיבאים את פונקצית 
import colorReducer from '../features/Color/colorSlice'//
import rentalReducer from '../features/Rental/rentalSlice'//
import userReducer from '../features/User/userSlice'//

//configureStore=createStore
//עם יכולות נוספות
export const store = configureStore({
  reducer: {
    cars:carReducer, 
    users:userReducer,
    rentals: rentalReducer ,
    colors: colorReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch