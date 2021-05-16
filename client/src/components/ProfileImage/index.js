import React from 'react'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";

export default function ProfileImage({ avatarImage }) {
    return (
        <div className="imageDiv" >
            {/* <FontAwesomeIcon icon={faUserCircle} size="4x" /> */}
            <img  className="profileImage" src={avatarImage} alt="" style={{  width: 200, borderRadius: 1000 }} />
        </div>
    )
}
