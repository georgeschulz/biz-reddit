import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import back from '../../assets/back.png'
import './article.css'
import logo from '../../assets/logo.png'
import VoteToggler from "../components/voteToggler/VoteToggler.js";
import { useSelector } from "react-redux";
import { selectPosts } from "../../features/contentSlice.js";
import htmlDecode from "../helpers/decodeHTML.js";

function Article(props) {
    const posts = useSelector(selectPosts)
    const { id } = useParams();
    const {
        header,
        votes,
        originalVotes,
        text,
        author,
        img,
        url
    } = posts[id];

    let isUp = false;
    let isDown = false;

    if (votes > originalVotes) {
        isUp = true;
        isDown = false;
    } else if (votes < originalVotes) {
        isUp = false;
        isDown = true;
    } else {
        isUp = false;
        isDown = false;
    }

    return (
        <div>
            <header>
                <Link to="/">
                    <img alt="back button" src={back} className="back-icon" />
                </Link>
                <div className="header-logo-group">
                    <img alt="biz reddit logo" src={logo} className="logo" />
                    <h1>Business Reddit</h1>
                </div>
            </header>
            <article>
                <h1>{header}</h1>
                <p className="byline">Written by: {author}</p>
                <img alt="article" src={img} className="article-image" />
                <VoteToggler votes={votes} id={id} isUp={isUp} isDown={isDown} />
                <a target="_blank" rel="noreferrer" className="hyperlink" href={url}>{url}</a>
                {htmlDecode(text)}
            </article>
        </div>
    )
}

export default Article;