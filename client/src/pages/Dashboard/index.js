import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Map from "../../Map"
// import Avatar from "../../components/Avatar"
import MessageSender from "../../components/MessageSender"
import Feed from "../../components/Feed";
import Post from "../../components/Post";
import ProfileImage from "../../components/ProfileImage";
import { useAuth0 } from '@auth0/auth0-react';
import Profile from "../../components/Profile"


function DashboardPage() {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <Navbar />
      <Container style={{ margin: 0, padding: 0, zIndex: "-1000" }}>
        <Map />
      </Container>
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10, zIndex: "1000" }}>
        <ProfileImage
          avatarImage={picture}
        />
        <Profile />
      </Container>
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: "1000" }}>
      </Container>
      <Feed>
        <MessageSender />
        <Post
          profileImage={picture}
          message="Boop Boop"
          username={name}
          image="https://www.nps.gov/articles/images/Cover-GAAR_SeanTevebough.jpg?maxwidth=1200&autorotate=false"
          timestamp=""
        // profileImage="https://pbs.twimg.com/profile_images/1148822091682045952/vR2t82Hy.jpg"
        // message="Boop Boop"
        // username={username}
        // image={image}
        // timestamp={timestamp}
        />
        <Post
          profileImage={picture}
          message="Boop Boop"
          username={name}
          timestamp=""
        />
      </Feed>
    </div>
  );
}

export default DashboardPage;
