import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        moviesPerPage: 4,
        currentPage: 1
    },

    reducers: {
        setMoviesPerPage: (state, action) => {
            state.moviesPerPage = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

export const { setMoviesPerPage, setCurrentPage } = paginationSlice.actions;


export default paginationSlice.reducer;