import React from "react";
import bookmark from '../../../assets/bookmark.png'
import filter from '../../../assets/filter.png'

function Filters() {
    return (
        <nav>
            <div className="nav-group">
                <h3><img src={bookmark} /> Bookmarks</h3>
                <ul className='bookmark-list'>
                    <li>Big Tech</li>
                    <li>Finance</li>
                    <li>Online Business</li>
                    <li>Fundraising</li>
                    <li>Startups</li>
                    <li>Small Business</li>
                </ul>
            </div>
            <div className='nav-group'>
                <h3><img src={filter} /> Filters</h3>
                <ul className='bookmark-list'>
                    <li>OP Only</li>
                    <li>Funny</li>
                    <li>Memes</li>
                </ul>
            </div>
        </nav>
    )
}

export default Filters;