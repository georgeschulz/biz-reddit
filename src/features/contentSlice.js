import { createSlice } from "@reduxjs/toolkit";
import placeholder from '../assets/placeholder.jpeg'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async (query, thunkAPI) => {
    let urlWithEndpoint = `https://www.reddit.com/search.json?q=${query}`;
    console.log(urlWithEndpoint)
    const response = await fetch(urlWithEndpoint)
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
      state.posts = [];
      action.payload.data.children.forEach((child, i) => {
        let post = {
          id: i,
          header: child.data.title,
          originalVotes: child.data.ups - child.data.downs,
          votes: child.data.ups - child.data.downs,
          text: child.data.selftext || "",
          author: child.data.author || "None listed",
          img: child.data.thumbnail === "self" ? null : child.data.thumbnail,
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
