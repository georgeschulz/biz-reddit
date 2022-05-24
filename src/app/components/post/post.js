import React from 'react';

const Post = ({post}) => {
    const { header, votes, text, author, img } = post;
    return (
        <div className='post'>
            <div className='vote-column'>
                <p>{votes}</p>
            </div>
            <div className='content-column'>
                <h2>{header}</h2>
                <p>{text.substring(0, 200)}... Read more.</p>
            </div>
        </div>
    )
}

export default Post;