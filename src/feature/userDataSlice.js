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
        editUserData :(state, { payload }) => {
            return {
                userData: {
                    ...state.userData,
                    firstName: payload.firstName,
                    lastName: payload.lastName
                }
            }
        },
    },
});

export default userDataSlice.reducer;
export const { setUserData, editUserData } = userDataSlice.actions;