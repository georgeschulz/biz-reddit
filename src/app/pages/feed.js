import React from 'react';
import bookmark from '../../assets/bookmark.png'
import filter from '../../assets/filter.png'
import Post from '../components/post/Post'
import logo from '../../assets/logo.png'


function Feed(props) {
    const { posts } = props;

    return (
        <div>
            <div className='header-logo-group'>
                <img src={logo} className="logo" />
                <h1>Business Reddit</h1>
            </div>
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
                    {posts.map(post => <Post key={post.id} post={post} />)}
                </div>
            </main>
        </div>
    )
}

export default Feed;