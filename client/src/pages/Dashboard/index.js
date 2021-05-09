import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Map from "../../components/Map"


function DashboardPage() {
  return (
    <div>
      <Container style={{ margin: 0, padding: 0}}>
        <Map />
        <Card />
      </Container>
    </div>
  );
}

export default DashboardPage;
