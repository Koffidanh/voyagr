import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Map from "../../components/Map"


function DashboardPage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Map />
        <h1>Dashboard</h1>
        <Card />
      </Container>
    </div>
  );
}

export default DashboardPage;
