import {createSlice} from "@reduxjs/toolkit";
import {homesThunkExtraReducer} from "../../thunks/homesThunk";

const initialState = {
    homes: [],
}
const  HomesSlice = createSlice({
    name: 'homes',
    initialState,
    extraReducers: (builder) => {
        homesThunkExtraReducer(builder)
    },
}, {
    immer: false
})
export default HomesSlice.reducer