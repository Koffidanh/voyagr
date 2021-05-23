import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Header from "../../Map"
// import Avatar from "../../components/Avatar"
import MessageSender from "../../components/MessageSender"
import Feed from "../../components/Feed";
import Post from "../../components/Post";
import ProfileImage from "../../components/ProfileImage";
import { useAuth0 } from '@auth0/auth0-react';

function DashboardPage() {
  const { user } = useAuth0();
  const { name, picture } = user;

  return (
    <div
      style={{ backgroundColor: "#F7F7F7"}}
    >
      <Header />
      <Feed>
        <MessageSender />
        <Post />
      </Feed>
    </div>
  );
}

export default DashboardPage;
