import React from 'react';
import './Post.css'
import upvote from '../../../assets/upvote.png'
import downvote from '../../../assets/downvote.png'

const Post = ({ post }) => {
    const { header, votes, text, author, img } = post;
    return (
        <div className='post'>
            <div className='vote-column'>
                <div className="vote-controls">
                    <img src={upvote} />
                    <p>{votes}</p>
                    <img src={downvote} />
                </div>
            </div>
            <div className='content-column'>
                <h2>{header}</h2>
                <p>{text.substring(0, 200)}... <a href="#">Read more.</a></p>
                <img src={img} />
            </div>
        </div>
    )
}

export default Post;