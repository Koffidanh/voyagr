import React, { useState } from 'react'
import "./style.css";
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from '../Avatar';
import { useAuth0 } from '@auth0/auth0-react';
import { API } from "../../utils/API"
var moment = require('moment');



export default function MessageSender() {
    let timestamp = Date.now()
    console.log(timestamp); // get current timestamp
    let time = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
    console.log(time); // get current timestamp

    var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(now)
    // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    // const timestamp = Date.now();
    // const time = new Intl.DateTimeFormat('en-US', options).format(timestamp);
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
        userID: "",
        timestamp: ""
    });



    function handleChange(event) {

        const { name, value } = event.target
        setInput({ ...input, description: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({ description: "" })

        const placeholderLat = 25;
        const placeholderLong = -71;

        const newPost = {
            title: input.title,
            description: input.description,
            image: input.image,
            latitude: placeholderLat,
            longitude: placeholderLong,
            visitDate: time,
            userID: userID,
            timestamp: now
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
