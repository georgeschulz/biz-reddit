import React, { useState } from 'react';
import Post from '../components/post/Post.js'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import Filters from '../components/filters/filters.js';
import x from '../../assets/x.png'
import { selectIsLoading, selectPosts } from '../../features/contentSlice.js';
import { useSelector } from 'react-redux';
import LoadingPost from '../components/post/loadingPost.js';

function Feed(props) {
    const posts = useSelector(selectPosts)
    const isLoading = useSelector(selectIsLoading)
    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    let feed; 
    if(isLoading) {
        feed = <div><LoadingPost /><LoadingPost /><LoadingPost /><LoadingPost /><LoadingPost /><LoadingPost /></div>
    } else {
        feed = posts.map(post => <Post key={post.id} post={post} />)
    }

    return (
        <div>
            <header>
                <img src={menu} className="mobile-only back-icon" onClick={() => toggleModal()} />
                <div className='header-logo-group'>
                    <img src={logo} className="logo" />
                    <h1>Business Reddit</h1>
                </div>
            </header>
            <main>
                <div className={showModal ? "show modal" : "hidden"}>
                    <img src ={x} className="close-icon" onClick={() => toggleModal()} />
                    <Filters /> 
                </div>
                <aside className='desktop-only'>
                    <Filters />
                </aside>
                <div className='feed'>
                    {feed}
                </div>
            </main>
        </div>
    )
}

export default Feed;