import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        keywords: [
            {id: 0, title: "Business", query: "business"},
            {id: 1, title: "Tech", query: "tech"},
            {id: 2, title: "Finance", query: "finance"}
          ],
          selectedKeyword: {id: 0, title: "Business", query: "business"},
    },
    reducers: {
        updateKeyword: (state, action) => {
            console.log("yes")
            let obj = state.keywords.find(({ id }) => id === action.payload.id);
            state.selectedKeyword = obj
        }
    }
});

const filterSliceReducer = filterSlice.reducer;

export const selectFilters = state => state.filter.keywords;
export const selectSelectedKeyword = state => state.filter.selectedKeyword.query;
export const { updateKeyword } = filterSlice.actions;
export default filterSliceReducer;