import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";


function LoginPage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <h1>Login</h1>
        <Card />
      </Container>
    </div>
  );
}

export default LoginPage;
