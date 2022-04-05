import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "token",
    initialState: {
        access_token: '',
    },
    reducers: {
        saveToken: (state, action) => {
            state.access_token = action.payload;
        }
    }
});

export const { saveToken } = tokenSlice.actions;
export default tokenSlice.reducer;