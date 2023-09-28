import {createAsyncThunk} from "@reduxjs/toolkit";

import {getHouses} from "../../../requests/housesRequests";

export const getHousesThunk = createAsyncThunk(
    'Properties/getProperties',
    getHouses
)
const getHousesThunkFulfilled = (state, {payload}) => {
    state.houses = payload
}

export const housesThunkExtraReducer = builder => {
    builder.addCase(getHousesThunk.fulfilled, getHousesThunkFulfilled)
}