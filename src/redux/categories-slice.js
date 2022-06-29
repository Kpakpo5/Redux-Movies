import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categoriesList: [],
        currentCategory: ""
    },
    reducers: {
        getCategories: (state, action) => {
            state.categoriesList = action.payload;
        },
        getCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        }
    }
});

export const { getCategories, getCurrentCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;