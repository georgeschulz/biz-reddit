import React from 'react';
import './Post.css'
import upvoteIcon from '../../../assets/upvote.png'
import downvoteIcon from '../../../assets/downvote.png'
import { Link } from 'react-router-dom';
import { upvote, downvote } from '../../../features/contentSlice.js';
import { useDispatch } from 'react-redux';
import specialDecode from '../../helpers/specialDecode.js';

const Post = ({ post }) => {
    const { id, header, votes, text, img, originalVotes } = post;
    const dispatch = useDispatch();



    let image;
    if (img !== null) {
        image = (<img alt="" src={img} />)
    } else {
        image = null;
    }

    return (
        <div className='post'>
            <div className='vote-column desktop-only'>
                <div className="vote-controls">
                    <img alt="" src={upvoteIcon} className={votes > originalVotes ? "selected-arrow" : "unselected-arrow"} onClick={() => dispatch(upvote({ id: id }))} />
                    <p>{votes}</p>
                    <img alt="" src={downvoteIcon} className={votes < originalVotes ? "selected-arrow" : "unselected-arrow"} onClick={() => dispatch(downvote({ id: id }))} />
                </div>
            </div>
            <Link to={`/post/${id}`}>
                <div className='content-column'>
                    <h2>{specialDecode(header)}</h2>
                    <p>{specialDecode(text).substring(0, 200).trim()} {text.length > 0 ? "..." : ""} {text.length > 0 ? <span className='hyperlink'>Read more</span> : ""}</p>
                    {image}
                </div>
            </Link>
        </div>
    )
}

export default Post;