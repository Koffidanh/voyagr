import React from 'react'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth0 } from '@auth0/auth0-react';
import "./style.css";

export default function ProfileImage({ avatarImage }) {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated && (

        <div className="imageDiv" >
            {/* <FontAwesomeIcon icon={faUserCircle} size="4x" /> */}
            <img className="profileImage" src={avatarImage} alt="" style={{ width: 200, borderRadius: 1000 }} />
        </div>
    )
}
