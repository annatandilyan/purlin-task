import {createAsyncThunk} from "@reduxjs/toolkit";

import {getHomes} from "../../../requests/homesRequests";

export const getHomesThunk = createAsyncThunk(
    'Properties/getProperties',
    getHomes
)
const getHomesThunkFulfilled = (state, {payload}) => {
    state.homes = payload
}

export const homesThunkExtraReducer = builder => {
    builder.addCase(getHomesThunk.fulfilled, getHomesThunkFulfilled)
}