import React, {useEffect} from 'react';
import './Post.css'
import upvoteIcon from '../../../assets/upvote.png'
import downvoteIcon from '../../../assets/downvote.png'
import { Link } from 'react-router-dom';
import { upvote, downvote } from '../../../features/contentSlice';
import { useDispatch } from 'react-redux';
import specialDecode from '../../helpers/specialDecode';

const Post = ({ post }) => {
    const { id, header, votes, text, author, img, hasImg } = post;
    const dispatch = useDispatch();
    
    

    let image;
    if(img !== null) {
        image = (<img src={img} />)
    } else {
        image = null;
    }

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
                    <h2>{specialDecode(header)}</h2>
                    <p>{specialDecode(text).substring(0, 200)}... <p className="hyperlink" href="#">Read more.</p></p>
                    {image}
                </div>
            </Link>
        </div>
    )
}

export default Post;