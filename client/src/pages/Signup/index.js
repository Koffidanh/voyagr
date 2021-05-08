import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Card from "../../components/Card";

function SignupPage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <h1>Signup</h1>
        <Card />
      </Container>
    </div>
  );
}

export default SignupPage;
