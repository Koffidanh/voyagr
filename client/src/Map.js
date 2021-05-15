import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import "./map.css";

import { createdPosts } from './API';
import PostForm from './components/PostForm';

function Map() {
  const [newPosts, setNewPosts] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addPostLocation, setAddPostLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '50vh',
    latitude: 37.6,
    longitude: -95.665,
    zoom: 2
  });

  const getPosts = async () => {
    const newPosts = await createdPosts();
    setNewPosts(newPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const showAddMarkerPopup = (event) => {
    const [ longitude, latitude ] = event.lngLat;
    setAddPostLocation({
      latitude,
      longitude,
    });
  };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      >
      {
        newPosts.map(post => (
          <React.Fragment key={post._id}>
            <Marker
              latitude={post.latitude}
              longitude={post.longitude}
            >
              <div
                onClick={() => setShowPopup({
                  // ...showPopup,
                  [post._id]: true,
                })}
              >
                <svg
                  className="marker orange"
                  style={{
                    height: `${6 * viewport.zoom}px`,
                    width: `${6 * viewport.zoom}px`,
                  }}
                  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                  <g>
                    <g>
                      <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                        c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                        c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                    </g>
                  </g>
                </svg>
              </div>
            </Marker>
            {
              showPopup[post._id] ? (
                <Popup
                  latitude={post.latitude}
                  longitude={post.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  dynamicPosition={true}
                  onClose={() => setShowPopup({})}
                  anchor="top" >
                  <div className="popup">
                    <h3>{post.title}</h3>
                    <p>{post.comments}</p>
                    {post.image && <img src={post.image} alt={post.title} />}
                  </div>
                </Popup>
              ) : null
            }
          </React.Fragment>
        ))
      }
      {
        addPostLocation ? (
          <>
          <Marker
            latitude={addPostLocation.latitude}
            longitude={addPostLocation.longitude}
          >
            <div>
              <svg
                className="map-pin #282C34"
                style={{
                  height: `${6 * viewport.zoom}px`,
                  width: `${6 * viewport.zoom}px`,
                }}
                version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                <g>
                  <g>
                    <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                      c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                      c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                  </g>
                </g>
              </svg>
            </div>
          </Marker>
          <Popup
            latitude={addPostLocation.latitude}
            longitude={addPostLocation.longitude}
            closeButton={true}
            closeOnClick={false}
            dynamicPosition={true}
            onClose={() => setAddPostLocation(null)}
            anchor="top" >
            <div className="popup">
              <PostForm onClose={() => {
                setAddPostLocation(null);
                newPosts();
              }} location={addPostLocation} />
            </div>
          </Popup>
          </>
        ) : null
      }
    </ReactMapGL>
  );
}

export default Map;
