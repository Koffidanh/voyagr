import React from 'react'
import "./style.css";
import { useAuth0 } from '@auth0/auth0-react';


export default function Feed(props) {

    const { isAuthenticated } = useAuth0();

    return isAuthenticated && (
        <>
            <div className={`feed container${props.fluid ? "-fluid" : ""}`} {...props} />
        </>
    )
}
