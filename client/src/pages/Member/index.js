import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Card from "../../components/Card";

function MemberPage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <h1>Member</h1>
        <Card />
      </Container>
    </div>
  );
}

export default MemberPage;
