import React, { useState } from 'react'
import "./style.css";
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from '../Avatar';
import { useAuth0 } from '@auth0/auth0-react';
import { API } from "../../API"



export default function MessageSender() {
    const { user } = useAuth0();
    const { picture, sub } = user;
    const userID = sub;
    const [input, setInput] = useState({
        title: "",
        description: "",
        image: "",
        latitude: "",
        longitude: "",
        visitDate: "",
        userID: ""
    });



    function handleChange(event) {

        const { name, value } = event.target
        setInput({ ...input, description: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({ description: "" })


        const newPost = {
            title: input.title,
            description: input.description,
            image: input.image,
            latitude: input.latitude,
            longitude: input.longitude,
            visitDate: input.visitDate,
            userID: userID
        }
        console.log(newPost);
        API.savePost(newPost).catch(e => console.log(e))
    }

    return (
        <div className="messageSender">
            <div className="messageSender-top">
                <Avatar
                    avatarImage={picture}
                />
                <form>
                    <input
                        placeholder="What's on your mind?"
                        value={input.description}
                        onChange={handleChange}
                        className="messageInput"
                        type="text"
                    />
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
