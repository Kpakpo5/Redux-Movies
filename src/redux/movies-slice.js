import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList: [],
    },
    reducers: {
        getMovies: (state, action) => {
            state.moviesList = action.payload;
        },
    }
});

export const { getMovies } = moviesSlice.actions;

export default moviesSlice.reducer;