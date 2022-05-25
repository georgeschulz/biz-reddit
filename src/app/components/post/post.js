import React from 'react';
import './Post.css'
import upvote from '../../../assets/upvote.png'
import downvote from '../../../assets/downvote.png'
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, header, votes, text, author, img } = post;
    return (
        <div className='post'>
            <div className='vote-column desktop-only'>
                <div className="vote-controls">
                    <img src={upvote} />
                    <p>{votes}</p>
                    <img src={downvote} />
                </div>
            </div>
            <Link to={`/post/${id}`}>
                <div className='content-column'>
                    <h2>{header}</h2>
                    <p>{text.substring(0, 200)}... <a className="hyperlink" href="#">Read more.</a></p>
                    <img src={img} />
                </div>
            </Link>
        </div>
    )
}

export default Post;