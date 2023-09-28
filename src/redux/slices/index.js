import {combineReducers} from "@reduxjs/toolkit";

import usersReducer from '../slices/userSlice';
import popupReducer from '../slices/popupSlice';
import homesReducer from '../slices/homesSlice';

const rootReducer = combineReducers({
   homes:homesReducer,
   popup: popupReducer,
   users: usersReducer,
})
export default rootReducer