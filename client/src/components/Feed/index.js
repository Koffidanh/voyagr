import React from 'react'

export default function Feed(props) {

    return (
        <>
            <div className={`feed container${props.fluid ? "-fluid" : ""}`} {...props} />
        </>
    )
}