import {combineReducers} from "@reduxjs/toolkit";

import usersReducer from '../slices/userSlice';
import popupReducer from '../slices/popupSlice';
import housesReducer from './housesSlice';

const rootReducer = combineReducers({
   houses:housesReducer,
   popup: popupReducer,
   users: usersReducer,
})
export default rootReducer