import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Map from "../../Map"
// import Avatar from "../../components/Avatar"
import MessageSender from "../../components/MessageSender"
import Feed from "../../components/Feed";
import Post from "../../components/Post";

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <Container style={{ margin: 0, padding: 0 }}>
        <Map />
      </Container>
      <Feed>
        <MessageSender />
        <Post
          profileImage="https://pbs.twimg.com/profile_images/1148822091682045952/vR2t82Hy.jpg"
          message="Boop Boop"
          username="Kayvon"
          image="https://www.nps.gov/articles/images/Cover-GAAR_SeanTevebough.jpg?maxwidth=1200&autorotate=false"
          timestamp=""
        // profileImage="https://pbs.twimg.com/profile_images/1148822091682045952/vR2t82Hy.jpg"
        // message="Boop Boop"
        // username={username}
        // image={image}
        // timestamp={timestamp}
        />
        <Post
          profileImage="https://pbs.twimg.com/profile_images/1148822091682045952/vR2t82Hy.jpg"
          message="Boop Boop"
          username="Kayvon"
          timestamp=""
        />
      </Feed>
    </div>
  );
}

export default DashboardPage;
