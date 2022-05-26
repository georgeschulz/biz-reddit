import { createSlice } from "@reduxjs/toolkit";
import placeholder from '../assets/placeholder.jpeg'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async (query, thunkAPI) => {
    const response = await fetch("https://www.reddit.com/search.json?q=business")
    const json = await response.json();
    return json;
  }
)

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    posts: [],
    isLoading: false,
    failedToLoad: false
  },
  reducers: {
    upvote: (state, action) => {
      let dataObj = state.posts.find(({ id }) => id === action.payload.id);
      let i = state.posts.indexOf(dataObj);

      if (state["posts"][i]["votes"] < state["posts"][i]["originalVotes"] + 1) {
        state["posts"][i]["votes"] += 1;
      }
    },
    downvote: (state, action) => {
      let dataObj = state.posts.find(({ id }) => id === action.payload.id);
      let i = state.posts.indexOf(dataObj);

      if (state["posts"][i]["votes"] > state["posts"][i]["originalVotes"] - 1) {
        state["posts"][i]["votes"] -= 1;
      }
    }
  },
  /**
   * {
        id: 0,
        header: "Jeff Bezos Annouces Retirement",
        originalVotes: 1000,
        votes: 1000,
        text: "In surprising news, Amazon founder and CEO Jeff Bezos announced he will be stepping down as the chief executive officer in a press release. Bezos, an extremely wealthy man, will “transition to the role of Executive Chair” later this year, and Andy Jassy will take the reins as CEO and new subject of internet socialist ire. Jassy is currently the chief executive of Amazon’s cloud computing division and part-owner of the Seattle Krakens.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nRelated: MacKenzie Bezos To Give Away Half Her $37 Billion Fortune\n",
        author: "John Smith",
        img: placeholder
      }
   */
  extraReducers: {
    [fetchContent.pending]: (state, action) => {
      state.isLoading = true;
      state.failedToLoad = false;
    },
    [fetchContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = true;
    },
    [fetchContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = false;
      action.payload.data.children.forEach((child, i) => {
        let post = {
          id: i,
          header: child.data.title,
          originalVotes: child.data.ups - child.data.downs,
          votes: child.data.ups - child.data.downs,
          text: child.data.selftext || "",
          author: child.data.author || "None listed",
          img: child.data.thumbnail || "",
          hasImg: child.data.thumbnail ? true : false,
          sub: child.data.url
        }
        state.posts.push(post)
      })
    }
  }
});

const contentSliceReducer = contentSlice.reducer;

export const selectPosts = state => state.content.posts;
export const { upvote, downvote } = contentSlice.actions;
export default contentSliceReducer;
