import {createAsyncThunk} from "@reduxjs/toolkit";

import {getHouses} from "../../../requests";

export const getHousesThunk = createAsyncThunk(
    'Houses/getHouses',
    getHouses
)
const getHousesThunkFulfilled = (state, {payload}) => {
    state.houses = payload
}

export const housesThunkExtraReducer = builder => {
    builder.addCase(getHousesThunk.fulfilled, getHousesThunkFulfilled)
}