import React from 'react'

import "./style.css";

export default function ProfileImage({ avatarImage }) {

    return (

        <div className="imageDiv" >
            <img className="profileImage" src={avatarImage} alt="" style={{ width: 200, borderRadius: 1000 }} />
        </div>
    )
}