import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: null,
    data: {},
}
const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        openPopup: (state, {payload}) => {
            state.name = payload.name
            state.data = payload.data
        },
        closePopup: (state) => {
            state.name = null
            state.data = {}
        }
    }
})
export const {openPopup, closePopup} = popupSlice.actions
export default popupSlice.reducer