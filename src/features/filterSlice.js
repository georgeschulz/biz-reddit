import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        keywords: [
            {id: 1, title: "Business News", query: "business news"},
            {id: 2, title: "Business", query: "business knowledge OR business education OR MBA OR big business OR corporate"},
            {id: 3, title: "Tech", query: "big tech OR technology OR amazon OR tesla OR FAANG OR netflix or google OR facebook NOT vote"},
            {id: 4, title: "Finance", query: "stocks OR crypto OR cyrptocurrency OR stock market OR portfolio OR compound interest OR wall street"},
            {id: 5, title: "Crypto", query: "crypto OR cyrptocurrency OR bitcoin OR ethereum OR NFTs"},
            {id: 6, title: "Personal Finance", query: "Dave Ramsey OR personal finance OR saving money OR retirement"}
          ],
          selectedKeyword: {id: 1, title: "Business", query: "biz news"},
    },
    reducers: {
        updateKeyword: (state, action) => {
            let obj = state.keywords.find(({ id }) => id === action.payload.id);
            state.selectedKeyword = obj
        }
    }
});

const filterSliceReducer = filterSlice.reducer;

export const selectFilters = state => state.filter.keywords;
export const selectSelectedKeyword = state => state.filter.selectedKeyword.query;
export const selectSelectedKeywordId = state => state.filter.selectedKeyword.id;
export const { updateKeyword } = filterSlice.actions;
export default filterSliceReducer;