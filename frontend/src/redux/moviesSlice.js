import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        popularMoving: null,
        topRatedMovie: null,
        upcomingMoving: null,
        tailorMovie: 938614,
        toggle: false,
        id:'',
        movieName:"jaan",
        login:false
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
        },
        gettoggle: (state, action) => {
            state.toggle = !state.toggle
        },
        getid:(state, action) => {
            state.id = action.payload
        },
        getMovieName: (state, action) => {
            state.movieName = action.payload;
        },
        getLogin:(state, action)=>{
            state.login = action.payload
        }
     

    }
});

export const {
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getTailorMovies,
    gettoggle,
    getid,
    getMovieName,
    getLogin
} = movieSlice.actions;
export default movieSlice.reducer;