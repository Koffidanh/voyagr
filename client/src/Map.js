import React, { useState, useEffect, useRef, useCallback } from 'react';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { Nav, NavMenu } from "./NavbarElements"
import BurgerMenu from "./components/Dropdown"
// import { Nav, NavLink, NavMenu } from "./NavbarElements"
// import { faHome } from '@fortawesome/free-solid-svg-icons'
// import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
// import { faCog } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./map.css";
import { API } from "./utils/API"
import { useAuth0 } from '@auth0/auth0-react';
import ProfileImage from './components/ProfileImage';
import axios from "axios"
var moment = require('moment');


export const Header = () => {
  const { user } = useAuth0();
  const { picture, sub } = user;
  const userID = sub;
  const [input, setInput] = useState({});
  // const [geoLocate, setGeoLocate] = useState("");
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
  const geolocateControlRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const geolocateControlStyle = {
    right: 30,
    top: 15
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/api/dashboard/" + sub)
        setNewPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getPosts()
  }, [sub]);

  const showAddMarkerPopup = (event) => {
    const [longitude, latitude] = event.lngLat;
    setAddPostLocation({ latitude, longitude });
  };

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );

  let timestamp = Date.now()
  var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

  function handleChange(event) {

    const { value } = event.target
    setInput({ ...input, [event.target.name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({ title: "", description: "", image: "", visitDate: "" })

    const newPost = {
      title: input.title,
      description: input.description,
      image: input.image,
      latitude: parseFloat(addPostLocation.latitude).toFixed(2),
      longitude: parseFloat(addPostLocation.longitude).toFixed(2),
      visitDate: input.visitDate,
      userID: userID,
      date: now,
      timestamp: timestamp
    }
    console.log(newPost);
    API.savePost(newPost).catch(e => console.log(e))
  }

  // function geolocateToggle(e) {
  //   e.preventDefault;
  //   setGeoLocate(trackUserLocation = true)
  // }

  return (
    <>
      <Nav>
        <div>
          <button className="geoLocater" ref={geolocateControlRef}>My Current Location</button>
        </div>

        <NavMenu>
          <div
            ref={geocoderContainerRef}
            style={{ position: "relative", right: 95 }}
          />
          {/* <NavLink to="/dashboard" activeStyle={{ textDecoration: "none", color: "#61DAFB" }}>
            <FontAwesomeIcon icon={faHome} size="lg" />
          </NavLink>
          <NavLink to="/" exact activeStyle={{ textDecoration: "none", color: "#61DAFB" }}>
            <FontAwesomeIcon icon={faUserFriends} size="lg" />
          </NavLink>
          <NavLink to="/" exact activeStyle={{ textDecoration: "none", color: "#61DAFB" }}>
            <FontAwesomeIcon icon={faCog} size="lg" />
          </NavLink> */}
        </NavMenu>
        <BurgerMenu />
      </Nav>
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        mapStyle="mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={setViewport}
        onClick={showAddMarkerPopup}
        transitionDuration="200"
      >
        <GeolocateControl
          style={geolocateControlStyle}
          containerRef={geolocateControlRef}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        // auto
        />
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          placeholder="Find Your Destination"
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
                      <p>{post.description}</p>
                      <h6>Latitude, Longitude:</h6>
                      <p> {post.latitude}, {post.longitude} </p>

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
                  <form className="post-form" onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input name="title" required
                      onChange={handleChange}
                      value={input.title} />
                    <label htmlFor="description">Description</label>
                    <input name="description" rows={3}
                      value={input.description}
                      onChange={handleChange}
                    />
                    <label htmlFor="image">Image</label>
                    <input name="image"
                      value={input.image}
                      onChange={handleChange}
                    />
                    <label htmlFor="visitDate">Visit Date</label>
                    <input name="visitDate" type="date"
                      value={input.visitDate}
                      onChange={handleChange}
                    />
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </Popup>
            </>
          ) : null
        }
      </ReactMapGL>
      <ProfileImage
        avatarImage={picture}
      />
    </>
  )
}

export default Header;