import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Feed from './app/pages/feed.js';
import Article from './app/pages/article.js'
import { fetchContent } from './features/contentSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedKeyword } from './features/filterSlice.js';
import { selectSelectedSort } from './features/sortSlice.js';

function App() {
  const posts = [];
  const dispatch = useDispatch();
  let keyword = useSelector(selectSelectedKeyword)
  let sort = useSelector(selectSelectedSort)
 
  useEffect(() => {
    dispatch(fetchContent(
      {
        filter: keyword,
        sort: sort
      }
    ))
}, [keyword, sort, dispatch])
  
  return (
    <div className="App">
      <div className='main-content-container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Feed posts={posts}></Feed>} />
            <Route path="/post/:id" element={<Article posts={posts}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
