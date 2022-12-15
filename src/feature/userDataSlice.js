import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        userData: null,
    },
    reducers: {
        setUserData: (state, { payload }) => {
            state.userData = payload;
        },
    },
});

export default userDataSlice.reducer;
export const {setUserData} = userDataSlice.actions;