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
import { usePosts } from '../../Contexts/PostContexts';
// import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';
import { Container, Col } from '../Grid';
import PhotoListContainer from "../../components/PhotoList";

var moment = require('moment');

export default function MessageSender() {
    let timestamp = Date.now()
    var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    const { user } = useAuth0();
    const { picture, sub } = user;
    const userID = sub;
    const [input, setInput] = useState({});
    const [posts, setPosts] = usePosts();

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
            date: now,
            timestamp: timestamp
        }
        console.log(newPost);
        API.savePost(newPost).catch(e => console.log(e))
        setPosts((newPosts) => [newPost, ...newPosts])
    }

    return (
        <>
            <div className="messageSender">
                <div className="messageSender-forms">
                    <Avatar
                        avatarImage={picture}
                    />
                    <form>
                        <div className="messageSender-top-forms">
                            <Col size="md-6">
                                <div
                                    className="messageSender-top-left-form"
                                >
                                    <input
                                        name="title"
                                        placeholder="Title"
                                        value={input.title}
                                        onChange={handleChange}
                                        className="titleInput"
                                        type="text"
                                    />
                                </div>
                            </Col>
                            <Col size="md-6">
                                <div className="messageSender-top-right-form">
                                    <div className="visitDateText">
                                        Date Visited:
                                        </div>
                                    <div
                                        className="visitDateDiv"
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
                            </Col>
                        </div>
                        <Container>
                            <div className="messageSender-bottom-form"
                                style={{ marginTop: 15 }}
                            >
                                <input
                                    name="description"
                                    placeholder="What's on your mind?                                        "
                                    value={input.description}
                                    onChange={handleChange}
                                    className="descriptionInput"
                                    type="text"
                                />
                            </div>
                            <input className="senderBtn" type="submit" value="Submit" onClick={handleSubmit} />
                        </Container>
                    </form>
                </div>
                <Container>
                    <div className="messageSender-icons">
                        <div className="icons-row-first">
                            <div className="messageSender-icon" variant="primary">
                                <FontAwesomeIcon icon={faMapPin} size="2x" />
                                 Pin
                        </div>
                            <div className="messageSender-icon "   >
                                <FontAwesomeIcon icon={faImages} size="2x" />
                                <PhotoListContainer />
                            </div>
                        </div>
                        <div className="icons-row-second">
                            <div className="messageSender-icon">
                                <FontAwesomeIcon icon={faVideo} size="2x" />
                                Live
                         </div>
                            <div className="messageSender-icon">
                                <FontAwesomeIcon icon={faGrinAlt} size="2x" />
                                Feeling/Activity
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}