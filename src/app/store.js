import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "../feature/userDataSlice"

export default configureStore({
    reducer: {
        userData: userDataReducer,
    },
})