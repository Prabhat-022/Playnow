import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchName: null,
        searchedMovie: null
    },
    reducers: {
        setMovieName: (state, action) => {
            state.searchName = action.payload
        },

        setsearchedMovie: (state, action) => {
            state.searchedMovie = action.payload
        }
        
    }
})
export const {
   setMovieName,
   setsearchedMovie
} = searchSlice.actions;
export default searchSlice.reducer;