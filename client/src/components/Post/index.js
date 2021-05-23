import React, { useState, useEffect } from 'react'
import "./style.css"
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
    }, [user.sub]);

    useEffect(() => {
        console.log(messages)
    }, [messages]);

    return (
        messages
            .map(message =>
                <Message
                    title={message.title}
                    profileImage={picture}
                    username={name}
                    timestamp={message.timestamp}
                    description={message.description}
                    image={message.image}
                />)

    )
}