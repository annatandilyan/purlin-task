import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    addNewUser,
    getLoggedInUser
} from "../../../requests/index";

export const addNewUserThunk = createAsyncThunk(
    'RealEstates/addNewUser',
    (data) => addNewUser(data)
)
export const getLoggedInUserThunk = createAsyncThunk(
    'RealEstates/getLoggedInUser',
    (login, password) => getLoggedInUser(login, password)
)

const addNewUserThunkFulfilled = (state, {payload}) => {
    state.userId = payload
    localStorage.setItem('userId', payload)

}
const getLoggedInUserThunkFulfilled = (state, {payload}) => {
    state.userId = payload
    localStorage.setItem('userId', payload)
}
export const usersThunkExtraReducer = builder => {
    builder.addCase(addNewUserThunk.fulfilled, addNewUserThunkFulfilled)
        .addCase(getLoggedInUserThunk.fulfilled, getLoggedInUserThunkFulfilled)

}