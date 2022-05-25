import { createSlice } from "@reduxjs/toolkit";
import placeholder from '../assets/placeholder.jpeg'

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        posts: [
            {
                  id: 0,
                  header: "Jeff Bezos Annouces Retirement",
                  votes: 1000,
                  text: "In surprising news, Amazon founder and CEO Jeff Bezos announced he will be stepping down as the chief executive officer in a press release. Bezos, an extremely wealthy man, will “transition to the role of Executive Chair” later this year, and Andy Jassy will take the reins as CEO and new subject of internet socialist ire. Jassy is currently the chief executive of Amazon’s cloud computing division and part-owner of the Seattle Krakens.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nRelated: MacKenzie Bezos To Give Away Half Her $37 Billion Fortune\n",
                  author: "John Smith",
                  img: placeholder,
                  isUpvoted: false,
                  isDownvoted: false
                },
                {
                  id: 1,
                  header: "Elon Musk is going to space",
                  votes: 1343,
                  text: "Elon is going to space!",
                  author: "John Smith",
                  img: placeholder,
                  isUpvoted: false,
                  isDownvoted: false
                },
                {
                  id: 2,
                  header: "Jeff Bezos Annouces Retirement",
                  votes: 1000,
                  text: "In surprising news, Amazon founder and CEO Jeff Bezos announced he will be stepping down as the chief executive officer in a press release. Bezos, an extremely wealthy man, will “transition to the role of Executive Chair” later this year, and Andy Jassy will take the reins as CEO and new subject of internet socialist ire. Jassy is currently the chief executive of Amazon’s cloud computing division and part-owner of the Seattle Krakens.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nRelated: MacKenzie Bezos To Give Away Half Her $37 Billion Fortune\n",
                  author: "John Smith",
                  img: placeholder,
                  isUpvoted: false,
                  isDownvoted: false
                },
                {
                  id: 3,
                  header: "Jeff Bezos Annouces Retirement",
                  votes: 1000,
                  text: "In surprising news, Amazon founder and CEO Jeff Bezos announced he will be stepping down as the chief executive officer in a press release. Bezos, an extremely wealthy man, will “transition to the role of Executive Chair” later this year, and Andy Jassy will take the reins as CEO and new subject of internet socialist ire. Jassy is currently the chief executive of Amazon’s cloud computing division and part-owner of the Seattle Krakens.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nRelated: MacKenzie Bezos To Give Away Half Her $37 Billion Fortune\n",
                  author: "John Smith",
                  img: placeholder,
                  isUpvoted: false,
                  isDownvoted: false
                },
                {
                  id: 4,
                  header: "Jeff Bezos Annouces Retirement",
                  votes: 1000,
                  text: "In surprising news, Amazon founder and CEO Jeff Bezos announced he will be stepping down as the chief executive officer in a press release. Bezos, an extremely wealthy man, will “transition to the role of Executive Chair” later this year, and Andy Jassy will take the reins as CEO and new subject of internet socialist ire. Jassy is currently the chief executive of Amazon’s cloud computing division and part-owner of the Seattle Krakens.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nRelated: MacKenzie Bezos To Give Away Half Her $37 Billion Fortune\n",
                  author: "John Smith",
                  img: placeholder,
                  isUpvoted: false,
                  isDownvoted: false
                }
            ]
    },
    reducers: {
        upvote: (state, action) => {
            let dataObj = state.posts.find(({id}) => id === action.payload.id);
            let i = state.posts.indexOf(dataObj);

            if(!state["posts"][i]["isUpvoted"]) {
                state["posts"][i]["votes"] += 1;
                state["posts"][i]["isUpvoted"] = true;
                state["posts"][i]["isDownvoted"] = false;
            }
        },
        downvote: (state, action) => {
            let dataObj = state.posts.find(({id}) => id === action.payload.id);
            let i = state.posts.indexOf(dataObj);

            if(!state["posts"][i]["isDownvoted"]) {
                state["posts"][i]["votes"] -= 1;
                state["posts"][i]["isUpvoted"] = false;
                state["posts"][i]["isDownvoted"] = true;
            }
        }
    }
});

const contentSliceReducer = contentSlice.reducer;

export const selectPosts = state => state.content.posts;
export const { upvote, downvote } = contentSlice.actions;
export default contentSliceReducer;
