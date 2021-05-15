import React from 'react'
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Avatar({ avatarImage }) {
    return (
        <div>
            {/* <FontAwesomeIcon icon={faUserCircle} size="4x" /> */}
            <img className="avatarImage" src={avatarImage} alt="" style={{ width: 70, borderRadius: 1000 }} />
        </div>
    )
}
