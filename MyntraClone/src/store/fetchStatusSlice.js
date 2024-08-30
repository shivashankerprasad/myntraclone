import { createSlice} from "@reduxjs/toolkit"

const fetchSlice = createSlice({
    name: 'fetchStatus',
    initialState:{
        fetchStatus: false,
        fetchingStatus: false
    },
    reducers:{
        markFetchDone: (state) => {
            state.fetchStatus = true
        },
        markFetchingStarted: (state) => {
            state.fetchingStatus = true
        },
        markFetchingFinished: (state) => {
            state.fetchingStatus = false
        }
    }
});
export const fetchActions = fetchSlice.actions;

export default fetchSlice;