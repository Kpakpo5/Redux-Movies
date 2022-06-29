import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categorieslist: [],
        currentCategory: ""
    },
    reducers: {
        getCategories: (state, action) => {
            state.categorieslist = action.payload;
        },
        getCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        }
    }
});

export const { getCategories, getCurrentCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;