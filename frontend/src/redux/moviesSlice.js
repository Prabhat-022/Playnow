import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        popularMoving: null,
        topRatedMovie: null,
        upcomingMoving: null,
        tailorMovie: null,
    },
    reducers: {
        //actions
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        getPopularMovies: (state, action) => {
            state.popularMoving = action.payload;
        },
        getTopRatedMovies: (state, action) => {
            state.topRatedMovie = action.payload;
        },
        getUpcomingMovies: (state, action) => {
            state.upcomingMoving = action.payload;
        },
        getTailorMovies: (state, action) => {
            state.tailorMovie = action.payload;
        }
    }
});

export const { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getTailorMovies } = movieSlice.actions;
export default movieSlice.reducer;