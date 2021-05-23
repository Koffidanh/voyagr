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
    var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    const { user } = useAuth0();
    const { picture, sub } = user;
    const userID = sub;
    const [input, setInput] = useState({});

    function handleChange(event) {

        const { value } = event.target
        setInput({ ...input, [event.target.name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({ title: "", description: "", image: "", visitDate: "" })

        const placeholderLat = 25;
        const placeholderLong = -71;

        const newPost = {
            title: input.title,
            description: input.description,
            image: input.image,
            latitude: placeholderLat,
            longitude: placeholderLong,
            visitDate: input.visitDate,
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
                    <div
                        style={{ display: "flex" }}
                    >
                        <div
                            className="titleDiv"

                        > <input
                                name="title"
                                placeholder="Title"
                                value={input.title}
                                onChange={handleChange}
                                className="titleInput"
                                type="text"
                            />
                        </div>
                        <p
                            className="visitDateText"
                        >
                            Date Visited:</p>
                        <div
                            className="visitDateDiv"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <input
                                name="visitDate"
                                value={input.visitDate}
                                onChange={handleChange}
                                className="visitDateInput"
                                type="date"
                            />
                        </div>
                    </div>
                    <div
                        style={{ marginTop: 15, width: 950 }}
                    >
                        <input
                            name="description"
                            placeholder="What's on your mind?                                        "
                            value={input.description}
                            onChange={handleChange}
                            className="messageInput"
                            type="text"
                        />
                    </div>
                    <input className="senderBtn" type="submit" value="Submit" onClick={handleSubmit} />
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