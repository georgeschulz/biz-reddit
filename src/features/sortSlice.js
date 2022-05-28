import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        options: [
            {id: 1, title: "Popular", param: "&sort=top"},
            {id: 2, title: "Relevance", param: "&sort=relevance"},
            {id: 3, title: "Hot", param: "&sort=hot"},
            {id: 4, title: "Popular", param: "&sort=top"},
            {id: 5, title: "New", param: "&sort=new"},
            {id: 6, title: "Most Comments", param: "&sort=comments"}
        ],
        selectedOption: {id: 2, title: "Relevance", param: "&sort=relevance"}
    },
    reducers: {
        updateSort: (state, action) => {
            state.selectedOption = state.options.find(({id}) => id === action.payload.id)
        }
    }
})

const sortSliceReducer = sortSlice.reducer;

export const selectSortOptions = state => state.sort.options;
export const selectSelectedSort = state => state.sort.selectedOption.param;
export const selectSelectedSortId = state => state.sort.selectedOption.id;
export const { updateSort } = sortSlice.actions;
export default sortSliceReducer;