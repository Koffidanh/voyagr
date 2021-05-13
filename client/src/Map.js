import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import "./map.css";

import { createdPosts } from './API';
import PostForm from './components/PostForm';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '50vh',
    latitude: 37.6,
    longitude: -95.665,
    zoom: 2
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default Map;
