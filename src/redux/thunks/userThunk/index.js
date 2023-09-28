import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    editHouse,
    addNewUser,
    deleteHouse,
    createNewHouse,
    getLoggedInUser,
    getCurrentUserHouses,
} from "../../../requests/index";


export const addNewUserThunk = createAsyncThunk(
    'Houses/addNewUser',
    (data) => addNewUser(data)
)
export const getLoggedInUserThunk = createAsyncThunk(
    'Houses/getLoggedInUser',
    (login, password) => getLoggedInUser(login, password)
)
export const createNewHouseThunk = createAsyncThunk(
    'Houses/createNewHouse',
    (data) => createNewHouse(data)
)

export const getCurrentUserHousesThunk = createAsyncThunk(
    'Houses/getCurrentUserHouses',
    (id) => getCurrentUserHouses(id)
)
export const editHouseThunk = createAsyncThunk(
    'Houses/editHouse',
    ({data, id}) => editHouse(data, id)
)

export const deleteHouseThunk = createAsyncThunk(
    'Houses/deleteHouse',
    (id) => deleteHouse(id)
)
const deleteHouseThunkFulfilled = (state, {payload}) => {
    state.currentUserHouses = state.currentUserHouses.filter(elm => elm.id !== payload)
}

const addNewUserThunkFulfilled = (state, {payload}) => {
    state.userId = payload
    localStorage.setItem('userId', payload)

}
const getLoggedInUserThunkFulfilled = (state, {payload}) => {
    state.userId = payload
    localStorage.setItem('userId', payload)
}

const createNewHouseThunkFulfilled = (state, {payload}) => {
    state.currentUserHouses.push(payload)
}

const getCurrentUserHousesThunkFulfilled = (state, {payload}) => {
    state.currentUserHouses = payload

}
const editHouseThunkFulfilled = (state, {payload}) => {
    state.currentUserHouses = state.currentUserHouses.map(elm => elm.id === payload.id ? payload : elm)
}
export const usersThunkExtraReducer = builder => {
    builder.addCase(addNewUserThunk.fulfilled, addNewUserThunkFulfilled)
        .addCase(getLoggedInUserThunk.fulfilled, getLoggedInUserThunkFulfilled)
        .addCase(createNewHouseThunk.fulfilled, createNewHouseThunkFulfilled)
        .addCase(getCurrentUserHousesThunk.fulfilled, getCurrentUserHousesThunkFulfilled)
        .addCase(editHouseThunk.fulfilled, editHouseThunkFulfilled)
        .addCase(deleteHouseThunk.fulfilled, deleteHouseThunkFulfilled)

}