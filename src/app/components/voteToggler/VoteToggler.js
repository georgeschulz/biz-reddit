import React from "react";
import thumbsup from '../../../assets/thumbsup.png'
import thumbsdown from '../../../assets/thumbsdown.png'
import './VoteToggler.css'

function VoteToggler(props) {
    const { votes } = props;

    return (
        <div className="vote-toggler">
            <img src={thumbsdown} />
            <p>{votes}</p>
            <img src={thumbsup} />
        </div>
    )
}

export default VoteToggler;