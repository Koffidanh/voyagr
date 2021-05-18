import React, { useState } from 'react'
import "./style.css";
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from '../Avatar';


export default function MessageSender() {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender-top">
                <Avatar
                    avatarImage="https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png"
                />
                <form>
                    <input
                        placeholder="What's on your mind?"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="messageInput" type="text" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>

            </div>
            <div className="messageSender-bottom">
                <div className="messageSender-icon">
                    <FontAwesomeIcon icon={faMapPin} size="2x" style={{ marginRight: 7 }} />
                    Pin
                </div>
                <div className="messageSender-icon">
                    <FontAwesomeIcon icon={faImages} size="2x" style={{ marginRight: 7 }} />
                    Upload Image
                </div>
                <div className="messageSender-icon">
                    <FontAwesomeIcon icon={faVideo} size="2x" style={{ marginRight: 7 }} />
                    Live
                </div>
                <div className="messageSender-icon">
                    <FontAwesomeIcon icon={faGrinAlt} size="2x" style={{ marginRight: 7 }} />
                    Feeling/Activity
                </div>
            </div>
        </div>
    )
}
