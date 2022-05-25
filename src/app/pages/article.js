import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import back from '../../assets/back.png'
import './article.css'
import logo from '../../assets/logo.png'
import VoteToggler from "../components/voteToggler/VoteToggler.js";
import { useSelector } from "react-redux";
import { selectPosts } from "../../features/contentSlice";
import { useDispatch } from "react-redux";

function Article(props) {
    const posts = useSelector(selectPosts)
    const { id } = useParams();
    const {
        header,
        votes,
        text,
        author,
        img,
    } = posts[id];

    const dispatch = useDispatch();

    function htmlDecode(input) {
        const paragraphs = input.split("\n");
        const parsedParagraphs = [];

        paragraphs.forEach(paragraph => {
            var doc = new DOMParser().parseFromString(paragraph, "text/html");
            parsedParagraphs.push(doc.documentElement.textContent)
        })

        return parsedParagraphs.map(p => <p>{p}</p>);
    }

    return (
        <div>
            <header>
                <Link to="/">
                    <img src={back} className="back-icon" />
                </Link>
                <div className="header-logo-group">
                    <img src={logo} className="logo" />
                    <h1>Business Reddit</h1>
                </div>
            </header>
            <article>
                <h1>{header}</h1>
                <p className="byline">Written by: {author}</p>
                <img src={img} className="article-image" />
                <VoteToggler votes={votes} id={id} />
                {htmlDecode(text)}
            </article>
        </div>
    )
}

export default Article;