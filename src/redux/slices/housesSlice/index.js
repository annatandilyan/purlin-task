import {createSlice} from "@reduxjs/toolkit";
import {housesThunkExtraReducer} from "../../thunks/housesThunk";

const initialState = {
    houses: [],
}

const  HousesSlice = createSlice({
    name: 'houses',
    initialState,
    extraReducers: (builder) => {
        housesThunkExtraReducer(builder)
    },
}, {
    immer: false
})
export default HousesSlice.reducer