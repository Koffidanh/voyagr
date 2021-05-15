import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";


export default function Search(props) {
    return (
        <div className="search-div">
            <div className="search-input">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" {...props}></input>
            </div>
        </div>
    );
}
