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
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        }
    }
});

export const { getCategories, setCurrentCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;