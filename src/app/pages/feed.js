import React, { useState } from 'react';
import Post from '../components/post/Post'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import Filters from '../components/filters/filters';
import x from '../../assets/x.png'
import { selectPosts } from '../../features/contentSlice';
import { useSelector } from 'react-redux';

function Feed(props) {
    const posts = useSelector(selectPosts)
    console.log(posts)
    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    return (
        <div>
            <header>
                <img src={menu} className="mobile-only back-icon" onClick={() => toggleModal} />
                <div className='header-logo-group'>
                    <img src={logo} className="logo" />
                    <h1>Business Reddit</h1>
                </div>
            </header>
            <main>
                <div className={showModal ? "show modal" : "hidden"}>
                    <img src ={x} className="close-icon" onClick={() => toggleModal} />
                    <Filters />
                </div>
                <aside className='desktop-only'>
                    <Filters />
                </aside>
                <div className='feed'>
                    {posts.map(post => <Post key={post.id} post={post} />)}
                </div>
            </main>
        </div>
    )
}

export default Feed;