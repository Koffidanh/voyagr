import React, { useState, useEffect, useRef, useCallback } from 'react';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
// import MapGL from 'react-map-gl'
import { listNewPosts } from './API';
import NewPostForm from './components/PostForm/NewPostForm';
import "./map.css";

// const geolocateControlStyle = {
//   right: 10,
//   top: 10
// };

const Map = () => {
  const [newPosts, setNewPosts] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addPostLocation, setAddPostLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '60vh',
    latitude: 37.6,
    longitude: -95.665,
    zoom: 2
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const getPosts = async () => {
    const newPosts = await listNewPosts();
    setNewPosts(newPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const showAddMarkerPopup = (event) => {
    const [longitude, latitude] = event.lngLat;
    setAddPostLocation({
      latitude,
      longitude,
    });
  };
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    []
  );

  return (
    <ReactMapGL
      ref={mapRef}
      {...viewport}
      mapStyle="mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
      onDblClick={showAddMarkerPopup}
    >
      {/* <GeolocateControl

        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      /> */}

      <div
        ref={geocoderContainerRef}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
      />
      <Geocoder
        mapRef={mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        position="top-left"
      />

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
                  className="marker yellow"
                  style={{
                    height: `${6 * viewport.zoom}px`,
                    width: `${6 * viewport.zoom}px`,
                  }}
                  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                  <g>
                    <g>
                      <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z" />
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
                    <small>Visited on: {new Date(post.visitDate).toLocaleDateString()}</small>
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
                  className="marker react-blue"
                  style={{
                    height: `${6 * viewport.zoom}px`,
                    width: `${6 * viewport.zoom}px`,
                  }}
                  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                  <g>
                    <g>
                      <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z" />
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
                <NewPostForm onClose={() => {
                  setAddPostLocation(null);
                  getPosts();
                }} location={addPostLocation} />
              </div>
            </Popup>
          </>
        ) : null
      }
    </ReactMapGL>
  )
};


export default Map;
