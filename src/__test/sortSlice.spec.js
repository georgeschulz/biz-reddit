import sortSliceReducer from "../features/sortSlice";
import { updateSort } from "../features/sortSlice";

describe('Sort slice reducer', () => {
    it("should return the intial state", () => {
        expect(sortSliceReducer(undefined, {})).toEqual({
            options: [
                {id: 1, title: "Popular", param: "&sort=top"},
                {id: 2, title: "Relevance", param: "&sort=relevance"},
                {id: 3, title: "Hot", param: "&sort=hot"},
                {id: 4, title: "New", param: "&sort=new"},
                {id: 5, title: "Most Comments", param: "&sort=comments"}
            ],
            selectedOption: {id: 2, title: "Relevance", param: "&sort=relevance"}
        })
    }),
    it("should update the sort", () => {
        const prevState = {
            options: [
                {id: 1, title: "Popular", param: "&sort=top"},
                {id: 2, title: "Relevance", param: "&sort=relevance"},
                {id: 3, title: "Hot", param: "&sort=hot"},
                {id: 4, title: "New", param: "&sort=new"},
                {id: 5, title: "Most Comments", param: "&sort=comments"}
            ],
            selectedOption: {id: 2, title: "Relevance", param: "&sort=relevance"}
        }
        expect(sortSliceReducer(prevState, updateSort({id: 4}))).toEqual({
            options: [
                {id: 1, title: "Popular", param: "&sort=top"},
                {id: 2, title: "Relevance", param: "&sort=relevance"},
                {id: 3, title: "Hot", param: "&sort=hot"},
                {id: 4, title: "New", param: "&sort=new"},
                {id: 5, title: "Most Comments", param: "&sort=comments"}
            ],
            selectedOption: {id: 4, title: "New", param: "&sort=new"}
        })
    })
})