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
import NavbarLogin from "../../components/NavbarLogin";

function DashboardPage() {


  return (
    <div>
      <Navbar />
      <NavbarLogin />
      <Container style={{ margin: 0, padding: 0, zIndex: "-1000" }}>
        <Map />
      </Container>
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10, zIndex: "1000" }}>
        <ProfileImage
          avatarImage="https://pbs.twimg.com/profile_images/1148822091682045952/vR2t82Hy.jpg"
        />
      </Container>
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5, zIndex: "1000" }}>
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
