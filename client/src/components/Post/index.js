import React, { useState, useEffect } from 'react'
import Avatar from '../Avatar'
import "./style.css"
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { API } from "../../utils/API"


export default function Post({ timestamp, profileImage, image, username, description }) {

    const [message, setMessage] = useState({
        description: "",
        timestamp: ""
    })

    useEffect(() => {
        API.getPost().then((res) => setMessage(res.data.results))
        console.log(message)
    }, []);



    return (
        <div className="post" >
            <div className="post-top">
                <Avatar avatarImage={profileImage}
                    className="post-avatar" />
                <div className="post-info">
                    <h6>{username}</h6>
                    <h6>{timestamp}</h6>
                </div>
            </div>
            <div className="post-bottom">
                <div className="post-message">
                    <p>{description}</p>
                </div>
                <div className="post-image">
                    <img src={image} alt="" />
                </div>
                <div className="post-options">
                    <div className="post-icon">
                        <FontAwesomeIcon icon={faThumbsUp} size="lg" style={{ marginRight: 7 }} />
                    Like
                    </div>
                    <div className="post-icon">
                        <FontAwesomeIcon icon={faCommentAlt} size="lg" style={{ marginRight: 7 }} />
                    Comment
                    </div>
                    <div className="post-icon">
                        <FontAwesomeIcon icon={faShare} size="lg" style={{ marginRight: 7 }} />
                    Share
                    </div>
                </div>
            </div>
        </div >

    )
}
