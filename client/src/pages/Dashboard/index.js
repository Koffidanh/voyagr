import React from "react";
import Header from "../../Map"
import MessageSender from "../../components/MessageSender"
import Feed from "../../components/Feed";
import Post from "../../components/Post";

function DashboardPage() {

  return (
    <div
      style={{ backgroundColor: "#F7F7F7" }}
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
