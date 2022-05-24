import React from "react";
import { useParams } from 'react-router-dom'

function Article(props) {
    const { posts } = props;
    const { id } = useParams();
    const {
        header,
        votes,
        text,
        author,
        img
    } = posts[id];
    
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
        <article>
            <h1>{header}</h1>
            <p className="byline">Written by: {author}</p>
            <img src={img} className="article-image" />
            {htmlDecode(text)}
        </article>
    )
}

export default Article;