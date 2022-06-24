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
        deleteMovie: (state, action) => {
            state.moviesList = state.moviesList.filter((m) => m.title !== action.payload);
        }
    }
});

export const { getMovies, deleteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;