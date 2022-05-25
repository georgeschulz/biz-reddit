import React from "react";
import thumbsup from '../../../assets/thumbsup.png'
import thumbsdown from '../../../assets/thumbsdown.png'
import './VoteToggler.css'
import { useDispatch } from "react-redux";
import { upvote, downvote } from '../../../features/contentSlice'

function VoteToggler(props) {
    const {votes, id} = props;
    console.log(id)
    const dispatch = useDispatch()

    return (
        <div className="vote-toggler">
            <img src={thumbsdown} className="vote-icon" onClick={() => dispatch(downvote({id: Number(id)}))} />
            <p>{votes}</p>
            <img src={thumbsup} className="vote-icon" onClick={() => dispatch(upvote({id: Number(id)}))}/>
        </div>
    )
}

export default VoteToggler;