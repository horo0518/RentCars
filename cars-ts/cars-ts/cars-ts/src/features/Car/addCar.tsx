
import { useDispatch, useSelector } from "react-redux";//
import { RootState } from "../../App/store";//
import {Car} from "../../models/Car";//מידע בסיסי על אוביקט רכב

import { addCar } from "./carSlice";//הטמעת הפונקציות 

const AddCar = () => {
  // reducers קריאה-שיגור לפעולות
  const dispatch = useDispatch();
  //useSelector-קבלת נתונים
  //carReducer- שם הרדוסר שקראנו ב-store
  //const cars = useSelector((state: RootState) => state.carReducer.cars);

  let car: Car;
  return (
    <>
      <button onClick={() => dispatch(addCar(car))}>add car</button>
    </>
  );
};


export default AddCar;