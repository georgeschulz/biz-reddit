import React from "react";
import bookmark from '../../../assets/bookmark.png'
import filter from '../../../assets/filter.png'
import { selectFilters, selectSelectedKeywordId } from "../../../features/filterSlice.js";
import { useSelector } from "react-redux";
import { updateKeyword } from "../../../features/filterSlice.js";
import { useDispatch } from "react-redux";
import { selectSortOptions, selectSelectedSortId } from "../../../features/sortSlice.js";
import { updateSort } from "../../../features/sortSlice.js";

function Filters() {
    const keywords = useSelector(selectFilters);
    const options = useSelector(selectSortOptions)
    const selectedKeywordId = useSelector(selectSelectedKeywordId)
    const selectedSortId = useSelector(selectSelectedSortId) 
    const dispatch = useDispatch();

    return (
        <nav>
            <div className="nav-group">
                <h3><img src={bookmark} /> Bookmarks</h3>
                <ul className='bookmark-list'>
                    {keywords.map(keyword => {
                        return (
                            <li 
                                key={keyword.id} 
                                className={selectedKeywordId === keyword.id ? "selected-keyword" : null} 
                                onClick={() => dispatch(updateKeyword({id: keyword.id}))}>
                                {keyword.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='nav-group'>
                <h3><img src={filter} /> Filters</h3>
                <ul className='bookmark-list'>
                    {options.map(option => {
                        return (
                            <li 
                                key={option.id} 
                                className={selectedSortId === option.id ? "selected-keyword" : null}
                                onClick={() => dispatch(updateSort({id: option.id}))}>
                                    {option.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Filters;