import {combineReducers} from "@reduxjs/toolkit";
import popupReducer from '../slices/popupSlice'

const rootReducer = combineReducers({
   popup: popupReducer,
})
export default rootReducer