import { configureStore } from "@reduxjs/toolkit";
import { playerSlice } from "./Slice";

const Store = configureStore({
    reducer:{
        player: playerSlice.reducer
    }
})
export default Store;