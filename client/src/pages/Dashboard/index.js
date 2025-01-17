import React, { useState } from "react";
import Header from "../../Map"
import MessageSender from "../../components/MessageSender"
import Feed from "../../components/Feed";
import Post from "../../components/Post";

function DashboardPage() {
  const [addPostLocation, setAddPostLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '60vh',
    latitude: 37.6,
    longitude: -95.665,
    zoom: 2
  });
  return (
    <div
      style={{ backgroundColor: "lightgray" }}
    >
      <Header addPostLocation={addPostLocation} setAddPostLocation={setAddPostLocation} viewport={viewport} setViewport={setViewport} />
      <Feed>
        <MessageSender addPostLocation={addPostLocation} setAddPostLocation={setAddPostLocation} viewport={viewport} setViewport={setViewport} />
        <Post />
      </Feed>
    </div>
  );
}

export default DashboardPage;
