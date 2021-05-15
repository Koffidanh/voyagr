import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";
 
import React from 'react'

export default function Camera() {
    return (
        <div>
             <div>
      <Camera ref={camera} />
      <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
      <img src={image} alt='Taken photo'/>
    </div>
  );
        </div>
    )
}

