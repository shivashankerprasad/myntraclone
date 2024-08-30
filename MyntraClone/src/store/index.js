import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchSlice from "./fetchStatusSlice"
import bagSlice from "./bag";

const myntraStore = configureStore({
    reducer:{
        items: itemsSlice.reducer,
        fetchStatus: fetchSlice.reducer,
        bag: bagSlice.reducer,
    }
});


export default myntraStore;