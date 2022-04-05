import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./token-slice";

export default configureStore({
    reducer: {
        token: tokenReducer,
    },
})