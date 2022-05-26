import React, { useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Feed from './app/pages/feed';
import placeholder from './assets/placeholder.jpeg'
import Article from './app/pages/article';
import { fetchContent } from './features/contentSlice';
import { useDispatch } from 'react-redux';

function App() {
  const posts = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent("business"))
}, [])
  
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
