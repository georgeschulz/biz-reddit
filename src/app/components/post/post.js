import React from 'react';
import './Post.css'
import upvoteIcon from '../../../assets/upvote.png'
import downvoteIcon from '../../../assets/downvote.png'
import { Link } from 'react-router-dom';
import { upvote, downvote } from '../../../features/contentSlice';
import { useDispatch } from 'react-redux';

const Post = ({ post }) => {
    const { id, header, votes, text, author, img } = post;
    const dispatch = useDispatch();

    return (
        <div className='post'>
            <div className='vote-column desktop-only'>
                <div className="vote-controls">
                    <img src={upvoteIcon} onClick={() => dispatch(upvote({id: id}))} />
                    <p>{votes}</p>
                    <img src={downvoteIcon} onClick={() => dispatch(downvote({id: id}))} />
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