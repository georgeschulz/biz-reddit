import React from "react";
import thumbsup from '../../../assets/thumbsup.png'
import thumbsdown from '../../../assets/thumbsdown.png'
import './VoteToggler.css'
import { useDispatch } from "react-redux";
import { upvote, downvote } from '../../../features/contentSlice'

function VoteToggler(props) {
    const {votes, id, isUp, isDown} = props;
    const dispatch = useDispatch()

    return (
        <div className="vote-toggler">
            <div className={isDown ? "selected-background" : null}><img src={thumbsdown} className={isDown ? "vote-icon selected-icon" : "vote-icon"} onClick={() => dispatch(downvote({id: Number(id)}))} /></div>
            <p>{votes}</p>
            <div className={isUp ? "selected-background" : null}><img src={thumbsup} className={isUp ? "vote-icon selected-icon" : "vote-icon"} onClick={() => dispatch(upvote({id: Number(id)}))}/></div>
        </div>
    )
}

export default VoteToggler;