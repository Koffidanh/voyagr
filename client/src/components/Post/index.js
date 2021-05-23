import React, { useState, useEffect } from 'react'
import Avatar from '../Avatar'
import "./style.css"
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import { faShare } from '@fortawesome/free-solid-svg-icons'
// import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth0 } from '@auth0/auth0-react';
import { API } from "../../utils/API"
import Message from '../Message'


export default function Post(profileImage) {
    const { user } = useAuth0();
    const { name, picture } = user;
    const [messages, setMessages] = useState(
        []
    )

    useEffect(() => {

        API.getPost(user.sub)
            .then(res =>
                setMessages(res.data)
            )
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        console.log(messages)
    }, [messages]);

    return (
        //    <h1>test</h1>
        messages
            .map(message =>
                <Message
                    title={message.title}
                    profileImage={picture}
                    username={name}
                    // username = "Koffi"
                    timestamp={message.timestamp}
                    // timestamp = "05/22/2021"
                    description={message.description}
                    image={message.image}

                />)

    )
}
