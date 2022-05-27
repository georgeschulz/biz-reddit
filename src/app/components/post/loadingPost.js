import React, { useEffect } from 'react';
import './Post.css'
import upvoteIcon from '../../../assets/upvote.png'
import downvoteIcon from '../../../assets/downvote.png'

const LoadingPost = () => {
    return (
        <div className='post center'>
            <div className='content-column'>
                <div class="spin"></div>
            </div>
        </div>
    )
}

export default LoadingPost;