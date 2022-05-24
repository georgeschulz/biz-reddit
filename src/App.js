import React from 'react';
import './App.css';
import logo from './assets/logo.png'
import bookmark from './assets/bookmark.png'
import filter from './assets/filter.png'
import Post from './app/components/post/post';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" />
        <h1>Business Reddit</h1>
      </header>
      <main>
        <aside>
          <div className="nav-group">
            <h3><img src={bookmark} /> Bookmarks</h3>
            <ul className='bookmark-list'>
              <li>Big Tech</li>
              <li>Finance</li>
              <li>Online Business</li>
              <li>Fundraising</li>
              <li>Startups</li>
              <li>Small Business</li>
            </ul>
          </div>
          <div className='nav-group'>
            <h3><img src={filter} /> Filters</h3>
            <ul className='bookmark-list'>
              <li>OP Only</li>
              <li>Funny</li>
              <li>Memes</li>
            </ul>
          </div>
        </aside>
        <div className='feed'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </main>
    </div>
  );
}

export default App;
