import React from "react";
import bookmark from '../../../assets/bookmark.png'
import filter from '../../../assets/filter.png'
import { selectFilters } from "../../../features/filterSlice";
import { useSelector } from "react-redux";
import { updateKeyword } from "../../../features/filterSlice";
import { useDispatch } from "react-redux";
import { selectSortOptions } from "../../../features/sortSlice";
import { updateSort } from "../../../features/sortSlice";

function Filters() {
    const keywords = useSelector(selectFilters);
    const options = useSelector(selectSortOptions)
    const dispatch = useDispatch();

    return (
        <nav>
            <div className="nav-group">
                <h3><img src={bookmark} /> Bookmarks</h3>
                <ul className='bookmark-list'>
                    {keywords.map(keyword => {
                        return <li key={keyword.id} onClick={() => dispatch(updateKeyword({id: keyword.id}))}>{keyword.title}</li>
                    })}
                </ul>
            </div>
            <div className='nav-group'>
                <h3><img src={filter} /> Filters</h3>
                <ul className='bookmark-list'>
                    {options.map(option => {
                        return <li key={option.id} onClick={() => dispatch(updateSort({id: option.id}))}>{option.title}</li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Filters;