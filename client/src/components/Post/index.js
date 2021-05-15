import React from 'react'
import Avatar from '../Avatar'
import "./style.css"
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Post({ profileImage, image, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar avatarImage={profileImage}
                    className="post-avatar" />
                <div className="post-info">
                    <h6>{username}</h6>
                    <h8>Timestamp</h8>
                </div>
            </div>
            <div className="post-bottom">
                <div className="post-message">
                    <p>{message}</p>
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
