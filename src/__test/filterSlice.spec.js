import filterSliceReducer, {updateKeyword} from '../features/filterSlice.js'

describe('Filter slice reducer', () => {
    it('should return the inital state', () => {
        expect(filterSliceReducer(undefined, {})).toEqual({
            keywords: [
                {id: 1, title: "Business News", query: "business news"},
                {id: 2, title: "Business", query: "business knowledge OR business education OR MBA OR big business OR corporate"},
                {id: 3, title: "Tech", query: "big tech OR technology OR amazon OR tesla OR FAANG OR netflix or google OR facebook NOT vote"},
                {id: 4, title: "Finance", query: "stocks OR crypto OR cyrptocurrency OR stock market OR portfolio OR compound interest OR wall street"},
                {id: 5, title: "Crypto", query: "crypto OR cyrptocurrency OR bitcoin OR ethereum OR NFTs"},
                {id: 6, title: "Personal Finance", query: "Dave Ramsey OR personal finance OR saving money OR retirement"}
              ],
              selectedKeyword: {id: 1, title: "Business", query: "biz news"},
        })
    }) 

    it('should update keyword', () => {
        const prevState = {
            keywords: [
                {id: 1, title: "Business News", query: "business news"},
                {id: 2, title: "Business", query: "business knowledge OR business education OR MBA OR big business OR corporate"},
                {id: 3, title: "Tech", query: "big tech OR technology OR amazon OR tesla OR FAANG OR netflix or google OR facebook NOT vote"},
                {id: 4, title: "Finance", query: "stocks OR crypto OR cyrptocurrency OR stock market OR portfolio OR compound interest OR wall street"},
                {id: 5, title: "Crypto", query: "crypto OR cyrptocurrency OR bitcoin OR ethereum OR NFTs"},
                {id: 6, title: "Personal Finance", query: "Dave Ramsey OR personal finance OR saving money OR retirement"}
              ],
              selectedKeyword: {id: 1, title: "Business", query: "biz news"},
        };

        expect(filterSliceReducer(prevState, updateKeyword({id: 2}))).toEqual({
            keywords: [
                {id: 1, title: "Business News", query: "business news"},
                {id: 2, title: "Business", query: "business knowledge OR business education OR MBA OR big business OR corporate"},
                {id: 3, title: "Tech", query: "big tech OR technology OR amazon OR tesla OR FAANG OR netflix or google OR facebook NOT vote"},
                {id: 4, title: "Finance", query: "stocks OR crypto OR cyrptocurrency OR stock market OR portfolio OR compound interest OR wall street"},
                {id: 5, title: "Crypto", query: "crypto OR cyrptocurrency OR bitcoin OR ethereum OR NFTs"},
                {id: 6, title: "Personal Finance", query: "Dave Ramsey OR personal finance OR saving money OR retirement"}
              ],
              selectedKeyword: {id: 2, title: "Business", query: "business knowledge OR business education OR MBA OR big business OR corporate"},
        })
        expect(filterSliceReducer(prevState, updateKeyword({id: 5}))).toEqual({
            keywords: [
                {id: 1, title: "Business News", query: "business news"},
                {id: 2, title: "Business", query: "business knowledge OR business education OR MBA OR big business OR corporate"},
                {id: 3, title: "Tech", query: "big tech OR technology OR amazon OR tesla OR FAANG OR netflix or google OR facebook NOT vote"},
                {id: 4, title: "Finance", query: "stocks OR crypto OR cyrptocurrency OR stock market OR portfolio OR compound interest OR wall street"},
                {id: 5, title: "Crypto", query: "crypto OR cyrptocurrency OR bitcoin OR ethereum OR NFTs"},
                {id: 6, title: "Personal Finance", query: "Dave Ramsey OR personal finance OR saving money OR retirement"}
              ],
              selectedKeyword: {id: 5, title: "Crypto", query: "crypto OR cyrptocurrency OR bitcoin OR ethereum OR NFTs"},
        })
    })
})