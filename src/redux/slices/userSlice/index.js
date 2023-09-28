import {createSlice} from "@reduxjs/toolkit";
import {usersThunkExtraReducer} from "../../thunks/userThunk/index";

const initialState = {
    userId: localStorage.getItem('userId'),
    currentUserHouses:[]
}

const UsersSlice = createSlice({
    name:'Users',
    initialState,
    extraReducers:(builder)=> {
        usersThunkExtraReducer(builder)
    }
})

export default UsersSlice.reducer